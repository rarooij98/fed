var menuknop = document.querySelector("header a:nth-of-type(2)")
var nav = document.querySelector("nav")
menuknop.addEventListener("click", openen)

function openen() {
    nav.classList.toggle("open")
}