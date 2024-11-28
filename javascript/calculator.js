let numbers = [];
let operators = [];

function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
    numbers.push(number);
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    display.value += operator;
    operators.push(operator);
}

function clearDisplay() {
    document.getElementById('display').value = '';
    numbers = [];
    operators = [];
}

function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;
    let result;
    try {
        result = eval(expression);
        clearDisplay();
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
