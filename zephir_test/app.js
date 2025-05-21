document.addEventListener('DOMContentLoaded', function() {
    const scene = document.querySelector('a-scene');
    const marker = document.querySelector('a-marker');
    const loadingElement = document.getElementById('loading');

    // Événement déclenché lorsqu'un marqueur est détecté
    marker.addEventListener('markerFound', function() {
        loadingElement.classList.add('hidden');
        
        // Exemple d'animation : rotation d'un cube rouge
        const animatedContent = document.getElementById('animated-content');
        if (!animatedContent.hasChildNodes()) {
            const box = document.createElement('a-box');
            box.setAttribute('color', 'red');
            box.setAttribute('animation', {
                property: 'rotation',
                to: '0 360 0',
                dur: 2000,
                loop: true,
                easing: 'linear'
            });
            animatedContent.appendChild(box);
        }
    });

    // Événement déclenché lorsqu'un marqueur est perdu
    marker.addEventListener('markerLost', function() {
        loadingElement.classList.remove('hidden');
    });

    // Gestion des erreurs de la caméra
    scene.addEventListener('camera-error', function() {
        console.error('Erreur d\'accès à la caméra');
        alert('Impossible d\'accéder à la caméra. Veuillez vérifier les permissions.');
    });
});

// Fonction pour charger une animation ou une image personnalisée
function loadCustomContent(type, url) {
    const animatedContent = document.getElementById('animated-content');
    animatedContent.innerHTML = '';

    if (type === 'image') {
        const image = document.createElement('a-image');
        image.setAttribute('src', url);
        image.setAttribute('position', '0 0 0');
        image.setAttribute('scale', '1 1 1');
        animatedContent.appendChild(image);
    } else if (type === 'model') {
        const model = document.createElement('a-entity');
        model.setAttribute('gltf-model', url);
        model.setAttribute('scale', '0.5 0.5 0.5');
        model.setAttribute('animation', 'property: rotation; to: 0 360 0; dur: 2000; loop: true; easing: linear');
        animatedContent.appendChild(model);
    }
} 