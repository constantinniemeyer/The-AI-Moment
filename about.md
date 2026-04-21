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

- **AI Technology** — breakthrough research, new models, and capability evaluations
- **Economic Impact** — productivity, labour markets, investment, and growth
- **Social Impact** — education, healthcare, creativity, privacy, and wellbeing
- **AI Policy** — regulation, governance, safety, and ethics

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
