---
layout: page
title: "Podcasts"
subtitle: "AI-generated audio discussions from Google NotebookLM and curated podcast episodes."
permalink: /podcasts/
---

Listen to AI-generated podcast discussions created with [Google NotebookLM](https://notebooklm.google.com) — an AI tool that synthesises source materials into conversational audio overviews. Each episode below is linked to its corresponding article or source material.

> **How it works:** Each NotebookLM Audio Overview is generated from a set of curated sources — research papers, news articles, and reports — and presented as a natural-sounding conversation between two AI hosts.

---

## All Podcast Episodes

{% assign podcast_posts = site.posts | where_exp: "post", "post.podcast_id" %}
{% if podcast_posts.size > 0 %}
<ul class="article-list">
  {% for post in podcast_posts %}
    <li class="article-list-item has-podcast">
      <div class="post-meta">
        <span class="post-date">{{ post.date | date: "%B %-d, %Y" }}</span>
        {% for category in post.categories %}
          <a href="{{ '/articles/#' | append: category | relative_url }}" class="category-tag category-tag--small">{{ category }}</a>
        {% endfor %}
        <span class="media-badge media-badge--podcast">🎙️ Podcast</span>
      </div>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      {% if post.excerpt %}
        <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      {% endif %}
      <a href="{{ post.url | relative_url }}" class="read-more">Listen now &rarr;</a>
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No podcast episodes yet. Check back soon, or <a href="{{ '/articles/' | relative_url }}">browse articles</a>.</p>
{% endif %}

---

## How to Use NotebookLM

To create your own AI-generated audio overview from sources:

1. Go to [notebooklm.google.com](https://notebooklm.google.com)
2. Create a new notebook and add your sources (PDFs, web links, text)
3. Click **Audio Overview** to generate a podcast-style discussion
4. Share the notebook link to embed it here

**To embed a NotebookLM podcast in a new post**, add to your post's front matter:

```yaml
podcast_id: "YOUR_NOTEBOOK_ID"
podcast_type: "notebooklm"
```

The `podcast_id` is the long string from your NotebookLM notebook URL:
`https://notebooklm.google.com/notebook/**YOUR_NOTEBOOK_ID**`
