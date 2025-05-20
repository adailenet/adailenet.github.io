const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const result = document.getElementById('result');
const ctx = canvas.getContext('2d');

// Accès à la caméra
navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
  .then(stream => {
    video.srcObject = stream;
    video.setAttribute("playsinline", true); // pour iOS
    requestAnimationFrame(scan);
  })
  .catch(err => console.error("Erreur caméra", err));

function scan() {
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, canvas.width, canvas.height, {
      inversionAttempts: "dontInvert",
    });

    if (code) {
      handleQRCode(code.data);
    }
  }
  requestAnimationFrame(scan);
}

function handleQRCode(data) {
  console.log("QR Code détecté :", data);
  // Évite de scanner plusieurs fois
  video.pause();

  // Logique selon le contenu du QR code
  let content = "";
  if (data === "TEST") {
    content = '<img src="src/img/valise.JPG">';
  } else if (data === "TEST2") {
    content = '<img src="src/img/portai.JPG">';
  } else {
    content = "<p>Symbole non reconnu 😢</p>";
  }

  result.innerHTML = content;
}


