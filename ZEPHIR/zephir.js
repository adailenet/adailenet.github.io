const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const result = document.getElementById("result");
const ctx = canvas.getContext("2d");

navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
  .then(stream => {
    video.srcObject = stream;
    video.setAttribute("playsinline", true);
    video.play();
    requestAnimationFrame(scan);
  });

function scan() {
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, canvas.width, canvas.height);

    if (code) {
      handleCode(code.data);
    }
  }
  requestAnimationFrame(scan);
}

function handleCode(data) {
  // Affiche une image selon le contenu du code
  if (data === "symbole1") {
    result.innerHTML = '<img src="img/arbre.jpg">';
  } else if (data === "symbole2") {
    result.innerHTML = '<img src="img/portail.jpg">';
  } else {
    result.innerHTML = `<p>Code inconnu : ${data}</p>`;
  }
}
