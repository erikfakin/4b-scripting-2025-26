async function richiediPokemon() {
    const risposta = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=200');
    const risultato = await risposta.json();
    const listaPokemon = risultato.results;
    const lista = document.getElementById('lista');

    for(pokemon of listaPokemon){
        const li = document.createElement('li');
        const pezziUrl = pokemon.url.split('/');
        const idPokemon = pezziUrl[6];
        const urlImgPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`;
        li.innerHTML = `<img src="${urlImgPokemon}" /> ${pokemon.name}`;
        lista.appendChild(li);

        console.log(pokemon);
    }  
}

richiediPokemon();
console.log("DOPO RICHIEDI POKEMON");