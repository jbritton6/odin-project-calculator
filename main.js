const sum = function(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
}

const mul = function(num1, num2) {
    return num1 * num2;
}

const div = function(num1, num2) {
    if (num2 === 0) {
        return "ERROR"
    } else {
        return num1 / num2;
    }
}

const operate = function(num1, num2, op) {
    if (op === 'sum') {
        return sum(num1, num2);

    } else if (op === 'sub') {
        return sub(num1, num2);

    } else if (op === 'mul') {
        return mul(num1, num2);

    } else if (op === 'div') {
        return div(num1, num2);
    }
};


function addClickEvents() {
    buttonIds = [
        'button-0', 'button-1', 'button-2', 'button-3', 'button-4', 
        'button-5', 'button-6', 'button-7', 'button-8', 'button-9',
        'button-sum', 'button-sub', 'button-mul', 'button-div',
        'button-eql', 'button-clr'
    ];
    for (let id of buttonIds) {
        document.querySelector(`#${id}`)
            .addEventListener('click', () => onClick(id.split('-')[1]));
    }
}

initalize();
addClickEvents();
let firstVal = 0;
let secondVal = 0;
let firstValSet = false;
let secondValSet = false;
let operation = '';
let operationResult = 0;
let clearNextClick = false;
let stack = [];

function initalize() {
    document.querySelector('#display').innerHTML = '0';
}

function onClick(arg) {
    let numbers = '0123456789';
    let operations = ['sum', 'sub', 'mul', 'div']
    let display = document.querySelector('#display');    

    if (clearNextClick) {
        display.innerHTML = '0';
        clearNextClick = false;
    }

    if (numbers.includes(arg)) {
        display.innerHTML += arg;
    }

    if (operations.includes(arg)) {
        if (stack.length === 0) {
            stack.push(Number(display.innerHTML));
            stack.push(arg);
            clearNextClick = true;

        } else if (stack.length === 2) {
            stack.push(Number(display.innerHTML));
            operationResult = operate(stack[0], stack[2], stack[1]);
            stack.length = 0;
            stack.push(operationResult);
            stack.push(arg);
            display.innerHTML = operationResult;
            clearNextClick = true;
        }
    }

}