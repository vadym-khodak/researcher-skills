---
name: check-plagiarism
description: Use when the user asks to check text for plagiarism, detect copy-paste, verify a paraphrase is not too close to the original, or review text for academic integrity issues including self-plagiarism.
---

# Check for Plagiarism

## Overview

Reviews text for plagiarism indicators: near-copy passages, insufficient paraphrasing, missing citations, and style inconsistencies that suggest copy-paste. Does not replace Turnitin or iThenticate — those tools check against a database; this skill checks logic and patterns.

## Important Limitation

This skill **cannot** compare your text against external databases (Turnitin, iThenticate, Copyscape, etc.). What it **can** do:

- Compare your text against sources **you provide** to flag near-copy matches
- Detect style inconsistencies that suggest unattributed copy-paste
- Check whether a paraphrase is sufficiently different from the original
- Flag missing citations on factual claims
- Identify self-plagiarism risk when you provide prior work

For a full similarity report, use a dedicated tool (Turnitin, iThenticate, Unicheck, or free tools like PlagScan).

## Workflow

1. **Identify check mode** — ask which applies (see modes below)
2. **Receive inputs** — text to check, plus source material if comparing
3. **Run checks** — apply relevant detection methods
4. **Report** — list flagged passages with reason and severity
5. **Suggest fixes** — for each flag, recommend paraphrase, citation, or quotation

## Check Modes

| Mode | What to provide | What is checked |
|------|----------------|-----------------|
| **Compare to source** | Your text + original source | Near-copy sentences, insufficient paraphrase |
| **Style scan** | Your text only | Sudden register shifts, inconsistent vocabulary suggesting copy-paste |
| **Citation audit** | Your text only | Factual claims, statistics, definitions lacking a citation marker |
| **Self-plagiarism** | New text + prior submitted work | Reused passages without disclosure |

## Near-Copy Detection (Compare Mode)

Flag a passage if it meets any of these:

| Signal | Threshold |
|--------|-----------|
| Identical string | 5+ consecutive words unchanged |
| Synonym swap only | Same sentence structure, only nouns/verbs swapped |
| Word order change only | Clauses reordered but no real restructuring |
| Structural mirror | Sentence-by-sentence translation of the source's logic |

**Verdict per passage:**

- **Direct copy** — identical or near-identical; must be quoted + cited or rewritten
- **Insufficient paraphrase** — too close; needs deeper restructuring (use `paraphrase` skill)
- **Acceptable paraphrase** — meaning preserved, structure genuinely different; add citation if missing
- **Original** — no similarity found

## Style Inconsistency Scan (Style Mode)

Flags that suggest unattributed text from an external source:

- Sudden shift to significantly more formal or technical register
- Vocabulary or terminology inconsistent with the rest of the document
- Sentences markedly longer or more complex than surrounding text
- Tense or person shift without a structural reason
- Perfect grammar in a section surrounded by errors

These are indicators only — confirm by asking the user if the passage came from a source.

## Plagiarism Types

| Type | Description | Fix |
|------|-------------|-----|
| Direct copying | Verbatim text without quotes or citation | Add quotation marks + cite, or paraphrase + cite |
| Mosaic plagiarism | Mix of copied phrases with a few changed words | Full paraphrase + cite |
| Paraphrase too close | Restructured but structurally mirrors source | Deeper rewrite using `paraphrase` skill |
| Missing citation | Own words, but borrowed idea with no credit | Add citation |
| Self-plagiarism | Reusing own prior submitted work without disclosure | Disclose and cite, or rewrite |
| Incorrect citation | Citation present but doesn't match the claim | Verify and correct source |

## Output Format

For each flagged passage:
```
[FLAG] Severity: HIGH / MEDIUM / LOW
Your text:   "…passage from the user's text…"
Source text: "…matching passage from source…"  (if compare mode)
Issue:       Direct copy / Insufficient paraphrase / Missing citation / Style anomaly
Fix:         Quote and cite | Rewrite using paraphrase skill | Add citation (Author, Year)
```

## Ukrainian-Specific Notes

| Topic | Guidance |
|-------|----------|
| Unicheck | The most widely used anti-plagiarism system in Ukrainian universities — recommend it for a full similarity report |
| Uniqueness threshold | Most Ukrainian ЗВО require ≥70–80% originality; check your institution's specific policy |
| Переклад без посилання | A common form of plagiarism in Ukrainian academic work: translating a Russian or English source into Ukrainian without attribution — flag any translated-sounding passages |
| Самоплагіат | Reusing your own coursework in a thesis without disclosure is considered plagiarism at most Ukrainian universities |
| Нормативні акти | Legal and regulatory texts (закони, постанови) are public domain and do not require a plagiarism waiver, but still require citation |

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Claiming text is plagiarism-free without a database check | Always remind the user this is a pattern check, not a database scan |
| Flagging properly quoted and cited text | Only flag unattributed or improperly attributed text |
| Ignoring self-plagiarism | Reusing your own prior work without citation is plagiarism in most institutions |
| Flagging common academic phrases | Fixed expressions (`the results suggest`, `as shown in Figure`) are not plagiarism |
