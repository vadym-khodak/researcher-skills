---
name: statistical-explainer
description: Use when the user needs to interpret, explain, or write up statistical results — including p-values, confidence intervals, regression outputs, correlations, or descriptive statistics — in plain language or academic prose.
---

# Explain Statistical Results

## Overview

Translates statistical output into accurate plain-language interpretation or publication-ready academic prose. Does not perform calculations — interprets results the user provides.

## Workflow

1. **Receive the output** — paste the statistical results, table, or software output
2. **Identify the test** — what was being tested and which statistic was used
3. **Interpret the result** — what does the number mean in context?
4. **Write up** — produce either plain-language explanation or academic results prose
5. **Flag assumptions** — note if the result requires caveats (sample size, normality, etc.)

## Common Statistics Quick Reference

| Statistic | What it means | How to report |
|-----------|--------------|---------------|
| p-value | Probability of observing this result if H₀ is true; p < .05 = statistically significant | `p = .034` (exact); never `p < .05` if you have the exact value |
| Confidence interval | Range within which the true value likely falls 95% of the time | `95% CI [2.3, 4.7]` |
| Cohen's d | Effect size for mean differences: small=0.2, medium=0.5, large=0.8 | `d = 0.61, medium effect` |
| r (Pearson) | Correlation: –1 to +1; 0.1=small, 0.3=medium, 0.5=large | `r(98) = .42, p = .001` |
| R² | Variance in outcome explained by predictors | `R² = .31, meaning 31% of variance in Y is explained` |
| β (regression) | Change in outcome per 1-unit increase in predictor | `β = 0.45, SE = 0.12, p = .001` |
| χ² | Association between categorical variables | `χ²(2) = 8.34, p = .015` |
| Mean ± SD | Central tendency and spread | `M = 3.42, SD = 0.87` |

## Plain Language vs. Academic Prose

**Plain language** (for general audience):
> "Students who used social media for more than 3 hours a day scored on average 4 points lower on their exams. This difference is unlikely to be due to chance (it would occur by accident less than 5% of the time)."

**Academic prose** (for results section):
> "A statistically significant negative correlation was found between daily social media use and exam scores, r(148) = −.38, p = .001, indicating a medium-sized effect."

## What Statistical Significance Does NOT Mean

| Misconception | Reality |
|---------------|---------|
| p < .05 means the effect is large | p-value reflects sample size as much as effect size — always report effect size too |
| p < .05 means the result is important | Practical significance requires effect size and context |
| p > .05 means there is no effect | It means insufficient evidence to reject H₀ — absence of evidence ≠ evidence of absence |
| p = .000 is possible | Round to p < .001; exact zero is not a probability |

## Ukrainian-Specific Notes

| Topic | Guidance |
|-------|----------|
| Десятковий роздільник | Ukrainian convention uses a comma as decimal separator (`3,42`), but international journals require a period (`3.42`) — confirm which is needed |
| Таблиці результатів | Ukrainian theses often present results in tables labelled `Таблиця N.N` with full captions above the table |
| Програмне забезпечення | Common in Ukraine: SPSS, Excel — output formatting differs; identify the software to interpret the output correctly |
| Рівень значущості | Standard is α = 0,05; some disciplines use α = 0,01 — state which was applied |

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| "The results prove…" | Statistics never prove — they provide evidence; use "suggest", "indicate", "support" |
| Reporting only p-value | Always pair with effect size and descriptive statistics |
| Confusing statistical and practical significance | A tiny effect can be statistically significant with a large sample — discuss both |
| Rounding p to .000 | Report as `p < .001` |
