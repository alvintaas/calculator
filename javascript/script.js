// const numberButtons = document.querySelectorAll("[data-number]");
// const operationButtons = document.querySelectorAll("[data-operation]");
// const equalsButton = document.querySelector("[data-equals]");
// const deleteButton = document.querySelector("[data-delete]");
// const allClearButton = document.querySelector("[data-all-clear]");
// const previousOperandTextElement = document.querySelector(
//   "[data-previous-operand]"
// );
// const currentOperandTextElement = document.querySelector(
//   "[data-current-operand]"
// );

// class Calculator {
//   constructor(previousOperandTextElement, currentOperandTextElement) {
//     this.previousOperandTextElement = previousOperandTextElement;
//     this.currentOperandTextElement = currentOperandTextElement;
//     this.clear();
//   }

//   clear() {
//     this.currentOperand = "";
//     this.previousOperand = "";
//     this.operation = undefined;
//   }

//   delete() {}

//   appendNumber(number) {
//     if (number === "." && this.currentOperand.includes(".")) return;
//     this.currentOperand = this.currentOperand.toString() + number.toString();
//   }

//   chooseOperation(operation) {}

//   compute() {}

//   updateDisplay() {}
// }

// numberButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     calculator.appendNumber(button.innerText);
//     calculator.updateDisplay();
//   });
// });

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

let number = 1;

let calculation = "";

function test() {
  console.log("HELLO WORLD");
  number++;
  console.log(number);
}

function addNumber(number) {
  console.log(number);
  console.log("before", calculation);
  calculation = `${calculation} ${number}`;
  console.log(calculation);
  document.getElementById("myText").innerHTML = calculation;
}

function equals() {
  console.log(eval(calculation));
  document.getElementById("myText").innerHTML = eval(calculation);
}
