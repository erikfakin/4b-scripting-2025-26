// Posso creare stringhe in 2 modi

let saluto = "Ciao a tutti";
console.log(saluto);

saluto = new String("Ciao a tutti");
console.log(saluto);

// lunghezza della stringa
const ilMioCane = "Il mio cane si chiama Bobi e gli piace mangiare pane e baccala'";
console.log("Lunghezza della frase:", ilMioCane.length); 

// carattere che si trova su un index specifico
console.log("Carattere all'index 9", ilMioCane.charAt(9));
// se ho index negativi vado da destra a sinistra
console.log("Carattere all'index -3", ilMioCane.at(-3));
// posso immaginarmi le stringhe come liste di caratteri
console.log("Carattere all'index 7", ilMioCane[7]);

// controlla se la frase include la parola cane
console.log("La frase include cane?", ilMioCane.includes("cane"));

// codice UTF-16 del carattere su un certo index
console.log("Codice del carattere all'index 9", ilMioCane.charCodeAt(9));

const testoConSpazi = "          Ciao! Come Va?             ";

// il metodo trim mi elimina gli spazi 
// all'inizio e alla fine di una stringa.
console.log(testoConSpazi);
console.log(testoConSpazi.trim());
// trim non cambia la stringa originale
console.log(testoConSpazi);

// scrivi tutta la frase in maiuscolo
console.log(ilMioCane.toUpperCase());
// scrivi tutta la frase in minuscolo
console.log(ilMioCane.toLocaleLowerCase());

// cambia nella frase tutti gli "cane" in "squalo"
console.log(ilMioCane.replace("cane", "squalo"));
// replace non mi cambia la stringa originale
console.log(ilMioCane);

