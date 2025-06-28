document.addEventListener('DOMContentLoaded', function() {
  const about = document.getElementById('about');
  function onScroll() {
    const rect = about.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      about.classList.add('visible');
      window.removeEventListener('scroll', onScroll);
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
});
