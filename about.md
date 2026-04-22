---
layout: page
title: "About"
subtitle: "The story behind The AI Moment"
permalink: /about/
---

**The AI Moment** is a curated online resource tracking artificial intelligence developments and their impact on society and the economy.

## Our Mission

We aim to make AI developments accessible and understandable to a wide audience — connecting research, journalism, and analysis in one place. We link to original sources and curate AI-generated podcast discussions from [Google NotebookLM](https://notebooklm.google.com) to help readers engage with complex topics in multiple formats.

## What We Cover

- **Whiteboard Theory** — summaries of the latest skirmishes in AI research, industry, and regulation
- **The Bottom Line** — analysis of how silicon is reshaping labour markets and business models
- **The Social Ledger** — reporting on the algorithmic impact on schools, culture and society at large
- **Applied Intelligence** — a pragmatic guide to putting AI to work, from DIY software development to the subtle art of the prompt
- **Synthetic Talk** — AI-generated podcasts via Google NotebookLM, deep dives on key AI topics
- **The Big Picture** — curated videos and interviews for a clearer view of the landscape

## How This Site Works

This site is built with [Jekyll](https://jekyllrb.com) and hosted on [GitHub Pages](https://pages.github.com). Posts are written in Markdown and can embed:

- **Podcasts** from [Google NotebookLM](https://notebooklm.google.com) — AI-generated audio discussions synthesised from source materials
- **Videos** from YouTube, Vimeo, and NotebookLM

## Contributing

This is an open-source project. To suggest articles, report issues, or contribute content:

1. Visit the [GitHub repository](https://github.com/constantinniemeyer/The-AI-Moment-)
2. Open an issue or pull request

## Adding a New Post

Create a file in the `_posts/` directory following this format:

```
_posts/YYYY-MM-DD-your-post-title.md
```

Use the following front matter template:

```yaml
---
layout: post
title: "Your Post Title"
subtitle: "Optional subtitle"
date: YYYY-MM-DD HH:MM:SS +0000
categories: [Technology]    # Technology, Economics, Society, Policy, Meta
# Section tags: whiteboard-theory, the-bottom-line, the-social-ledger, applied-intelligence, synthetic-talk, the-big-picture
tags: [tag1, tag2]

# Optional: link to original source
source_url: "https://example.com/article"
source_name: "Source Name"

# Optional: embed a NotebookLM podcast
podcast_id: "your-notebooklm-notebook-id"
podcast_type: "notebooklm"

# Optional: embed a video
video_id: "youtube-video-id"
video_type: "youtube"    # youtube, vimeo, notebooklm

# Optional: further reading links
further_reading:
  - title: "Related Article"
    url: "https://example.com"
---

Your post content here...
```

## Contact

This project is maintained by [@constantinniemeyer](https://github.com/constantinniemeyer) on GitHub.
