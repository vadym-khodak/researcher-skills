---
name: search-sources
description: Use when the user asks to find, search for, or suggest academic sources, papers, references, or literature on a research topic.
---

# Academic Source Search

## Overview

Searches academic databases and the web to find relevant sources on a given topic, then returns a formatted list ready for citation.

## Workflow

1. **Clarify topic** — ask for the research question or keywords if vague; ask for discipline if not obvious
2. **Clarify constraints** — publication year range, language, source type (journals, books, grey literature)
3. **Search** — run queries across multiple databases (see below)
4. **Filter** — prefer peer-reviewed, recent (last 10 years unless historical topic), and highly cited works
5. **Return** — formatted list with enough detail to cite (authors, year, title, journal/publisher, DOI/URL)

## Databases to Search

| Database | Best For | Search URL Pattern |
|----------|----------|-------------------|
| Google Scholar | Broad academic search | `scholar.google.com/scholar?q=` |
| Semantic Scholar | CS, AI, science — free full text | `semanticscholar.org/search?q=` |
| PubMed | Medicine, biology, health | `pubmed.ncbi.nlm.nih.gov/?term=` |
| BASE | Multidisciplinary open access | `base-search.net` |
| DOAJ | Open-access journals | `doaj.org/search/articles?q=` |

Search at least 2 databases per query. Use WebSearch for sources not indexed directly.

## Query Construction

Build queries with Boolean logic:
```
"digital marketing" AND "consumer behavior" AND (Ukraine OR "Eastern Europe")
"machine learning" AND healthcare AND (2020..2025)
```

- Quote multi-word phrases
- Use `AND` to narrow, `OR` to broaden synonyms
- Add year range when recency matters

## Output Format

Return each source as a numbered entry with:
```
[N] Authors (Year). Title. Journal/Publisher. DOI or URL.
    ↳ Relevance: one sentence on why this source fits the query
```

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Returning only 1–2 sources | Aim for 5–10 unless user specifies otherwise |
| Including non-peer-reviewed sources without flagging | Label grey literature, blogs, reports as `[non-peer-reviewed]` |
| Hallucinating DOIs or page numbers | Only include metadata you retrieved; mark uncertain fields with `[verify]` |
| Ignoring language constraints | If user needs Ukrainian/non-English sources, include relevant local databases (e.g., НБУ ім. Вернадського) |
