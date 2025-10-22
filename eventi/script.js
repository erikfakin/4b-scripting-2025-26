// document.addEventListener('mousemove', function(evento){
//     console.log(evento);
// });

const titolo = document.querySelector('h1');
console.log(titolo);

function gestisciClick(){
    titolo.style.color = "#ff00ee";
}

titolo.addEventListener('click', gestisciClick);
