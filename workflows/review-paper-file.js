export const meta = {
  name: 'review-paper-file',
  description: 'Multi-agent academic paper review for large files: four reviewers read the paper from disk in parallel, synthesizer combines into ranked action items',
  phases: [
    { title: 'Parallel Review', detail: 'Advocate, Methodologist, Literature Critic, and Practical Critic read and review simultaneously' },
    { title: 'Synthesis', detail: 'Synthesizer combines all reviews into a ranked action list, open questions, and a verdict' }
  ]
}

const path = typeof args === 'string' ? args : (args && args.path ? args.path : '')

if (!path) {
  log('No file path provided.')
  return { error: 'Pass the paper file path as: Workflow({ scriptPath: "workflows/review-paper-file.js", args: "/abs/path/to/paper.md" })' }
}

const READ_INSTRUCTION = `The paper is in a file at this path:
${path}

This file is LARGE and exceeds the single-read size limit. You MUST read the ENTIRE file before reviewing. Use the Read tool with offset/limit to read it in sequential chunks (e.g. lines 1-650, then 651-1300, then 1301 to the end) until you have read every line. Do not review until you have read the whole document. Do not skim only the introduction and conclusion — base your review on the full text including the body chapters.`

const REVIEW_SCHEMA = {
  type: 'object',
  properties: {
    role:       { type: 'string' },
    summary:    { type: 'string', description: 'One paragraph overall assessment from this reviewer perspective' },
    key_points: { type: 'array', items: { type: 'string' }, description: '3-6 specific, concrete points from this perspective, referencing actual sections/content of the paper' },
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
    prompt: `You are reviewing an academic paper (a PhD dissertation) as an ADVOCATE. Your sole focus: identify genuine strengths, articulate the paper's contribution to the field, and make the case for why it deserves a successful defense. Be specific — reference actual content, arguments, structure, and the author's original constructs (definitions, models, frameworks).

${READ_INSTRUCTION}

${LANG_INSTRUCTION}

Return structured output with:
- role: "advocate"
- summary: one paragraph overall assessment from your perspective
- key_points: 3-6 specific strengths or contributions you identified
- verdict: your recommended outcome`
  },
  {
    role: 'methodologist',
    label: 'Methodologist',
    prompt: `You are reviewing an academic paper (a PhD dissertation) as a METHODOLOGICAL CRITIC. Your sole focus: scrutinise the research design, data collection method, analytical approach, sample/case selection and representativeness, validity, reliability, and whether the conclusions are fully warranted by the evidence presented. For a conceptual/qualitative dissertation, assess rigor of the conceptual development, case study methodology, and whether claims (e.g. maturity levels, frameworks) are substantiated. Be rigorous and specific.

${READ_INSTRUCTION}

${LANG_INSTRUCTION}

Return structured output with:
- role: "methodologist"
- summary: one paragraph overall assessment from your perspective
- key_points: 3-6 specific methodological strengths or issues you identified
- verdict: your recommended outcome`
  },
  {
    role: 'literature_critic',
    label: 'Literature Critic',
    prompt: `You are reviewing an academic paper (a PhD dissertation) as a LITERATURE & THEORY CRITIC. Your sole focus: evaluate the theoretical framework, quality and coverage of the literature review, engagement with key debates, use and accuracy of citations, balance of domestic (Ukrainian) and international sources, and whether the paper positions itself correctly and originally within the existing body of knowledge. Flag any unsupported claims, missing seminal works, or weak engagement with the field.

${READ_INSTRUCTION}

${LANG_INSTRUCTION}

Return structured output with:
- role: "literature_critic"
- summary: one paragraph overall assessment from your perspective
- key_points: 3-6 specific points about the theoretical and literature positioning
- verdict: your recommended outcome`
  },
  {
    role: 'practical_critic',
    label: 'Practical Critic',
    prompt: `You are reviewing an academic paper (a PhD dissertation) as a PRACTICAL IMPACT CRITIC. Your sole focus: evaluate the real-world applicability of the findings, whether practical implications are clearly and convincingly stated, whether conclusions are proportionate to the evidence, the applicability of the proposed frameworks/models to actual enterprises (especially B2B SaaS), and what concrete value practitioners would derive. Assess whether the practical recommendations are actionable or remain abstract.

${READ_INSTRUCTION}

${LANG_INSTRUCTION}

Return structured output with:
- role: "practical_critic"
- summary: one paragraph overall assessment from your perspective
- key_points: 3-6 specific points about practical relevance and impact
- verdict: your recommended outcome`
  }
]

phase('Parallel Review')
log('Dispatching 4 independent reviewers in parallel (each reads the full file from disk)...')

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
  `You are a SYNTHESIS EDITOR who has received ${validReviews.length} independent peer reviews of a PhD dissertation. Synthesize them into a structured, actionable editorial report that the author can act on immediately before the defense.

IMPORTANT: The reviews below may be in Ukrainian or English. Write your entire synthesis in the same language as the reviews.

INDEPENDENT REVIEWS:
${reviewText}

Produce a synthesis with:
- overall_assessment: one paragraph synthesizing the reviewers' collective view — note where they agree and where they diverge
- strengths: list of strengths all or most reviewers agreed on, plus notable points from the advocate
- critical_issues: list of issues to address, each labeled high/medium/low priority, ranked from most to least critical — consolidate overlapping concerns from multiple reviewers
- open_questions: questions the paper raises but does not answer — valuable for future research directions and likely defense questions
- recommended_verdict: the overall recommended outcome based on the weight of all reviews
- verdict_justification: one paragraph explaining the verdict, referencing the most decisive reviewer inputs`,
  {
    label: 'Synthesizer',
    phase: 'Synthesis',
    schema: SYNTHESIS_SCHEMA
  }
)

return { reviews: validReviews, synthesis }
