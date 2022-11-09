console.log("Witam serdecznie!");

let button = document.querySelector(".button");
let section__image = document.querySelector(".section__image");

button.addEventListener("click", () => {
    section__image.remove();
});

let themeButton = document.querySelector(".js-themeButton");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName");

themeButton.addEventListener("click", () => {
    body.classList.toggle("dark");

themeName.innerText = body.classList.contains("dark")? "jasny" : "ciemny";
})

