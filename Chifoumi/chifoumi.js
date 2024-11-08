// Je sélectionne tous les éléments
const feu = document.getElementById('feu');
const eau = document.getElementById('eau');
const plante = document.getElementById('plante');
const rejouer = document.getElementById('.rejouer');
const choixjoueur = document.getElementById('.choixjoueur');
const choixordinateur = document.getElementById('.choixordinateur');
const section = document.getElementById('.section');

//Ici on a un tableau qui contient les choix
const choix = ['feu','eau','plante'];

//La je créer une fonction pour générer un choix aléatoire pour l'ordi
function choixOrdinateurAleatoire() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choix[randomIndex];
}

//C'est pour afficher l'image du joueur et de l'ordinateur dans les cercles blanc
function afficherChoix(choixElem, choixType) {
    if (choixType === 'feu') {
        choixElem.style.backgroundImage = "url('https://www.giantbomb.com/a/uploads/scale_medium/16/164924/3083931-8746743194-flat%2C.jpg')";
    } else if (choixType ==='eau') {
        choixElem.style.backgroundImage = "url('https://ih0.redbubble.net/image.402379411.5464/flat,550x550,075,f.jpg')";
    } else if (choixType === 'plante') {
        choixElem.style.backgroundImage = "url('https://cdn.chaoscards.co.uk/uploads/prod_img/2_176677_s.png?v=-62169983925')";
    }
}

// Pour déterminer le résultat
function jouerJeu(choixJoueurType) {
    const choixOrdi = choixOrdinateurAleatoire();

    // choix de l'ordinateur
    afficherChoix(choixordinateur, choixOrdi);

    // choix du joueur
    afficherChoix(choixJoueur, choixJoueurType);

    // pour déterminer le gagnant
    let resultat = "";
    if (choixJoueurType === choixOrdi) {
        resultat = "Egalite !";
    } else if (
        (choixJoueurType ==='feu' && choixOrdi ==='plante') ||
        (choixJoueurType ==='eau' && choixOrdi ==='feu') ||
        (choixJoueurType ==='plante' && choixOrdi ==='eau')
    ) {
        resultat = "Vous avez gagné !";
    } else {
        resultat = "L'oridnateur a gagné !";
    }

    alert(resultat); // afficher le résultat
}

// les clics
feu.addEventListener('click', () => {
    jouerJeu('feu');
});
eau.addEventListener('click', () => {
    jouerJeu('eau');
});
plante.addEventListener('click', () => {
    jouerJeu('plante');
});

// pour rejouer
rejouer.addEventListener('click', () => {
    choixJoueur.style.backgroundImage = "";
    choixordinateur.style.backgroundImage = "";
});