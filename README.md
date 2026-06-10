# Researcher Skills

A collection of skills for academic researchers, built as a Claude Code plugin.

## Skills

| Skill | Description | Triggers |
|-------|-------------|----------|
| [bibliography](skills/bibliography/SKILL.md) | Format reference lists per ДСТУ, APA, MLA, Chicago, IEEE, ГОСТ | "список літератури", "APA", "references", citation formatting |
| [grammar-check](skills/grammar-check/SKILL.md) | Proofread academic text for grammar, style, and clarity | "check grammar", "proofread", "fix my writing" |
| [search-sources](skills/search-sources/SKILL.md) | Find academic sources via web search (Scholar, Semantic Scholar, PubMed, etc.) | "find sources", "search for papers", "find literature on" |
| [search-guide](skills/search-guide/SKILL.md) | Teach effective search strategies, Boolean operators, and database selection | "how to search", "search strategy", "which database" |
| [cite-inline](skills/cite-inline/SKILL.md) | Insert citation markers into draft text based on a provided source list | "add citations to", "insert references into my text" |
| [find-claims](skills/find-claims/SKILL.md) | Find academic sources that support a specific claim or statement | "find a source for", "I need a citation for this claim" |

## Installation

### Claude Code

```bash
/plugin install researcher-skills
```

### Codex CLI

```bash
/plugins
```

Search for `researcher-skills` and select **Install Plugin**.

### Gemini CLI

```bash
gemini extensions install https://github.com/vadym-khodak/researcher-skills
```

## Usage

Skills trigger automatically based on context — no manual activation needed. Just describe what you need in natural language and the relevant skill will activate.
