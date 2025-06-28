document.addEventListener('DOMContentLoaded', function() {
  const expSection = document.getElementById('experience');
  function onScroll() {
    const rect = expSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      expSection.classList.add('visible');
      window.removeEventListener('scroll', onScroll);
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
});
