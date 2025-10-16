function informazioniViaggio(velocita, tempo, efficienza){
    const consumo = (velocita * tempo * efficienza) / 100;
    console.log(`L'auto ha consumato ${consumo} litri durante il viaggio`);
    const prezzo = consumo * 1.4;
    console.log(`L'auto ha consumato ${prezzo} € di carburante.`)
}

const velocita1 = 60;       // 60 km all'ora
const tempo1 = 2.5;         // 2 ore e mezza
const efficienza1 = 7.2;    // 7.2 litri su 100km

informazioniViaggio(velocita1, tempo1, efficienza1);

const velocita2 = 53;
const tempo2 = 0.6;
const efficienza2 = 8.1;

informazioniViaggio(velocita2, tempo2, efficienza2);

informazioniViaggio(40, 12, 3);

// Possiamo salvare un funzione anonima in una variabile
const saluta = function (nome) {
    console.log(`Ciao a tutti, il mio nome e' ${nome}!!!`);
};

saluta('Erik');

// Arrow function. Modo piu corto per dichiarare funzioni
const conta = (numero) => {
    for(let i=1; i<=numero;i++){
        console.log(i);
    }
}
conta(100);

// Con return "ritorno" certi dati dalla funzione, output
function calcolaAreaCerchio(raggio){
    return Math.PI * (raggio **2)
}

const area1 = calcolaAreaCerchio(3);
console.log(`Area del cerchio con raggio 3 e' ${area1}`);