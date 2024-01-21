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
    glass2.style.backgroundColor = "#5fa8f6"
    // firstDrinkbg.style.height = "88px"
    // firstDrink.innerText = "25%"
    firstDrinkbg.classList.toggle('expand');
    secondDrinkbg.classList.toggle('expand');
        
});

let glass3 = document.querySelector(".tres");

let thirdDrinkbg = document.querySelector(".thirdDrinkbg");
let thirdDrink = document.querySelector(".thirdDrink")
glass3.addEventListener('click', () => {
    bottleText.innerText = "1.25 L Remain";
    thirdDrink.style.color = "#0f46bb"
    glass3.style.backgroundColor = "#5fa8f6"
    // firstDrinkbg.style.height = "88px"
    // firstDrink.innerText = "25%"
    firstDrinkbg.classList.toggle('expand');
    secondDrinkbg.classList.toggle('expand');
    thirdDrinkbg.classList.toggle('expand');

        
});

let glass4 = document.querySelector(".quatro");

let fourthDrinkbg = document.querySelector(".fourthDrinkbg");
let fourthDrink = document.querySelector(".fourthDrink")
glass4.addEventListener('click', () => {
    bottleText.innerText = "1 L Remain";
    fourthDrink.style.color = "#0f46bb"
    glass4.style.backgroundColor = "#5fa8f6"
    bottleText.style.marginBottom = "100px"
    // firstDrinkbg.style.height = "88px"
    // firstDrink.innerText = "25%"
    // firstDrinkbg.classList.toggle('expand');
    fourthDrinkbg.classList.toggle('expand');
        
});


let glass5 = document.querySelector(".un")

let fifthDrinkbg = document.querySelector(".fifthDrinkbg");
let fifthDrink = document.querySelector(".fifthDrink")
glass5.addEventListener('click', () => {
    bottleText.innerText = "0.75 L Remain";
    fifthDrink.style.color = "#0f46bb"
    glass5.style.backgroundColor = "#5fa8f6"
    bottleText.style.marginBottom = "150px"
    // firstDrinkbg.style.height = "88px"
    // firstDrink.innerText = "25%"
    fifthDrinkbg.classList.toggle('expand');

        
});



let glass6 = document.querySelector(".deux")

let sixthDrinkbg = document.querySelector(".sixthDrinkbg");
let sixthDrink = document.querySelector(".sixthDrink")
glass6.addEventListener('click', () => {
    bottleText.innerText = "0.5 L Remain";
    sixthDrink.style.color = "#0f46bb"
    glass6.style.backgroundColor = "#5fa8f6"
    bottleText.style.marginBottom = "250px"
    // firstDrinkbg.style.height = "88px"
    // firstDrink.innerText = "25%"
    sixthDrinkbg.classList.toggle('expand');

        
});


let glass7 = document.querySelector(".trois")

let seventhDrinkbg = document.querySelector(".seventhDrinkbg");
let seventhDrink = document.querySelector(".seventhDrink")
glass7.addEventListener('click', () => {
    bottleText.innerText = "0.25 L Remain";
    seventhDrink.style.color = "#0f46bb"
    glass7.style.backgroundColor = "#5fa8f6"
    bottleText.style.marginBottom = "320px"
    // firstDrinkbg.style.height = "88px"
    // firstDrink.innerText = "25%"
    seventhDrinkbg.classList.toggle('expand');

        
});

let glass8 = document.querySelector(".quatre")

let eightDrinkbg = document.querySelector(".eightDrinkbg");
let eightDrink = document.querySelector(".eightDrink")
glass8.addEventListener('click', () => {
    bottleText.innerText = "";
    eightDrink.style.color = "#0f46bb"
    glass8.style.backgroundColor = "#5fa8f6"
   
    // firstDrinkbg.style.height = "88px"
    // firstDrink.innerText = "25%"
    eightDrinkbg.classList.toggle('expand');

        
});


