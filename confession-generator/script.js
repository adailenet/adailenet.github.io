// Liste de phrases d'inspiration ✨
// Tu peux en ajouter autant que tu veux ici 👇
const phrases = [
  "i'm scared of being watched and read by people that's too much",
  "i need control",
  "i'm scared of speaking my very true mind and my ideas",
  "i love flowers, especially their colors and gentle forms",
  "i found river's movement and sound to relaxing and it flows on my soul",
  "is there a generational memory that connects us all",
  "why does woman bodies are so mystified and used in art ",
  "i feel myself drowing into all those informations, i feel like i need to keep up an act and be sure of myself when i'm not even proud of what i make thats depressing",
  "people are captivating when you look closely at them",
  "why am i so attached to objects and places, why am i scared to lose them all, why am i thinking that they will disapear of my memories if i don't look for them ? .",
  "there's faces i'd like to remember",
  "when will i be an adult ? I don't want to be one",
  "Remembering places that i actually never went before",
  "it's weid le déjà vu",
  "when collage means noting but chaos",
  "an anarchic woman",
  "the more you think, the more you read, the more you write, the more you create",
  "people leaves traces and voids",
  "ode à l'oubli",
  "surimpressons on something",
  "i want to be more and more gentle but won't this going to set me on fire ?",
  "my emotions right now :",
  "staires to heaven / stare to heaven", 
  "shadows eat you alive",
  "from head to toes, loving the vibe and the outfit, looking for someone ?",
  "faces and bodies in lights and shadows",
  "paintings studies",
  "misunderstood",
  "hugging",
  "nature morte",
];

// Sélection des éléments
const btn = document.getElementById("generate-btn");
const quote = document.getElementById("quote");

// Fonction pour tirer une phrase aléatoire
function generatePhrase() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const randomPhrase = phrases[randomIndex];

  // Effet visuel (fade)
  quote.classList.remove("show");
  setTimeout(() => {
    quote.textContent = `"${randomPhrase}"`;
    quote.classList.add("show");
  }, 200);
}

// Événement au clic
btn.addEventListener("click", generatePhrase);
