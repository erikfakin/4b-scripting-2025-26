const pulsante = document.getElementById('incrementa');
const contatore = document.getElementById('contatore');
let numero = 0;

function incrementaNumero(){
    numero++;
    contatore.innerText = numero;
}

pulsante.addEventListener('click', incrementaNumero);