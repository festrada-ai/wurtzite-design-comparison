document.addEventListener("DOMContentLoaded", function() {
  // Animación al hacer scroll
  function revealTimeline() {
    var events = document.querySelectorAll('.timeline-event');
    var windowHeight = window.innerHeight;
    events.forEach(function(event) {
      var position = event.getBoundingClientRect().top;
      if (position < windowHeight - 60) {
        event.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', revealTimeline);
  revealTimeline();

  // Vistas previas en los enlaces
  document.querySelectorAll('.preview-link').forEach(function(link) {
    link.addEventListener('mousemove', function(e) {
      var preview = document.getElementById('link-preview');
      var img = document.getElementById('preview-img');
      var title = document.getElementById('preview-title');
      var desc = document.getElementById('preview-desc');
      img.src = link.getAttribute('data-img');
      img.style.display = img.src ? 'block' : 'none';
      title.textContent = link.getAttribute('data-title');
      desc.textContent = link.getAttribute('data-desc');
      preview.style.display = 'block';
      preview.style.left = (e.pageX + 20) + 'px';
      preview.style.top = (e.pageY - 20) + 'px';
    });
    link.addEventListener('mouseleave', function() {
      document.getElementById('link-preview').style.display = 'none';
    });
  });
});