console.log("Pi Greco:", Math.PI);
console.log("Numero di Eulero:", Math.E);


// Es: calcola l'area del cerchio di raggio 5
const areaCerchio = Math.PI * 5 ** 2;
console.log("Area cerchio di raggio 5:", areaCerchio);

// Es: trova i massimo tra i seguenti numeri:
//  -3, 5, -43, 24523, 52423, 524*324, 123 / 0.01

const massimo = Math.max(-3, 5, -43, 24523, 52423, 524*324, 123 / 0.01)
console.log("Il massimo e':", massimo);
// Trova il minimo
const minimo = Math.min(-3, 5, -43, 24523, 52423, 524*324, 123 / 0.01);
console.log("Il minimo e':", minimo);

// Es. Calcola la lunghezza della diagonale di un 
// rettangolo di lati 13.6 e 42.77
const diagonale = Math.sqrt(13.6 ** 2 + 42.77 ** 2);
console.log("Diagonale:", diagonale);

// Es. Genera un numero a caso da 0 a 100
const numeroACaso = Math.random() * 100;
console.log("Numero a caso:", numeroACaso);

