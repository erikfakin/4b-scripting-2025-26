const pulsanteThemeSwitcher = document.getElementById("theme-switcher");
const body = document.querySelector('body');


pulsanteThemeSwitcher.addEventListener("click", cambiaTema);

function cambiaTema(e){
    body.classList.toggle("dark");

}