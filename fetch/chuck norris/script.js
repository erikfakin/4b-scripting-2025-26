// 1. Seleziono e salvo il pulsante e il paragrafo
const pulsante = document.getElementById('pulsante');
const paragrafo = document.getElementById('barzeletta');

// 2. Ascolto se il pulsante viene cliccato
// e richiedo una nuova barzeletta.
// Scrivo la barzeletta nel paragrafo apposito.
pulsante.addEventListener('click', onPulsanteClick);

async function onPulsanteClick(){
    const url = "https://api.chucknorris.io/jokes/random?category=animal";
    const response = await fetch(url);
    const result = await response.json();
    // console.log(result);
    paragrafo.innerText = result.value;
}