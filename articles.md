---
layout: page
title: "Articles"
subtitle: "In-depth coverage of AI developments, research, and their broader implications."
permalink: /articles/
---

Browse articles on AI technology, its economic impact, and social implications. Each post links to original sources and may include AI-generated podcast discussions from Google NotebookLM.

<div class="filter-bar">
  <button class="filter-btn active" onclick="filterPosts('all', this)">All</button>
  <button class="filter-btn" id="filter-whiteboard-theory" onclick="filterPosts('whiteboard theory', this)">Whiteboard Theory</button>
  <button class="filter-btn" id="filter-the-bottom-line" onclick="filterPosts('the bottom line', this)">The Bottom Line</button>
  <button class="filter-btn" id="filter-the-social-ledger" onclick="filterPosts('the social ledger', this)">The Social Ledger</button>
  <button class="filter-btn" id="filter-applied-intelligence" onclick="filterPosts('applied intelligence', this)">Applied Intelligence</button>
</div>

<ul class="article-list" id="article-list">
{% for post in site.posts %}
  <li class="article-list-item" data-categories="{{ post.categories | join: ' ' | downcase }}">
    <div class="post-meta">
      <span class="post-date">{{ post.date | date: "%B %-d, %Y" }}</span>
      {% for category in post.categories %}
        <a href="#{{ category | downcase }}" class="category-tag category-tag--small">{{ category }}</a>
      {% endfor %}
      {% if post.podcast_id %}
        <span class="media-badge media-badge--podcast">🎙️ Podcast</span>
      {% endif %}
      {% if post.video_id %}
        <span class="media-badge media-badge--video">🎬 Video</span>
      {% endif %}
    </div>
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    {% if post.excerpt %}
      <p>{{ post.excerpt | strip_html | truncatewords: 35 }}</p>
    {% endif %}
    <a href="{{ post.url | relative_url }}" class="read-more">Read more &rarr;</a>
  </li>
{% endfor %}
</ul>

<script>
function filterPosts(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  var items = document.querySelectorAll('.article-list-item');
  items.forEach(function(item) {
    if (category === 'all') {
      item.style.display = '';
    } else {
      var cats = item.getAttribute('data-categories') || '';
      item.style.display = cats.indexOf(category) !== -1 ? '' : 'none';
    }
  });
}

// Auto-filter based on URL hash (e.g. #whiteboard-theory → "whiteboard theory")
(function() {
  var hash = window.location.hash.replace('#', '');
  if (hash) {
    var category = hash.replace(/-/g, ' ');
    var btn = document.getElementById('filter-' + hash);
    if (btn) { filterPosts(category, btn); }
  }
})();
</script>
