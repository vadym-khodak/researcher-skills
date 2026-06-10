---
name: grammar-check
description: Use when the user pastes academic text and asks to proofread, fix grammar, improve style, or review language in a thesis, paper, article, or coursework draft.
---

# Academic Grammar & Style Check

## Overview

Reviews academic text for grammatical correctness, formal register, and clarity. Returns a corrected version with explanations of key changes.

## Workflow

1. **Identify register** — thesis, journal article, coursework, abstract, or general academic text (ask if unclear)
2. **Grammar pass** — fix errors in agreement, tense consistency, articles, prepositions
3. **Style pass** — enforce academic register: formal vocabulary, appropriate hedging, sentence variety
4. **Clarity pass** — cut redundancy, untangle complex sentences, improve flow
5. **Return** — corrected text + brief summary of changes grouped by type

## Grammar Checklist

| Category | Common Errors |
|----------|--------------|
| Agreement | Subject-verb mismatch, pronoun-antecedent mismatch |
| Tense | Mixing past/present in literature review; use past for cited studies, present for standing facts |
| Articles | Missing or wrong `a`/`an`/`the` (especially for non-native English writers) |
| Prepositions | `consists of` not `consists from`; `based on` not `based from` |
| Punctuation | Comma splices, missing Oxford comma in lists, hyphenation of compound modifiers |

## Academic Style Checklist

| Category | Rule |
|----------|------|
| Hedging | Use `suggests`, `indicates`, `may`, `appears to` — avoid absolute claims without citation |
| Formality | Avoid contractions, colloquialisms, first person (unless discipline permits) |
| Passive/active | Passive for methods (`samples were analyzed`); active for findings (`results show`) |
| Nominalization | Prefer noun phrases in formal prose (`investigation` over `we investigated`) |
| Vocabulary | Replace informal synonyms: `big` → `significant`, `show` → `demonstrate` |

## Output Format

Present corrections in one of these modes — ask the user which they prefer if not specified:

- **Corrected text** — return the full revised passage
- **Tracked** — show `~~old~~ → new` inline for each change
- **Summary only** — list error types and counts, no full rewrite

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Changing the author's argument or meaning | Correct language only; preserve the original claim |
| Over-nominalizing everything | Balance nominalization with clear active constructions |
| Removing all hedges | Academic writing requires appropriate epistemic caution |
| Imposing one dialect | Clarify British vs American English preference if punctuation/spelling differ |
