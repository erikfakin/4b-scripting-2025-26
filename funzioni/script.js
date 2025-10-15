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

