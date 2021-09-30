var menuknop = document.querySelector("button")
var nav = document.querySelector("nav")

menuknop.addEventListener("click", openen)

function openen() {
    nav.classList.toggle("open")
    menuknop.classList.toggle("open")
}