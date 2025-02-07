const texte = document.getElementById('texteInteractif');
const curseurImage = document.getElementById('curseurImage');
const musique = document.getElementById('musiqueFond');

const curseurImages = [
  '/api/placeholder/50/50',
  '/api/placeholder/60/60',
  '/api/placeholder/70/70'
];
let imageIndex = 0;
let isCursorOnText = false;

document.addEventListener('mousemove', (e) => {
  curseurImage.style.left = `${e.clientX}px`;
  curseurImage.style.top = `${e.clientY}px`;
});

texte.addEventListener('mouseenter', () => {
  isCursorOnText = true;
  curseurImage.style.display = 'block';
});

texte.addEventListener('mouseleave', () => {
  isCursorOnText = false;
  curseurImage.style.display = 'none';
});

texte.addEventListener('click', () => {
  musique.play();
  imageIndex = (imageIndex + 1) % curseurImages.length;
  curseurImage.src = curseurImages[imageIndex];
  
  // Toujours réafficher le curseur image après clic
  curseurImage.style.display = 'block';
});
