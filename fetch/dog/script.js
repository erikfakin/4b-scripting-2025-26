const lista = document.getElementById("lista");
const immagine = document.getElementById("immagine");

let razzaSelezionata = "";

async function getData() {
    const url = "https://dog.ceo/api/breeds/list/all";    
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    });
    const result = await response.json();
    const razze = result.message;

    for(const razza in razze){
        const li = document.createElement("li");
        li.innerText = razza;
        lista.appendChild(li);
        li.addEventListener("mouseenter", caricaFoto)
    }
}

async function caricaFoto(e){
    razzaSelezionata = e.target.innerText;
    const url = `https://dog.ceo/api/breed/${razzaSelezionata}/images/random`;    
    const response = await fetch(url);
    const result = await response.json();

    immagine.src = result.message;

}



getData();