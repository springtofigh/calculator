// VARIABLES
let displayBox = document.querySelector(".display");
let list = document.querySelectorAll(".show-display");


// SHOW NUMBER FUNCTION
function showDisplay(event) {

    const x = event.target.innerText
    if (displayBox.innerHTML == 0) {
        return displayBox.innerHTML = x;
    }
    let limit = displayBox.innerText; 
    if (limit.length > 9 ) {
        
    }
    return displayBox.innerHTML += x;
}

// RESULT FUNCTION
function calculate() {
    let resulte = displayBox.innerText;
    displayBox.innerText = eval(resulte);
}

// CLEAR ALL NUMBERS
function allClear() {
    displayBox.innerText = 0;
}

// ONE BY ONE CLEAR NUMBER 
function clear() {
    let text = displayBox.innerText;
    if (text.length === 1) {
        displayBox.innerText = 0;
    } else {
        displayBox.innerText = text.substring(0 , text.length - 1)
    }
}

// EVENTS
document.querySelector(".all-clear").addEventListener("click" , allClear);
document.querySelector(".clear-list").addEventListener("click" , clear);
document.querySelector(".calculate").addEventListener("click" , calculate);
list.forEach(item =>{
    item.addEventListener("click",showDisplay)
})