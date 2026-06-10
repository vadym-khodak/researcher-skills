---
name: cite-inline
description: Use when the user pastes draft text and wants citation markers inserted inline — such as (Author, Year), [N], or footnote numbers — based on a list of sources they provide.
---

# Inline Citation Insertion

## Overview

Takes a draft text and a source list, then inserts citation markers at the correct positions within the text. Does not change the writing — only adds markers.

## Workflow

1. **Confirm citation style** — APA `(Author, Year)`, IEEE `[N]`, Chicago footnote, ДСТУ, or other (ask if not specified)
2. **Receive inputs** — ask user to provide: (a) the draft text, (b) the numbered or labeled source list
3. **Map claims to sources** — identify each factual claim, statistic, or borrowed idea that needs a citation
4. **Insert markers** — place markers immediately after the claim, before punctuation (APA/MLA/ДСТУ) or after punctuation (IEEE/Chicago footnote)
5. **Flag gaps** — mark sentences that make factual claims but have no matching source as `[CITATION NEEDED]`
6. **Return** — annotated text + a note listing any gaps found

## Citation Marker Placement Rules

| Style | Position | Example |
|-------|----------|---------|
| APA 7th | Before period, after claim | `…increased by 23% (Smith, 2021).` |
| MLA 9th | Before period | `…increased by 23% (Smith 45).` |
| ДСТУ | After period or before it (per university rules) | `…збільшився на 23% [5].` |
| IEEE | After period | `…increased by 23%. [3]` |
| Chicago (footnote) | Superscript after punctuation | `…increased by 23%.¹` |

## What Gets a Citation

| Needs citation | Does not need citation |
|---------------|----------------------|
| Statistics, numbers, percentages | Common knowledge (`Water boils at 100°C`) |
| Direct quotes | Author's own original analysis |
| Paraphrased ideas from a source | Definitions from the paper's own framework |
| Claims about specific studies | General background widely established in the field |

## Ambiguous Cases

- **One source covers multiple consecutive sentences** — cite at the end of the last sentence, not each one
- **Claim supported by multiple sources** — insert all: `(Smith, 2021; Jones, 2019)`
- **Whole paragraph from one source** — cite at paragraph end; add a lead-in like "According to Smith (2021),"

## Output Format

Return:
1. Full annotated text with markers inserted
2. List of `[CITATION NEEDED]` positions with the sentence text (so the user knows where to find more sources)

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Rewriting sentences while inserting citations | Insert markers only; preserve every word of the original |
| Placing marker mid-sentence after subject | Marker goes at the end of the claim, not mid-thought |
| Adding citations to the author's own conclusions | Only cite borrowed information |
| Skipping `[CITATION NEEDED]` flags | Always flag uncited factual claims — don't silently leave them |
