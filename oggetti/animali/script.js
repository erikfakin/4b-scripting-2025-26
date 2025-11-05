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

class Cane{
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

    scodinzolare(){
        console.log(`${this.nome} sta scodinzolando.`);
    }
}

const lemure = new Animale('Lemure', 'King Julian', "eeeeek-eeek", 2);
lemure.dormire();

const cane = new Animale('Cane', 'Bobi', 'Bau Bau', 10);
cane.parlare();