---
name: review-paper
description: Use when the user wants a multi-perspective review of an academic paper, article, thesis chapter, or conference submission — with independent advocate, methodologist, literature critic, and practical critic viewpoints synthesized into actionable feedback.
---

# Multi-Perspective Paper Review

## Overview

Reviews an academic paper from four independent viewpoints simultaneously, then synthesizes the findings into a ranked action list and open questions. Mirrors how a real peer review panel operates.

## Reviewer Roles

| Role | Focus |
|------|-------|
| **Advocate** | Identifies genuine strengths and the paper's contribution; argues for publication |
| **Methodologist** | Scrutinises research design, data, analysis, validity, and reliability |
| **Literature Critic** | Evaluates theoretical framing, literature coverage, use of sources, field positioning |
| **Practical Critic** | Challenges real-world applicability, implications, and proportionality of conclusions |
| **Synthesizer** | Reads all four reviews; produces ranked action items, open questions, and a verdict |

## How to Invoke

### Option A — Multi-agent workflow (Claude Code, recommended)

Paste your paper text, then run:

```
Use the workflow at: workflows/review-paper.js
Pass the paper text as args.
```

Four reviewers run in parallel; the synthesizer combines their outputs. Returns structured JSON with all reviews + synthesis report.

### Option B — Single-agent sequential review

If the workflow is not available, the agent applies each perspective in sequence:

1. Read the paper fully
2. Write the **Advocate** review
3. Write the **Methodologist** review
4. Write the **Literature Critic** review
5. Write the **Practical Critic** review
6. Write the **Synthesis** — combining all four into the output format below

## Output Format

### Per reviewer
```
## [ROLE]
Summary: [one paragraph from this perspective]
Key points:
- [specific point 1]
- [specific point 2]
- [specific point 3]
Verdict: accept / minor_revisions / major_revisions / reject
```

### Synthesis
```
## SYNTHESIS

Overall assessment: [one paragraph]

Strengths to preserve:
- …

Critical issues (ranked by priority):
1. [HIGH] …
2. [HIGH] …
3. [MEDIUM] …

Open questions for future research:
- …

Recommended verdict: [accept / minor_revisions / major_revisions / reject]
Justification: [one paragraph]
```

## Ukrainian-Specific Notes

| Topic | Guidance |
|-------|----------|
| Захист дипломної / дисертації | Use this skill to simulate a pre-defense committee review — the opponent role maps directly to the опонент in a Ukrainian defense |
| Рецензент | The methodologist + literature critic combined approximate the role of an external рецензент |
| Наукова новизна | Advocate and literature critic should both comment on whether наукова новизна is substantiated |
| ВАКівська стаття | For submissions to фахові видання, pay particular attention to the methodologist and literature critic verdicts — these are most commonly cited in rejection decisions |

## Language / Мова

The review is produced in the language of the paper:
- English paper → English review
- Ukrainian paper → Ukrainian review (all reviewer summaries, key points, synthesis, verdict justification)

Verdict labels (`accept`, `minor_revisions`, `major_revisions`, `reject`) remain in English as they are structured enum values.

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Asking for review without providing the paper | Always paste the full text (or at minimum: abstract, methodology, results, conclusion) |
| Treating the advocate review as the final verdict | The synthesis is the actionable output — read all perspectives |
| Ignoring the open questions | These are often the most valuable output for future work |
