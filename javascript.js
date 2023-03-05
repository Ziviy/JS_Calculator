function add(num1, num2) {
    if (lastResult != 0)
        num1 = lastResult;
    console.log("NUM1 is " + num1 + " NUM2 is " + num2);
    lastResult = parseInt(num1) + parseInt(num2);
    console.log("Sum is " + lastResult);
    refreshDisplay();

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
        case "+":
            
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
            break;
        default:
            console.log("ERROR");
    }
}

// Обновить дисплей после выполнения вычисления
function refreshDisplay() {
    lastResultDisplay.innerText = displayValue  + " =";

    displayValue = lastResult;

    display.innerText = displayValue;
    num1 = 0;
    num2 = 0;
    lastSymbol = "";
}

function updateDisplay() {
    displayValue += lastSymbol;
    display.innerText = displayValue;
}

let lastSymbol;
let num1 = "";
let num2 = "";
let operator = "";
let lastResult = 0;
let displayValue = "";
function handleClick(e) {
    lastSymbol = e.target.innerText;
    
    if (isNaN(lastSymbol)) {
        //console.log("Not a number");
        if (lastSymbol == "=") {
            //console.log("operator: " + operator);
            operate(operator,num1,num2);
        }
        else {
            if (lastResult != 0)
                lastResultDisplay.innerText = "";
            operator = lastSymbol;
            lastSymbol = " " + operator + " ";
            updateDisplay();
            // displayValue += lastSymbol;
            // display.innerText = displayValue;
        }
    }
    else {
        //console.log("Number");
        if (operator == "" && lastResult == 0) {
            updateDisplay();
            num1 += lastSymbol;
            console.log("num1 " + num1);
        }
        else {
            
            updateDisplay();
            num2 += lastSymbol;
            console.log("num2 " + num2);
        }

    }
}
const display = document.querySelector(".typing");
const lastResultDisplay = document.querySelector(".last-result")

const buttons = document.querySelectorAll("button");
buttons.forEach((element) => {
    element.addEventListener('click', handleClick);
});