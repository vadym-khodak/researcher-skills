export const meta = {
  name: 'review-paper',
  description: 'Multi-agent academic paper review: four independent reviewers run in parallel, synthesizer combines into ranked action items',
  phases: [
    { title: 'Parallel Review', detail: 'Advocate, Methodologist, Literature Critic, and Practical Critic review simultaneously' },
    { title: 'Synthesis', detail: 'Synthesizer combines all reviews into a ranked action list, open questions, and a verdict' }
  ]
}

const paper = typeof args === 'string' ? args : (args && args.paper ? args.paper : '')

if (!paper) {
  log('No paper text provided. Pass the paper text as args when invoking the workflow.')
  return { error: 'No paper text provided. Pass the paper text as: Workflow({ scriptPath: "workflows/review-paper.js", args: "your paper text here" })' }
}

const REVIEW_SCHEMA = {
  type: 'object',
  properties: {
    role:       { type: 'string' },
    summary:    { type: 'string', description: 'One paragraph overall assessment from this reviewer perspective' },
    key_points: { type: 'array', items: { type: 'string' }, description: '3-5 specific, concrete points from this perspective' },
    verdict:    { type: 'string', enum: ['accept', 'minor_revisions', 'major_revisions', 'reject'] }
  },
  required: ['role', 'summary', 'key_points', 'verdict']
}

const SYNTHESIS_SCHEMA = {
  type: 'object',
  properties: {
    overall_assessment:   { type: 'string', description: 'One paragraph synthesizing all reviewers collective view' },
    strengths:            { type: 'array', items: { type: 'string' }, description: 'Strengths to preserve' },
    critical_issues:      {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          issue:    { type: 'string' },
          priority: { type: 'string', enum: ['high', 'medium', 'low'] }
        },
        required: ['issue', 'priority']
      },
      description: 'Issues ranked by priority from most to least critical'
    },
    open_questions:         { type: 'array', items: { type: 'string' }, description: 'Questions the paper raises but does not answer' },
    recommended_verdict:    { type: 'string', enum: ['accept', 'minor_revisions', 'major_revisions', 'reject'] },
    verdict_justification:  { type: 'string', description: 'One paragraph explaining the recommended verdict' }
  },
  required: ['overall_assessment', 'strengths', 'critical_issues', 'open_questions', 'recommended_verdict', 'verdict_justification']
}

const LANG_INSTRUCTION = `IMPORTANT: Detect the language of the paper and write your entire review in that same language. If the paper is in Ukrainian, respond fully in Ukrainian. If in English, respond in English. Never switch languages mid-review.`

const REVIEWERS = [
  {
    role: 'advocate',
    label: 'Advocate',
    prompt: `You are reviewing an academic paper as an ADVOCATE. Your sole focus: identify genuine strengths, articulate the paper's contribution to the field, and make the case for why it deserves publication or acceptance. Be specific — reference actual content, arguments, and data in the paper.

${LANG_INSTRUCTION}

Return structured output with:
- role: "advocate"
- summary: one paragraph overall assessment from your perspective
- key_points: 3-5 specific strengths or contributions you identified
- verdict: your recommended outcome

PAPER TO REVIEW:
${paper}`
  },
  {
    role: 'methodologist',
    label: 'Methodologist',
    prompt: `You are reviewing an academic paper as a METHODOLOGICAL CRITIC. Your sole focus: scrutinise the research design, data collection method, analytical approach, sample size and representativeness, validity, reliability, and whether the conclusions are fully warranted by the evidence. Be rigorous and specific.

${LANG_INSTRUCTION}

Return structured output with:
- role: "methodologist"
- summary: one paragraph overall assessment from your perspective
- key_points: 3-5 specific methodological strengths or issues you identified
- verdict: your recommended outcome

PAPER TO REVIEW:
${paper}`
  },
  {
    role: 'literature_critic',
    label: 'Literature Critic',
    prompt: `You are reviewing an academic paper as a LITERATURE & THEORY CRITIC. Your sole focus: evaluate the theoretical framework, quality and coverage of the literature review, engagement with key debates, use and accuracy of citations, and whether the paper positions itself correctly and originally within the existing body of knowledge.

${LANG_INSTRUCTION}

Return structured output with:
- role: "literature_critic"
- summary: one paragraph overall assessment from your perspective
- key_points: 3-5 specific points about the theoretical and literature positioning
- verdict: your recommended outcome

PAPER TO REVIEW:
${paper}`
  },
  {
    role: 'practical_critic',
    label: 'Practical Critic',
    prompt: `You are reviewing an academic paper as a PRACTICAL IMPACT CRITIC. Your sole focus: evaluate the real-world applicability of the findings, whether practical implications are clearly and convincingly stated, whether conclusions are proportionate to the evidence, and what concrete value practitioners, policymakers, or industry would derive from this work.

${LANG_INSTRUCTION}

Return structured output with:
- role: "practical_critic"
- summary: one paragraph overall assessment from your perspective
- key_points: 3-5 specific points about practical relevance and impact
- verdict: your recommended outcome

PAPER TO REVIEW:
${paper}`
  }
]

phase('Parallel Review')
log('Dispatching 4 independent reviewers in parallel...')

const reviews = await parallel(REVIEWERS.map(r => () =>
  agent(r.prompt, {
    label: r.label,
    phase: 'Parallel Review',
    schema: REVIEW_SCHEMA
  })
))

const validReviews = reviews.filter(Boolean)
log(`${validReviews.length} of ${REVIEWERS.length} reviews completed`)

phase('Synthesis')
log('Synthesizer combining all reviews...')

const reviewText = validReviews.map(r =>
  `## ${r.role.toUpperCase().replace(/_/g, ' ')}\nSummary: ${r.summary}\nKey points:\n${r.key_points.map(p => `- ${p}`).join('\n')}\nVerdict: ${r.verdict}`
).join('\n\n---\n\n')

const synthesis = await agent(
  `You are a SYNTHESIS EDITOR who has received ${validReviews.length} independent peer reviews of an academic paper. Synthesize them into a structured, actionable editorial report that the author can act on immediately.

IMPORTANT: The reviews below may be in Ukrainian or English. Write your entire synthesis in the same language as the reviews.

INDEPENDENT REVIEWS:
${reviewText}

Produce a synthesis with:
- overall_assessment: one paragraph synthesizing the reviewers' collective view — note where they agree and where they diverge
- strengths: list of strengths all or most reviewers agreed on, plus notable points from the advocate
- critical_issues: list of issues to address, each labeled high/medium/low priority, ranked from most to least critical — consolidate overlapping concerns from multiple reviewers
- open_questions: questions the paper raises but does not answer — valuable for future research directions
- recommended_verdict: the overall recommended outcome based on the weight of all reviews
- verdict_justification: one paragraph explaining the verdict, referencing the most decisive reviewer inputs`,
  {
    label: 'Synthesizer',
    phase: 'Synthesis',
    schema: SYNTHESIS_SCHEMA
  }
)

return { reviews: validReviews, synthesis }
