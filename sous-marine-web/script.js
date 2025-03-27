fetch('assets/cables.geojson')
  .then(response => response.json())
  .then(data => {
    const cableList = document.getElementById('cable-list'); // Récupère l'élément de la liste

    data.features.forEach(feature => {
      const cableName = feature.properties.slug; // Nom du câble
      const cableColor = feature.properties.color; // Couleur du câble
      const coordinates = feature.geometry.coordinates; // Coordonnées du câble

      // Création de l'élément de la liste pour chaque câble
      const listItem = document.createElement('li');

      // Formatage des coordonnées pour un affichage lisible
      const formattedCoordinates = coordinates.map((segment, index) => {
        const segmentCoords = segment.map(coord => `(${coord[0]}, ${coord[1]})`).join(" → ");
        return `${index + 1}: ${segmentCoords}`;
      }).join("<br>");

      // Mise à jour du texte de l'élément de la liste avec le nom, la couleur et les coordonnées
      listItem.innerHTML = `
        <span style="color:${cableColor}"><strong>${cableName}</strong></span>
        <span style="color:${cableColor}">${cableColor}</span>
        ${formattedCoordinates}
      `;

      // Ajoute l'élément de la liste à la page HTML
      cableList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Erreur de chargement du fichier:', error));
