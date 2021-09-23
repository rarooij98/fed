var menuknop = document.querySelector("#hamburger")
var nav = document.querySelector("nav")
menuknop.addEventListener("click", openen)

function openen(){
    nav.classList.toggle("open")
}