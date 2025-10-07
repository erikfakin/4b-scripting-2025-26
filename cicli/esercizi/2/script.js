const numero = prompt("Inserisci un numero da 1 a infinito: ");

for(let i=1; i < numero; i++){
    if(i % 7 == 0 && i % 3 == 0){
        console.log(i)
    }
}
