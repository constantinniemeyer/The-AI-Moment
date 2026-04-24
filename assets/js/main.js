// The AI Moment — Main JS

// Mobile nav toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('open');
  });

  // Close nav when a link is clicked (mobile)
  nav.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Analytics: scroll-depth and section-view tracking
(function () {
  if (typeof gtag !== 'function') return;

  // Scroll-depth events at 25 / 50 / 75 / 100 %
  var scrollMilestones = [25, 50, 75, 100];
  var milestonesFired = {};

  function getScrollPercent() {
    var el = document.documentElement;
    var scrolled = el.scrollTop || document.body.scrollTop;
    var total = el.scrollHeight - el.clientHeight;
    return total > 0 ? Math.round((scrolled / total) * 100) : 0;
  }

  window.addEventListener('scroll', function () {
    var pct = getScrollPercent();
    scrollMilestones.forEach(function (milestone) {
      if (!milestonesFired[milestone] && pct >= milestone) {
        milestonesFired[milestone] = true;
        gtag('event', 'scroll_depth', {
          percent_scrolled: milestone,
          page_path: window.location.pathname
        });
      }
    });
  }, { passive: true });

  // Section-view events via IntersectionObserver
  if (!('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var label = el.querySelector('h1,h2,h3');
      var sectionName = (label && label.textContent.trim()) || el.id || el.className;
      gtag('event', 'section_view', {
        section_name: sectionName,
        page_path: window.location.pathname
      });
      observer.unobserve(el);
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('main section, main article, .post-content').forEach(function (el) {
    observer.observe(el);
  });
})();
