const add = function(num1, num2) {
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