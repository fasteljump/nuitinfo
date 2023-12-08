function toggleAccessibility() {
    var body = document.body;
    var heading = document.getElementById("mainHeading");

    // Changer l'affichage en fonction de l'état actuel
    if (body.classList.contains("accessible")) {
        body.classList.remove("accessible");
        heading.textContent = "Paralympique mode";
    } else {
        body.classList.add("accessible");
        heading.textContent = "Paralympique";
    }
}

function toggleparis() {
    var body = document.body;
    var heading = document.getElementById("mainHeading");

    // Changer l'affichage en fonction de l'état actuel
    if (body.classList.contains("paris")) {
        body.classList.remove("paris");
        heading.textContent = "Paralympique mode";
    } else {
        body.classList.add("paris");
        heading.textContent = "Paralympique";
    }
}


var couleur = 'black';
function couleurstylo(couleur)
{
    couleurstylov = couleur;
}


function pixcouleur(pix)
{
    pix.style.background = couleurstylov;
}