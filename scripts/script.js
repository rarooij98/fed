var menuknop = document.querySelector("header a:nth-of-type(2)")
var icoon = document.querySelector("header a img")
var nav = document.querySelector("nav")
menuknop.addEventListener("click", openen)

function openen() {
    nav.classList.toggle("open")
    icoon.src = "./images/pijl.svg"; //hoe toggle je een img src?
}

