---
name: detect-ai-text
description: Use when the user asks to check whether text was written by AI, detect AI-generated content, or review text for signs of ChatGPT, Claude, or other LLM authorship.
---

# Detect AI-Generated Text

## Overview

Reviews text for linguistic patterns commonly associated with AI-generated content and recommends dedicated detection tools. Pattern-based — not a classifier.

## Critical Limitations

**No pattern check can reliably confirm or deny AI authorship.** Understand these constraints before reporting any finding:

| Limitation | Why it matters |
|------------|---------------|
| High false-positive rate | Non-native English speakers, formal academic writing, and some disciplines naturally match AI patterns |
| Easily evaded | One pass through a paraphrasing tool removes most detectable signals |
| No ground truth | Without the original prompt or generation log, certainty is impossible |
| Model-specific | Patterns differ across GPT-4, Claude, Gemini, etc. — no single fingerprint covers all |

**Never label text as definitively AI-generated based on pattern analysis alone.** Report findings as indicators, not verdicts.

## Workflow

1. **Receive text** — paste the passage to review
2. **Scan for patterns** — check against the indicator list below
3. **Count and weight signals** — note how many categories are triggered
4. **Return assessment** — flagged passages + indicator summary + confidence level
5. **Recommend tools** — suggest dedicated detectors for a second opinion

## AI Text Indicators

### Linguistic Patterns

| Indicator | Description | Example |
|-----------|-------------|---------|
| Transitional over-reliance | Excessive use of `Furthermore`, `Moreover`, `Additionally`, `It is worth noting that` | Every paragraph opens with a connector |
| Hedging clusters | Dense stacking of hedges: `may potentially suggest`, `could possibly indicate` | More than 2 hedges per sentence |
| Balanced sentence rhythm | Unnaturally consistent sentence length throughout — no short punchy sentences, no very long ones | All sentences 20–30 words |
| Generic examples | Vague, non-specific illustrations (`for example, in many industries…`) | No concrete names, dates, or places |
| Symmetrical structure | Every paragraph has exactly: topic sentence + 2–3 supporting points + conclusion | Robot-like consistency across all paragraphs |
| Filler openings | `It is important to note that`, `In today's world`, `In conclusion, it is clear that` | Common AI boilerplate phrases |
| Passive voice saturation | Unusually high proportion of passive constructions throughout | Entire sections with no active voice |
| Overly comprehensive lists | Lists that feel exhaustive but shallow — covering every angle with no depth | Bullet lists of 6–8 items that say nothing specific |

### Content Patterns

| Indicator | Description |
|-----------|-------------|
| No concrete detail | Lacks specific data, named studies, dates, or institutions that a human researcher would naturally include |
| No personal stance | Presents all sides without ever committing to a position (in contexts where that is expected) |
| Temporal vagueness | Avoids specific years; uses `recently`, `in modern times`, `contemporary` |
| Hallucination markers | Plausible-sounding but unverifiable citations — check any cited sources carefully |

## Confidence Assessment

Count triggered indicator categories:

| Triggers | Assessment |
|----------|------------|
| 0–1 | Low suspicion — consistent with human writing |
| 2–3 | Moderate suspicion — some AI-associated patterns; inconclusive |
| 4–5 | High suspicion — multiple strong signals; recommend dedicated tool |
| 6+ | Very high suspicion — pervasive AI patterns; strongly recommend tool + human review |

Always report as: *"X of Y indicators triggered — [Low/Moderate/High/Very High] suspicion. Not conclusive."*

## Dedicated Detection Tools

For a second opinion, use purpose-built classifiers:

| Tool | Notes |
|------|-------|
| GPTZero (gptzero.me) | Free tier available; highlights sentence-level perplexity |
| Originality.ai | Paid; popular for academic use |
| Copyleaks AI Detector | Combines plagiarism + AI detection |
| Turnitin AI Writing Indicator | Integrated into Turnitin; used by many universities |
| Writer AI Content Detector | Free; basic |

All tools have false-positive rates of 5–20% depending on text type. Non-native English, highly technical text, and legal/formal writing score higher regardless of authorship.

## Ukrainian-Specific Notes

| Issue | Guidance |
|-------|----------|
| Кальки з англійської | Ukrainian AI text is often generated in English then machine-translated — look for unnatural calques: `приймати до уваги`, `в той час як`, `на основі вищезазначеного` |
| AI-кліше українською | Common Ukrainian AI boilerplate: `варто зазначити`, `слід відмітити`, `важливо підкреслити`, `у сучасних умовах`, `в умовах глобалізації` |
| Суржик в AI тексті | Ukrainian AI output sometimes mixes Russian and Ukrainian — both a grammar error and an AI signal |
| Інструменти | Most English-focused detectors (GPTZero, Originality.ai) are less accurate for Ukrainian text; prefer Unicheck's AI detection module or Copyleaks (which supports Ukrainian) |
| Хибні спрацювання | Formal Ukrainian bureaucratic and academic register naturally resembles AI output — be especially cautious before flagging Ukrainian academic text |

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Reporting a verdict ("this IS AI-written") | Always use "indicators suggest" / "patterns consistent with" |
| Flagging formal academic register as AI | Academic writing naturally uses many AI-associated patterns |
| Ignoring context | A student known for poor writing submitting perfect prose is different from a native speaker's thesis |
| Not checking cited sources | Hallucinated references are the most actionable signal — always verify citations |
