---
name: simplify
description: Use when the user asks to simplify, make more readable, clarify, or reduce the complexity of dense academic text — including for a general audience, non-specialist readers, or plain-language requirements.
---

# Simplify Academic Text

## Overview

Rewrites dense or jargon-heavy academic text to be more accessible without losing accuracy. Targets a specified reading level or audience.

## Workflow

1. **Identify target audience** — ask if unclear: undergraduate students, general public, non-specialist professionals, or a specific field outside the original
2. **Identify what to preserve** — technical accuracy, key terminology, or specific style requirements
3. **Simplify** — reduce sentence length, replace jargon, clarify implicit logic
4. **Return** — simplified version; flag any technical terms that were kept because no plain equivalent exists

## Simplification Techniques

| Technique | Before | After |
|-----------|--------|-------|
| Shorten sentences | "The study, which was conducted over a period of three years across multiple institutions, revealed…" | "The three-year multi-institution study found…" |
| Replace jargon | "operationalize the construct" | "define and measure the concept" |
| Make implicit logic explicit | "Results were significant (p < .05)" | "Results were statistically significant, meaning they are unlikely to be due to chance" |
| Unpack nominalization | "There was an investigation of…" | "Researchers investigated…" |
| Break complex sentences | One sentence with three subordinate clauses → two or three shorter sentences |

## Audience Calibration

| Audience | Target reading level | Jargon tolerance |
|----------|---------------------|-----------------|
| General public | Grade 8–10 | None — explain all terms |
| Undergraduate students | Grade 12–University 1 | Define on first use |
| Non-specialist professionals | University level | Keep field-specific terms; remove sub-field jargon |
| Specialist in adjacent field | University level | Keep core terms; translate sub-field specifics |

## What NOT to Simplify

- Numbers, statistics, and measurements — keep exact
- Proper nouns and cited author names
- Terms with no accurate plain-language equivalent (flag these to the user)
- The logical structure of the argument — simplify expression, not reasoning

## Ukrainian-Specific Notes

| Issue | Guidance |
|-------|----------|
| Канцеляризми | Ukrainian bureaucratic language is common in academic text and makes it needlessly dense — simplify: `у зв'язку з тим, що` → `оскільки`; `здійснювати контроль` → `контролювати` |
| Суржик | Simplification sometimes introduces Russian colloquialisms — check that plain Ukrainian is still correct Ukrainian |
| Складні конструкції | Ukrainian academic writing overuses noun chains — unpack: `методологія дослідження процесу управління` → `як досліджують управління` |
| Реєстр | Colloquial Ukrainian differs significantly from academic Ukrainian — when simplifying for a general audience, use neutral-register Ukrainian, not informal speech |

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Removing nuance to make text shorter | Simplify phrasing, not substance |
| Over-explaining basic concepts to specialists | Match depth to the stated audience |
| Changing hedged claims to absolute ones | `may suggest` → `suggests` is fine; `may suggest` → `proves` is not |
| Losing citations or attribution | Keep all citation markers in place |
