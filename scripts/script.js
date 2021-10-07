//JS 3-stap

var menuknop = document.querySelector("button") //1: het selecteren van het element dat de interactie start en opslaan in een variabele
var nav = document.querySelector("nav")

menuknop.addEventListener("click", openen) //2: het geselecteerde element iets laten doen als er een actie (click) op uitgevoerd wordt

function openen() {
    nav.classList.toggle("open") //3: in de functie een class toevoegen aan het element in de HTML waar iets mee moet gebeuren
    menuknop.classList.toggle("open")
}