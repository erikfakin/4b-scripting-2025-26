const nome = "Erik";
const cognome = "Fakin";
const annoDiNascita = 1995;

const data = new Date();
const anni = data.getFullYear() - annoDiNascita;

const numeroACaso = Math.random();

// let sonoRicco = false;

// if(numeroACaso > 0.5){
//     sonoRicco = true;
// }

// Riscrivo la parte di codice sopra in un modo migliore
const sonoRicco = numeroACaso > 0.5;

// if piu' corto
// OPERATORE TERNARIO - TERNARY OPERATOR
const colore = numeroACaso > 0.5 ? "rosso" : "nero";
console.log(`Il colore a caso e' ${colore}`);

// const introduzione = "Il mio nome e' "+nome+" "+cognome+" e' ho "+anni+" anni";
// INTERPOLAZIONE DI STRINGHE - STRING INTERPOLATION
const introduzione = `Il mio nome e' ${nome} ${cognome} e' ho ${anni} anni`
console.log(introduzione);

if(sonoRicco){
    console.log(`Mi trovo nell'anno ${data.getFullYear()} e sono ricco.`);
} else {
    console.log(`Mi trovo nell'anno ${data.getFullYear()} e non sono ricco. :(`);
}