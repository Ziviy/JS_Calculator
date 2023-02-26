function add(num1, num2) {
    if (lastResult == 0)
        return num1 + num2;
    else {
        num
    }
}

function substract(num1, num2) {
    return num1 - num2
}

function multiplt(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            add(num1,num2);
            break;
        case '-':
            substract(num1,num2);
            break;
        case '*':
            multiply(num1,num2);
            break;
        case '/':
            multiply(num1,num2);
            break
    }
}

function refreshDisplay() {
    display.innerText = lastResult;
    resultDisplay.innerText = displayValue;
    displayValue = "";
}

function updateDisplay() {
    display.innerText = lastResult;
    resultDisplay.innerText = displayValue;
}

let num1 = ""
let num2 = ""
let operator = ""
let lastResult = 0
let displayValue = ""
function handleClick(e) {
    lastSymbol = e.target.innerText;
    
    console.log(num1);
    if (isNaN(lastSymbol)) {
        console.log("Not a number");
        if (lastSymbol == "=") {
            lastResult = operate(operator,num1,num2);
        }
        else {
            operator = lastSymbol;
            updateDisplay();
        }
    }
    else {
        console.log("Number");
        displayValue += lastSymbol;
        display.innerText = displayValue;
        num1 = num1 + lastSymbol;
    }
}
const display = document.querySelector(".typing");
const resultDisplay = document.querySelector(".last-result")

const buttons = document.querySelectorAll("button");
buttons.forEach((element) => {
    element.addEventListener('click', handleClick);
});