function Rinoceronte(nome, eta){
    this.nome = nome;
    this.eta = eta;
    this.ciboPreferito = "Salata";
    this.corri = function () {
        console.log(`Io sono ${this.nome} e sto correndo!`);
    };

    this.saluta = function(nome) {
        console.log(`Ciao ${nome} io sono il rinoceronte ${this.nome}
             e il mio cibo preferito e' ${this.ciboPreferito}`);
    };
}

const ciro = new Rinoceronte("Ciro", 10);
const mario = new Rinoceronte("Mario", 8);
const laura = new Rinoceronte("Laura", 7);

console.log(ciro);
console.log(mario);
console.log(laura);

ciro.corri();
laura.corri();

console.log(`Mario ha ${mario.eta} anni!`);

mario.eta = 20;
console.log(`Mario ha ${mario.eta} anni!`);
