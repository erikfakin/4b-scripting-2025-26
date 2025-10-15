// Dichiarazione di una lista

const lista1 = [23, 43, 65, "albero", "chicken nugget", 12.43];
let lista2 = ["Mario", "Maria", "Giovanna", "Carlo"];

console.log("Lista 1:", lista1);
console.log("Lista 2:", lista2);

// Accesso agli elementi

console.log("Il quarto elemento della lista1", lista1[3]);

// Posso cambiare gli elementi di una lista const
lista1[1] = "formaggio";
console.log(lista1);

// Non posso riassegnare una nuova lista perche 
// ho dichiarato lista1 come const
// lista1 = [1, 2, 3];
// console.log(lista1);

// Posso riassegnare lista2 perche e' una variabile let
lista2 = ["pera", "mela", "arancia", "pomodoro"];
console.log(lista2);

// Dimensioni della lista
console.log(`lista1 ha ${lista1.length} elementi`);

// 