const paragrafo = document.getElementById('paragrafo');
let testoOriginale = true;

function cambiaColore(){
    paragrafo.style.color = 'red';
    paragrafo.style.backgroundColor = 'grey';
}

function moveSpiaggia(){
    const x = Math.random() * 500;
    const y = Math.random() * 500;
    paragrafo.style.transform = `translate(${x}px, ${y}px)`;
}

function cambiaTesto(){
    if(testoOriginale){
        paragrafo.innerText = "You ain't nothin' but a hoochie mama Hoodrat, hoodrat, hoochie mama"
        testoOriginale = false;
    } else {
        paragrafo.innerText = "Il DOM rappresenta il documento HTML come un albero di nodi in JS."
        testoOriginale= true;
    }
}

console.log(paragrafo);