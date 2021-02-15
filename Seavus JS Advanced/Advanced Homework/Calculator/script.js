let numberBtns = document.querySelectorAll("#number");
let operandBtns = document.querySelectorAll("#operand");
let equalsBtn = document.getElementById("equals");
let deleteBtn = document.getElementById("delete-btn");
let clearBtn = document.getElementById("clear-btn");
let result = document.getElementById("result");
let errorBox = document.getElementById("message");
let negateBtn = document.getElementById("negate");
let isolateLength = 0;

function calculateTwoNumbers(num1, num2, operand){
    switch (operand){
        case "+":
            return num1 + num2;
        case "×":
            return num1 * num2;
        case "-":
            return num1 - num2;
        case "÷":
            return num1 / num2;
        default: errorBox = `Error in calculation`; break;               
    }
}

function validateIfNumberPossible(validationNumber){
    if (result.innerText.slice(isolateLength-result.innerText.length) === "0"){
        if (result.innerText.length === 1 && validationNumber === "0"){
            errorBox.innerText = "What's the point :(";
            return true;
        }
        if (validationNumber === "0"){
            errorBox.innerText = "What's the point :(";
            return true;
        }
    }
    if (validateLength(result.innerText.slice(isolateLength-result.innerText.length).length) && result.innerText.length != isolateLength) return true;
    return false;
}

function validateLength(length){
    if (length > 11){
        errorBox.innerText = "The number will be too big. lower it or enter an operand/equals"
        return true;
    }
    return false;
}

function validateIfOperandPossible(){
    for (const operands of operandBtns){
        if (result.innerText.slice(-1) === operands.innerText){
            errorBox.innerText = `You can't have 2 operands next to eachother`;
            return true;
        }
        if (result.innerText.slice(1).includes(operands.innerText) || (result.innerText.includes(operands.innerText) && result.innerText[0] != "-")){
            errorBox.innerText = `Due to the complexity of a calculator, a single operation may be done at a time.. For now. Sorry`
            return true;
        }
    }
    return false;
}

function validateIfEqualsPossible(){
    if (isNaN(result.innerText.slice(-1))){
        errorBox.innerText = `You don't have a second number`
        return true;
    }
}

function addNumber(number){
    console.log(`${isolateLength} ${result.innerText.length} ${result.innerText.slice(isolateLength-result.innerText.length)}`);
    if (result.innerText.slice(isolateLength-result.innerText.length) === "0"){
        result.innerText = result.innerText.slice(0, -1) + number;
        return;
    }
    result.innerText += number;
}

function addOperand(operand){
    isolateLength = result.innerText.length + 1;
    result.innerText += operand;
}

function calculate(equation){
    let flag = false;
    if (equation[0] === "-"){
        flag = true;
        mainCalculate(equation.slice(1), flag);
        return;
    }
    flag = false;
    mainCalculate(equation, flag);
}

function mainCalculate(equation, flag){
    for (const operands of operandBtns){
        if (equation.includes(operands.innerText)){
            let numbers = equation.split(`${operands.innerText}`);
            let equationResult;

            if (flag) equationResult = calculateTwoNumbers(-parseInt(numbers[0]), parseInt(numbers[1]), operands.innerText);
            if (!flag) equationResult = calculateTwoNumbers(parseInt(numbers[0]), parseInt(numbers[1]), operands.innerText);

            if (validateResult(equationResult)) return;

            result.innerText = equationResult.toString();
        }
    }
}

function validateResult(equationResult){
    if (equationResult === Infinity || equationResult === -Infinity){
        errorBox.innerText = "Huge number, yes."
        return true;
    }
    if (equationResult > 1e+12){
        errorBox.innerText = `Keep the result below a trillion`;
        return true;
    }
    if (isNaN(equationResult)) return true;
    if (equationResult%1 != 0){
        errorBox.innerText = "Decimal result rejected"
        return true;
    }
    return false
}

function setMessageToDefault(){
    errorBox.innerText = `Your personal error box :D`;
}

numberBtns.forEach(button => {
    button.addEventListener("click", function(){
        if (validateIfNumberPossible(button.innerText)) return;
        addNumber(button.innerText);
        setMessageToDefault();
    });
});
operandBtns.forEach(button => {
    button.addEventListener("click", function(){
        if (validateIfOperandPossible(button.innerText)) return;
        addOperand(button.innerText);
        setMessageToDefault();
    });
});
clearBtn.addEventListener("click", function(){
    result.innerText = "0";
    isolateLength = 0;
    setMessageToDefault();
});
deleteBtn.addEventListener("click", function(){
    if (result.innerText.length === 1) result.innerText = "0";
    else result.innerText = result.innerText.slice(0, -1);
    if (result.innerText === "-") result.innerText = "0"
    setMessageToDefault();
});
equalsBtn.addEventListener("click", function(){
    setMessageToDefault();
    if (validateIfEqualsPossible()) return;
    calculate(result.innerText);
    isolateLength = 0;
});
negateBtn.addEventListener("click", function(){
    if (result.innerText === "0") return;
    if (result.innerText[0] === "-"){
        result.innerText = result.innerText.slice(1);
    }
    else result.innerText = "-" + result.innerText;
});