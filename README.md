# Researcher Skills

A collection of skills for academic researchers, built as a Claude Code plugin.

## Skills

### Finding & Sourcing
| Skill | Description | Triggers |
|-------|-------------|----------|
| [search-sources](skills/search-sources/SKILL.md) | Find academic sources via web search (Scholar, Semantic Scholar, PubMed, etc.) | "find sources", "search for papers", "find literature on" |
| [search-guide](skills/search-guide/SKILL.md) | Teach effective search strategies, Boolean operators, and database selection | "how to search", "search strategy", "which database" |
| [find-claims](skills/find-claims/SKILL.md) | Find academic sources that support a specific claim or statement | "find a source for", "I need a citation for this claim" |

### Writing & Editing
| Skill | Description | Triggers |
|-------|-------------|----------|
| [grammar-check](skills/grammar-check/SKILL.md) | Proofread academic text for grammar, style, and clarity | "check grammar", "proofread", "fix my writing" |
| [paraphrase](skills/paraphrase/SKILL.md) | Rewrite a passage in different words while preserving meaning | "paraphrase", "reword", "rephrase", "rewrite in my own words" |
| [simplify](skills/simplify/SKILL.md) | Make dense academic text more readable for a target audience | "simplify", "make it clearer", "plain language" |
| [expand-paragraph](skills/expand-paragraph/SKILL.md) | Develop a brief idea or bullet point into a full academic paragraph | "expand", "elaborate", "flesh out" |
| [improve-structure](skills/improve-structure/SKILL.md) | Review and suggest a better structure or outline for a paper or section | "improve structure", "reorganize", "my paper doesn't flow" |

### Summarizing & Condensing
| Skill | Description | Triggers |
|-------|-------------|----------|
| [summarize](skills/summarize/SKILL.md) | Condense a paper, article, or chapter to its key points | "summarize", "key points", "condense" |
| [write-abstract](skills/write-abstract/SKILL.md) | Draft or improve an abstract for a paper, thesis, or conference submission | "write abstract", "improve abstract", "abstract for my paper" |

### Citations & References
| Skill | Description | Triggers |
|-------|-------------|----------|
| [bibliography](skills/bibliography/SKILL.md) | Format reference lists per ДСТУ, APA, MLA, Chicago, IEEE, ГОСТ | "список літератури", "APA", "references", citation formatting |
| [cite-inline](skills/cite-inline/SKILL.md) | Insert citation markers into draft text based on a provided source list | "add citations to", "insert references into my text" |

### Academic Integrity
| Skill | Description | Triggers |
|-------|-------------|----------|
| [check-plagiarism](skills/check-plagiarism/SKILL.md) | Detect near-copy passages, insufficient paraphrasing, missing citations, and self-plagiarism | "check plagiarism", "is this plagiarism", "too similar to source" |
| [detect-ai-text](skills/detect-ai-text/SKILL.md) | Flag linguistic patterns associated with AI-generated content; recommends dedicated tools | "check if AI wrote this", "detect ChatGPT", "AI-generated text" |

### Metadata & Discoverability
| Skill | Description | Triggers |
|-------|-------------|----------|
| [suggest-title](skills/suggest-title/SKILL.md) | Generate title options for a paper, thesis, or article | "suggest a title", "title for my paper", "title ideas" |
| [keywords](skills/keywords/SKILL.md) | Generate academic keywords for indexing and database discoverability | "keywords", "key phrases", "ключові слова" |

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
