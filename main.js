let operation = '';
let operationResult = 0;
let stack = ['0'];
initalize();
addClickEvents();


function initalize() {
    document.querySelector('#display').innerHTML = '0';
}


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


function onClick(arg) {
    let numbers = '0123456789';
    let operations = ['sum', 'sub', 'mul', 'div']
    let display = document.querySelector('#display');    

    if (numbers.includes(arg) && stack.length === 1) {
        if (stack[0] === '0') {
            stack[0] = arg;
        } else {
            stack[0] += arg;
        }
        display.innerHTML = stack[0];


    } else if (numbers.includes(arg) && stack.length === 3) {
        if (stack[2] === '0') {
            stack[2] = arg;
        } else {
            stack[2] += arg;
        }
        display.innerHTML = stack[2];


    } else if (numbers.includes(arg) && stack.length === 2) {
        stack[2] = '';
        stack[2] += arg;
        display.innerHTML = stack[2];

    
    } else if (operations.includes(arg) && stack.length === 1) {
        stack.push(arg);


    } else if (operations.includes(arg) && stack.length === 2) {
        operationResult = operate(+stack[0], +stack[0], stack[1]);
        stack.length = 0;
        stack.push(String(operationResult));
        stack.push(arg);
        display.innerHTML = stack[0];


    } else if (operations.includes(arg) && stack.length === 3) {
        operationResult = operate(+stack[0], +stack[2], stack[1]);
        stack.length = 0;
        stack.push(String(operationResult));
        stack.push(arg);
        display.innerHTML = stack[0];


    } else if (arg === 'eql' && stack.length === 3) {
        operationResult = operate(+stack[0], +stack[2], stack[1]);
        stack.length = 0;
        stack.push(String(operationResult));
        display.innerHTML = stack[0];

    
    } else if (arg === 'clr') {
        stack.length = 0;
        stack.push('0');
        display.innerHTML = stack[0];
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