console.log("CIAO DA SCRIPT JS");

// Dichiarazione di varialbili
let prezzo = 5;
console.log("Il prezzo all'inizio e' " + prezzo);

// Riassegnazione di valore alla variabile
prezzo = 7;
console.log("Il prezzo alla fine e' " + prezzo);

// Dichiarazione di constanti
const nome = "Erik";
console.log("Il mio nome e' " + nome);

// ERRORE: non si possono riassegnare valori a constanti
// Uncaught TypeError: Assignment to constant variable.
nome = "Kire";
console.log("Il mio nome e' " + nome);