for(let i=0; i < 100; i++){
    console.log(i);
}

let numero = Math.random();

while(numero < 0.9){
    console.log(`Il numero a caso e' ${numero}`);
    numero = Math.random();
}

numero = prompt("Inserisci il numero");

for(let i = 1; i<=numero; i++){
    console.log(i**2);
}

let password ='';
do{
    password = prompt("Inserisci la password:");
} while(password !== 'segreto');