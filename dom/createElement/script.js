// Lista dinamica che elenca animali

const animali = [
    {
        nome: "Cane",
        immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbunmIqFwsfV5j3Mzdc4Xu-9QQHthgZo65w&s",
        giocattoloPreferito: "Palla"
    },
    {
        nome: "Gatto",
        immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBMyXghAf4gw7BQ0Db8HiAYB2JcWpyqGMdg&s",
        giocattoloPreferito: "Laser"
    },
    {
        nome: "Pesce",
        immagine: "https://www.viridea.it/wp-content/uploads/2023/03/Carassius-Auratus-o-Pesce-Rosso.jpg",
        giocattoloPreferito: "Roccia"
    }
];

const lista = document.getElementById("lista");


function resetLista() {
    // Vuoto la lista in html in modo da non avere valori duplici
    lista.innerHTML = "";
    for (let i = 0; i < animali.length; i++) {
        const elNome = document.createElement("h2");
        const elGioccatoloPreferito = document.createElement("p");
        const elImmagine = document.createElement("img");

        elNome.innerText = animali[i].nome;
        elGioccatoloPreferito.innerHTML = animali[i].giocattoloPreferito;
        elImmagine.src = animali[i].immagine;

        lista.appendChild(elNome);
        lista.appendChild(elGioccatoloPreferito);
        lista.appendChild(elImmagine);
    }
}

// Chiamo resetLista la prima volta 
// in modo da costruirmi la lista iniziale
resetLista();


const pulsanteSalva = document.getElementById("salva");
const inputNome = document.getElementById("nome");
const inputGiocattoloPreferito = document.getElementById("giocattoloPreferito");
const inputLinkImmagine = document.getElementById("linkImmagine");

function aggiungiAnimale() {

    animali.push(
        {
            nome: inputNome.value,
            immagine: inputLinkImmagine.value,
            giocattoloPreferito: inputGiocattoloPreferito.value
        }
    );

    // Ogni volta che aggiungo un animale alla lista voglio
    // aggiornare il suo contenuto in HTML
    resetLista();
}

pulsanteSalva.addEventListener("click", aggiungiAnimale);
