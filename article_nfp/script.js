// barre de lecture
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('progress-bar').style.width = scrollPercent + '%';
});

//fleur video scroll control


// On attend que la vidéo soit prête avant d'interagir
window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('flower-video');
  const progressBar = document.getElementById('progress-bar');
  let targetTime = 0;

  // Empêche la vidéo de se lancer toute seule
  video.pause();
  video.currentTime = 0;

  // Synchronisation avec le scroll
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    if (video.readyState >= 2 && video.duration) {
      targetTime = video.duration * scrollPercent;
    }

    if (progressBar) {
      progressBar.style.width = (scrollPercent * 100) + '%';
    }
  });

  // Animation douce (interpolation vers la bonne frame)
  setInterval(() => {
    if (video.readyState >= 2 && video.duration) {
      const delta = targetTime - video.currentTime;
      if (Math.abs(delta) > 0.01) {
        video.currentTime += delta * 0.15; // adoucit le mouvement
      }
    }
  }, 30);
});

