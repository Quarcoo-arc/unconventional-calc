//Initialize result to 0.
let result = +(document.getElementById("input-number").value);

//Function for getting the user's input
function inputValue() {
    return parseInt(userInput.value);
}

//Initializing calculation
let calculation = null;

//Adding event listeners to the buttons
addBtn.addEventListener("click", calculate.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));
equalsBtn.addEventListener("click", ()=>{
    document.getElementById("input-number").value=0;
    outputResult(result, calculation);
});

function writeToLog(operator, initialResult, newOperand){
    calculation = `${initialResult} ${operator} ${newOperand}`;
    outputResult(result, calculation);
}

function calculate(operator) {
    let value = inputValue();
    let initialResult = result;
    let mathOp;
    if (operator==="ADD") {
        result = initialResult + +(value);
        mathOp="+";
    } else if (operator==="SUBTRACT") {
        result = initialResult - +(value);
        mathOp="-";
    } else if(operator==="MULTIPLY"){
        result = initialResult * +(value);
        mathOp="*";
    }else if (operator==="DIVIDE") {
        result = initialResult / +(value);
        mathOp="/";
    }
    writeToLog(mathOp, initialResult, value);
}

// function add() {
//     calculate("ADD");
// }

// function multiply() {
//     calculate("MULTIPLY");
// }

// function subtract() {
//     calculate("SUBTRACT");
// }

// function division() {
//     calculate("DIVIDE");   
// }

//Download this extension
//debugger for chrome