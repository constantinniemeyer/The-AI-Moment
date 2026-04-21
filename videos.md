---
layout: page
title: "Videos"
subtitle: "Video explainers, interviews, and documentary content on AI developments."
permalink: /videos/
---

Watch curated video content on artificial intelligence — from technical explainers to documentary insights. Videos are embedded from YouTube and NotebookLM.

---

## All Videos

{% assign video_posts = site.posts | where_exp: "post", "post.video_id" %}
{% if video_posts.size > 0 %}
<ul class="article-list">
  {% for post in video_posts %}
    <li class="article-list-item has-video">
      <div class="post-meta">
        <span class="post-date">{{ post.date | date: "%B %-d, %Y" }}</span>
        {% for category in post.categories %}
          <a href="{{ '/articles/#' | append: category | relative_url }}" class="category-tag category-tag--small">{{ category }}</a>
        {% endfor %}
        <span class="media-badge media-badge--video">🎬 Video</span>
      </div>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      {% if post.excerpt %}
        <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      {% endif %}
      <a href="{{ post.url | relative_url }}" class="read-more">Watch now &rarr;</a>
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No videos yet. Check back soon, or <a href="{{ '/articles/' | relative_url }}">browse articles</a>.</p>
{% endif %}

---

## How to Embed a Video

**YouTube video** — add to your post's front matter:

```yaml
video_id: "YOUR_YOUTUBE_VIDEO_ID"
video_type: "youtube"
```

**Vimeo video** — add to your post's front matter:

```yaml
video_id: "YOUR_VIMEO_VIDEO_ID"
video_type: "vimeo"
```

**NotebookLM notebook** — add to your post's front matter:

```yaml
video_id: "YOUR_NOTEBOOK_ID"
video_type: "notebooklm"
```

You can also embed inline anywhere in your markdown content:

```liquid
{% include video-embed.html video_id="dQw4w9WgXcQ" video_type="youtube" video_title="My Video" %}
```
