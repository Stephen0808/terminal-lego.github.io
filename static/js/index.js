// Terminal-Lego Project Page
// Scroll fade-in animation
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(function(section) {
    if (!section.classList.contains('hero')) {
      section.classList.add('fade-in-section');
    }
  });

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-section').forEach(function(el) {
    observer.observe(el);
  });
});
