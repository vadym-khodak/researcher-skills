---
name: expand-paragraph
description: Use when the user has a brief idea, outline point, or short passage and asks to expand, develop, elaborate, or flesh it out into a full academic paragraph.
---

# Expand a Paragraph

## Overview

Develops a brief idea, bullet point, or thin passage into a fully formed academic paragraph with a clear topic sentence, supporting evidence, and concluding link.

## Workflow

1. **Receive input** — the brief idea, bullet, or thin paragraph to expand
2. **Clarify context** — what section of the paper is this for? (introduction, literature review, methodology, discussion, conclusion)
3. **Clarify evidence** — does the user have specific sources to cite, or should gaps be flagged for them to fill?
4. **Expand** — write a full paragraph following academic paragraph structure
5. **Return** — expanded paragraph with `[CITATION NEEDED]` markers where sources should be added

## Academic Paragraph Structure

```
Topic sentence      — states the paragraph's main claim
Evidence / example  — supports the claim (cite here)
Explanation         — interprets the evidence; explains HOW it supports the claim
Link sentence       — connects to the next paragraph or broader argument
```

**Example:**

> *Topic:* "Social media affects student productivity."
>
> **Expanded:**
> Social media use during study sessions has been shown to significantly reduce academic productivity among university students [CITATION NEEDED]. A study of undergraduate students found that those who checked social media platforms during study periods completed tasks 40% more slowly than those who did not [CITATION NEEDED]. This reduction is attributed to attention fragmentation, whereby repeated context-switching prevents the sustained focus required for deep learning (Smith, 2021). These findings suggest that managing social media access is a critical component of effective study habit interventions.

## Expansion by Section Type

| Section | Emphasis |
|---------|----------|
| Introduction | Background → gap → why it matters |
| Literature review | What source says → how it relates → gap or contrast |
| Methodology | What was done → why this approach → limitations acknowledged |
| Discussion | What result means → how it links to literature → implications |
| Conclusion | What was found → contribution → future directions |

## Ukrainian-Specific Notes

| Element | Ukrainian Academic Convention |
|---------|------------------------------|
| Зв'язки між реченнями | Use Ukrainian connectors: `зокрема`, `водночас`, `натомість`, `таким чином`, `слід зазначити`, `варто підкреслити` |
| Уникайте кальок | Don't use Russian-derived connectors: avoid `при цьому` → use `при цьому` only carefully; prefer `разом з тим`; avoid `в першу чергу` → use `насамперед` |
| Тематичне речення | In Ukrainian academic prose, the topic sentence often comes first; the hedge (`свідчить про`, `дає підстави стверджувати`) typically closes the paragraph |
| Посилання | In-text citations in Ukrainian use `[N]` format per ДСТУ; page references: `[3, с. 45]` |
| Узагальнення | Standard Ukrainian closing phrases: `Отже, …`, `Таким чином, …`, `Це свідчить про те, що…` |

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Padding with filler sentences | Every sentence must add substance; no "it is important to note that" openers |
| Expanding without a clear topic sentence | State the paragraph's claim in the first sentence |
| Adding facts not supported by the user's sources | Flag missing citations with `[CITATION NEEDED]` |
| Making the paragraph too long | One idea per paragraph; split if two separate claims emerge |
