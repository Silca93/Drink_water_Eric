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

let glass2 = document.querySelector(".dos");

let secondDrinkbg = document.querySelector(".secondDrinkbg");
let secondDrink = document.querySelector(".secondDrink")
glass2.addEventListener('click', () => {
    bottleText.innerText = "1.5 L Remain";
    secondDrink.style.color = "#0f46bb"
    // firstDrinkbg.style.height = "88px"
    // firstDrink.innerText = "25%"
    // firstDrinkbg.classList.toggle('expand');
    secondDrinkbg.classList.toggle('expand');
        
});

let glass3 = document.querySelector(".tres");

let thirdDrinkbg = document.querySelector(".thirdDrinkbg");
let thirdDrink = document.querySelector(".thirdDrink")
glass3.addEventListener('click', () => {
    bottleText.innerText = "1.25 L Remain";
    thirdDrink.style.color = "#0f46bb"
    // firstDrinkbg.style.height = "88px"
    // firstDrink.innerText = "25%"
    // firstDrinkbg.classList.toggle('expand');
    thirdDrinkbg.classList.toggle('expand');
        
});

// let glass3 = document.querySelector(".tres");
// let thirdDrink = document.querySelector(".thirdDrink");

// glass3.addEventListener('click', () => {
//     bottleText.innerText = "1.25 L Remain";
//     firstDrinkbg.style.height = "132px"
//     firstDrink.innerText = "37.5%"
// })

// let glass4 = document.querySelector(".quatro")
// glass4.addEventListener('click', () => {
//     bottleText.innerText = "1 L Remain";
//     firstDrinkbg.style.height = "176px"
//     firstDrink.innerText = "50%"
// })