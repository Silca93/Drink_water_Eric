let waterBottle = document.querySelector(".waterBottle")
let firstDrink = document.querySelector(".firstDrink")
let bottleText = document.querySelector("h2")
let firstDrinkbg = document.querySelector(".firstDrinkbg")
let glass1 = document.querySelector(".uno")

glass1.addEventListener('click', () => {
    
    bottleText.innerText = "1.75 L Remain";
    firstDrink.style.color = "#0f46bb"
    glass1.style.backgroundColor = "#5fa8f6"
    firstDrinkbg.classList.toggle('expand');


})