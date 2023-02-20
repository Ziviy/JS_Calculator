function add(num1, num2) {
    return num1 + num2
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

const display = document.querySelector(".display");

const buttons = document.querySelectorAll("button");
buttons.forEach((element) => {
    element.addEventListener('click', (e) => {
        display.innerText += e.target.innerText;
    });
});