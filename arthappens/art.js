const imagePaths = [
    { src: "img/diag1.jpg", isTarget: false },
    { src: "img/diag2.jpg", isTarget: true },
    { src: "img/blan.jpg", isTarget: false },
    { src: "img/blan.jpg", isTarget: false },
    { src: "img/diag3.jpg", isTarget: true },
    { src: "img/blan.jpg", isTarget: false },
    { src: "img/blan.jpg", isTarget: false },
    { src: "img/diag4.jpg", isTarget: true },
    { src: "img/diag5.jpg", isTarget: false }
];

const grid = document.querySelector('.grid');
const validateBtn = document.getElementById('validateBtn');
const resultMessage = document.getElementById('resultMessage');
const nextTestLink = document.getElementById('nextTestLink'); // Sélection du lien

imagePaths.forEach((imgObj, index) => {
    const img = document.createElement('img');
    img.src = imgObj.src;
    img.dataset.isTarget = imgObj.isTarget;
    img.dataset.index = index;
    img.addEventListener('click', () => {
        img.classList.toggle('selected');
    });
    grid.appendChild(img);
});

function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1.sort((a, b) => a - b)) === JSON.stringify(arr2.sort((a, b) => a - b)); // Comparaison correcte
}

const nextTestBtn = document.getElementById('nextTestBtn'); // Sélection du bouton

validateBtn.addEventListener('click', () => {
    const selectedImages = document.querySelectorAll('.grid img.selected');
    const selectedIndexes = Array.from(selectedImages).map(img => parseInt(img.dataset.index));

    const correctIndexes = imagePaths
        .map((img, i) => (img.isTarget ? i : null))
        .filter(i => i !== null);

    if (arraysEqual(selectedIndexes, correctIndexes)) {
        resultMessage.textContent = "yes, here!";
        resultMessage.style.color = "green";
        
        startCelebration(); // 🎉 Déclencher la pluie d'images !
    } else {
        resultMessage.textContent = "not here...";
        resultMessage.style.color = "red";
        
        // Cacher le bouton si l'utilisateur s'est trompé
        nextTestBtn.style.display = 'none';
    }
});

function startCelebration() {
    function createFallingImage() {
        const img = document.createElement("img");
        img.src = "img/eclair.png"; // Remplace par ton image de célébration
        img.classList.add("falling-image");

        // Position aléatoire sur l'écran
        img.style.left = `${Math.random() * window.innerWidth}px`;
        img.style.top = `-50px`; // Commence au-dessus de l'écran

        document.body.appendChild(img);

        // Animation vers le bas avec une durée aléatoire
        setTimeout(() => {
            img.style.transform = `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`;
            img.style.opacity = "0"; // Disparition progressive
        }, Math.random() * 3000 + 2000); // Entre 2s et 5s de chute

        // Supprime l'image après un certain temps
        setTimeout(() => {
            img.remove();
        }, 10000); // Assure que l’image disparaît après 6s
    }

    // Lancer une image toutes les 300-800ms pour un effet continu
    setInterval(() => {
        createFallingImage();
    }, Math.random() * 500 + 300);
}

