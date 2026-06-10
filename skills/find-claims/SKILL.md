---
name: find-claims
description: Use when the user has a specific claim, statement, or argument in their text and needs to find academic sources that support, confirm, or evidence it.
---

# Find Sources for a Claim

## Overview

Takes a specific claim from the user's text and searches for academic sources that support it. Complements `cite-inline` (which inserts markers) and `search-sources` (which searches by topic) — this skill focuses on evidencing a single assertion.

## Workflow

1. **Receive the claim** — ask user to paste the exact sentence or statement needing support
2. **Extract key concepts** — identify the core assertion and measurable/verifiable elements
3. **Formulate search queries** — construct 2–3 Boolean queries capturing the claim from different angles
4. **Search** — use WebSearch across Google Scholar and relevant databases
5. **Evaluate fit** — source must directly support the claim (not just mention the topic)
6. **Return** — 3–5 sources with a one-line note on how each supports the claim

## Claim Analysis

Break the claim into components before searching:

> "Social media use among university students negatively impacts academic performance."

| Component | Search terms |
|-----------|-------------|
| Social media use | social media, Instagram, TikTok, smartphone use |
| University students | higher education, undergraduate, college students |
| Academic performance | GPA, grades, academic achievement, study habits |
| Direction (negative) | distraction, procrastination, decline |

Queries to try:
```
"social media" AND "academic performance" AND students
"smartphone use" AND "university students" AND GPA
social media distraction AND "higher education"
```

## Source Fit Evaluation

| Fit level | Description | Action |
|-----------|-------------|--------|
| Direct support | Source makes the same claim with evidence | Include — strong match |
| Partial support | Source covers related finding, same direction | Include — note what it covers |
| Contradicts | Source finds opposite result | Flag to user — they may need to nuance the claim |
| Tangentially related | Same topic, different population or outcome | Exclude or include with caveat |

## Output Format

For each source found:
```
[N] Authors (Year). Title. Journal. DOI/URL
    ↳ Supports claim by: [one sentence]
```

If no supporting sources found after thorough search:
- Report what was found (even contradicting evidence)
- Suggest how to revise the claim to match available evidence
- Offer to search with different keywords

## Ukrainian-Specific Notes

When searching for sources to support a claim in Ukrainian academic work, include Ukrainian-language databases alongside English ones:

| Database | URL | Best for |
|----------|-----|----------|
| НБУ ім. Вернадського | nbuv.gov.ua | Ukrainian journals, dissertations, monographs |
| Наукова Україна | naukaUA.com | Ukrainian academic publications |
| Репозиторії ЗВО | university dspace/elar portals | Institutional theses and papers |
| Google Scholar (ua) | scholar.google.com.ua | Broad Ukrainian + international |

**Search in Ukrainian too:** Translate your English search terms into Ukrainian and run parallel queries. Many Ukrainian studies are not indexed in English-language databases.

Example for the claim `"соціальні медіа негативно впливають на успішність студентів"`:
```
"соціальні мережі" AND "академічна успішність" AND студенти
"цифрові медіа" AND "навчальна діяльність" AND університет
```

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Returning sources that mention the topic but don't support the claim | Check that the source's finding aligns with the specific assertion |
| Fabricating citations | Only return sources retrieved via actual search |
| Ignoring contradicting evidence | Report it — the user needs to know if their claim is contested |
| Searching only one query | Try at least 2–3 angle variations before concluding nothing exists |
