const pulsanteSinistra = document.getElementById('pulsante-sinistra');
const pulsanteDestra = document.getElementById('pulsante-destra');

let immagineCorrente = 1;

const immagine = document.querySelector('img');

pulsanteDestra.addEventListener('click', immagineSuccessiva);
pulsanteSinistra.addEventListener('click', immaginePrecedente);

function immagineSuccessiva(){
    if(immagineCorrente >= 6){
        return;
    }

    immagineCorrente++;
    immagine.src = `immagini/${immagineCorrente}.jpg`
}

