const pulsanteThemeSwitcher = document.getElementById("theme-switcher");
const body = document.querySelector('body');
const immaginiAnimate = document.querySelectorAll('.immagine-animata');

pulsanteThemeSwitcher.addEventListener("click", cambiaTema);

function cambiaTema(e){
    body.classList.toggle("dark");
}

immaginiAnimate[0].addEventListener('mousemove', muoviImmagine);

function muoviImmagine(e){
    e.target.style.transform = `translateX(${e.clientX}px)`;
    console.log(e.clientX);
}