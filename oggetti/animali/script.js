class Animale{

    constructor(specie, nome, verso, eta){
        this.specie = specie;
        this.nome = nome;
        this.verso = verso;
        this.eta = eta;
    }

    dormire(){
        console.log(`${this.specie} chiamato ${this.nome} sta dormendo!`);
    }

    mangiare(){
        console.log(`${this.specie} chiamato ${this.nome} sta mangiando!`);
    }

    parlare(){
        console.log(this.verso);
    }
}

class Cane extends Animale{
    constructor(razza, nome, eta){
        super('Cane', nome, 'Bau Bau', eta);
        this.razza = razza;
    }

    scodinzolare(){
        console.log(`${this.nome} sta scodinzolando.`);
    }
}

const lemure = new Animale('Lemure', 'King Julian', "eeeeek-eeek", 2);
lemure.dormire();

const cane = new Cane('Beagle', 'Chacky', 8);
cane.dormire();
cane.parlare();
cane.scodinzolare();

console.log(lemure);
console.log(cane);

console.log(console);
console.info("Il cane si chiama Chucky")
console.error('Il cane non sta bene');

const numeri = new Array(3);
console.log(numeri);

const numero = 5;
console.log(numero.toFixed(2));