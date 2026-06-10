---
name: bibliography
description: Use when the user needs to format, compile, or verify a bibliography, reference list, or works-cited page. Triggers: user mentions ДСТУ, APA, MLA, Chicago, IEEE, ГОСТ, «список літератури», «список використаних джерел», «references», citation formatting, or asks to format academic sources.
---

# Bibliography & Reference List Formatting

## Overview

Produces correctly formatted reference lists according to the requested citation standard.

## Workflow

1. **Identify standard** — ask if not specified; default to ДСТУ for Ukrainian work, APA for English social-science work
2. **List all sources** — ask the user to provide sources one by one, or as a raw list
3. **Classify each source** — book, journal article, book chapter, website, dissertation, law, conference paper
4. **Format each entry** — apply standard's rules per source type (see reference files below)
5. **Sort** — alphabetically by author surname (ДСТУ, APA, MLA, Chicago); by order of first citation (IEEE, Vancouver)
6. **Review** — check punctuation, italics, hanging indents, required fields

## Supported Standards

| Standard | Typical Use | Sort Order | Full Reference |
|----------|------------|------------|----------------|
| ДСТУ 8302:2015 | Ukrainian academic work | Alphabetical (Cyrillic first, then Latin) | [dstu.md] |
| APA 7th ed. | Social sciences, marketing, psychology | Alphabetical | [apa.md] |
| MLA 9th ed. | Humanities | Alphabetical (Works Cited) | Inline below |
| Chicago 17th | History, humanities | Alphabetical (Bibliography) | Inline below |
| IEEE | Engineering, CS | Order of appearance [1] | Inline below |
| ГОСТ 7.1-2003 | Russian/CIS work | Alphabetical | Same pattern as ДСТУ |

## MLA 9th (Quick Reference)

Book: `Last, First. *Title*. Publisher, Year.`
Article: `Last, First. "Title." *Journal*, vol. X, no. Y, Year, pp. Z–ZZ.`
Website: `Last, First. "Page Title." *Site Name*, Day Mon. Year, URL.`

## Chicago 17th Bibliography Style

Book: `Last, First. *Title*. City: Publisher, Year.`
Article: `Last, First. "Title." *Journal* vol, no. issue (Year): pages.`
Website: `Last, First. "Title." Site Name. Month Day, Year. URL.`

## IEEE

Book: `[N] A. Author, *Title*. City: Publisher, Year.`
Article: `[N] A. Author, "Title," *Abbrev. Journal*, vol. X, no. Y, pp. Z–ZZ, Mon. Year.`
Website: `[N] A. Author. "Title." (Year). [Online]. Available: URL`

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Wrong separator (comma vs period) | Each standard has strict punctuation — check the reference file |
| Missing volume/issue for journal article | Always include both |
| URL without access date (ДСТУ) | Add «(дата звернення: ДД.ММ.РРРР)» |
| Not italicizing book/journal titles | Required in APA, MLA, Chicago |
| Listing "et al." too early | ДСТУ: all ≤3 authors; APA: all ≤20 authors |
| Missing DOI for APA article | Include as `https://doi.org/xxxxx` when available, no trailing period |
| Mixing two standards in one list | Use one standard consistently throughout |
