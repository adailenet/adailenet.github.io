const canvas = document.getElementById("posterCanvas");
const ctx = canvas.getContext("2d");
const generateBtn = document.getElementById("generate");
const downloadBtn = document.getElementById("download");

const colors = [
  { background: "#483D8B", text: "#E0E0E0" },
  { background: "#800080", text: "#FFFFFF" },
  { background: "#DC143C", text: "#FFFFE0" },
  { background: "#2E8B57", text: "#F0F8FF" },
  { background: "#191970", text: "#FFFAFA" }
];

function drawShape(word, x, y, direction = "down") {
    const shapeType = Math.random();
    const spacing = 28;
    let lines = [];
  
    if (shapeType < 0.33) {
      // Triangle (normal)
      for (let i = word.length; i > 0; i--) {
        lines.push(word.substring(0, i));
      }
    } else if (shapeType < 0.66) {
      // Triangle inversé
      for (let i = 0; i < word.length; i++) {
        lines.push(word.substring(i));
      }
    } else {
      // Rectangle
      for (let i = 0; i < 5 + Math.floor(Math.random() * 3); i++) {
        lines.push(word);
      }
    }
  
    lines.forEach((line, idx) => {
      const offsetY = direction === "down" ? idx * spacing : -idx * spacing;
      ctx.fillText(line, x, y + offsetY);
    });
  }
  

function drawPoster(word1, word2) {
  const { background, text } = colors[Math.floor(Math.random() * colors.length)];
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = text;
  ctx.font = "bold 30px Helvetica";
  ctx.textAlign = "center";

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Placer les mots au centre
  ctx.fillText(word1, centerX - 60, centerY);
  ctx.fillText(word2, centerX + 60, centerY);

  // Générer des blocs autour des mots
  drawShape(word1, centerX - 60, centerY, Math.random() > 0.5 ? "up" : "down");
  drawShape(word2, centerX + 60, centerY, Math.random() > 0.5 ? "up" : "down");
}

generateBtn.addEventListener("click", () => {
  const word1 = document.getElementById("word1").value.toUpperCase();
  const word2 = document.getElementById("word2").value.toUpperCase();

  if (word1 && word2) {
    drawPoster(word1, word2);
  }
});

downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "affiche_olivetti.png";
  link.href = canvas.toDataURL();
  link.click();
});
