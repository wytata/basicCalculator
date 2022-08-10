function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Divide by Zero";
    }
    return a / b;
}

function operate(a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

let first;
let second;
let result;
let operation = ""

const screen = document.querySelector('#screen')

const numbers = document.querySelectorAll('button.number')

for (let element of numbers) {
    element.addEventListener('click', () => {
        screen.textContent += element.textContent
    })
}

const clearBtn = document.querySelector('#clear')

clearBtn.addEventListener('click', () => {
    screen.textContent = ""
    first = undefined;
    second = undefined;
    operation = undefined;
    result = undefined;
})

const operations = document.querySelectorAll('button.operation')

for (let element of operations) {
    element.addEventListener('click', () => {
        screen.textContent += " " + element.textContent + " "
    })
}

const decimal = document.querySelector('#decimal')

decimal.addEventListener('click', () => {
    screen.textContent += "."
})

const equalSign = document.querySelector('#equal')

equalSign.addEventListener('click', () => {
    let screenList = screen.textContent.trim().split(" ")
    while (screenList.length > 1) {
        console.log(screenList)
        result = operate(parseFloat(screenList[0]), parseFloat(screenList[2]), screenList[1])
        screenList = screenList.slice(2)
    }
    screen.textContent = result;
    operation = undefined
    first = undefined
    second = undefined
    result = undefined
})