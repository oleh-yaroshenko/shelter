const btn = document.querySelector(".main-projects-a")
const catalog = document.querySelector(".main-projects-wrapper-hidden")

btn.addEventListener("click", function () {
    catalog.style.display = "flex"
    btn.style.display = "none"
})

const menu = document.querySelector(".header-mobile")
const showMenu = document.querySelector(".header-burger")
const hideMenu = document.querySelector(".header-mobile-burger")

showMenu.addEventListener("click", function () {
    menu.classList.add("header-mobile-show")
})

hideMenu.addEventListener("click", function () {
    menu.classList.remove("header-mobile-show")
})