"use strict";

/*
Function
- fundamental building block in the program
- subprogram can be used multiplie times
- performs a task or calculate a value

1. Function declaration
function name(param1, param2){
	body ....
	return ;
}

- one function === one thing
- naming : doSomething, command, verb
- function is object in JS
*/

function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("hellooooo");
log(123);
console.log("-----------------------------");

/*
2. Parameters
primitive parameters : passed by value
object parameters : passed by reference
참조 형태로
*/
function changeName(obj) {
  obj.name = "coder";
}
const ellie2 = {
  name: "ellie",
};
// changeName("nico");
changeName(ellie2);
console.log(ellie2);
console.log("----------------------------");

/*
3. Default parameters (added in ES6)
parameter = 'unknown'
*/
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("hihihi nicoco");
console.log("---------------------------");

/*
4. Rest parameters (added in ES6)
parameter = ...args
- 배열 형태로
*/
function printAll(...args) {
  //배열에 있는 모든 요소들을 출력하는 방법 1
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  //방법2 : forof
  for (const arg of args) {
    console.log(arg);
  }
  //방법3 : forEach()
  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");
console.log("-------------------------------");

/*
5. Local scope
*/
let globalMessage = "global"; //global variable
function printMessage() {
  let message = "hello";
  console.log(message); //local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  // console.log(childMessage);
  return undefined; //이건 생략 가능
}
printMessage();
// console.log(message);	지역변수라 밖에서 못 부름
console.log("-------------------------------");

//6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`result: ${result}`);
console.log(`sum: ${sum(1, 2)}`);
console.log("-------------------------------");

//7. Early return, early exit
//bad
function badUpgradUser(user) {
  //조건이 맞을 때
  if (user.point > 10) {
    //long upgrade logic...
  }
}
//가독성이 떨어진다.

//good
function goodUpgradeUser(user) {
  //***조건이 맞지 않을 때 빨리 리턴하도록
  //조건이 맞지 않은 경우, 값이 -1이거나 undefined 인 경우
  if (user.point <= 10) {
    return;
  }
  //long upgrade logic...
}

//------------------------------------------------
/*
8. Function expression
- a function declaration can be called earlier than it is defined. (hoisted)
: 선언보다 호출을 먼저 해도 된다.
- a function expression is created when the excution reaches it.
*/
//anonymous function
const print = function () {
  console.log("print");
};
//***할당된 변수에 `()`를 붙이면 함수처럼 사용할 수 있다.
print();
//재할당 시 재할당된 **변수의 값엔 `()`를 붙이지 않기**
const printAgain = print;
printAgain();
const sumAgain = sum;
sumAgain();
console.log(sumAgain(1, 3));
console.log("----------------------------------");

//9. Callback function using function expression
//함수 호출을 사용하는 함수?
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

//anonymous function
const printYes = function () {
  console.log("yes!");
};

//named function
//better debugging in debugger's stack traces
const printNo = function prints() {
  console.log("no!");
  // prints() recursions
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

//Arrow function
//always anonymous
const simplePrint = () => {
  console.log("simplerPrint!");
};
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  //do something more
  return a * b;
};

//IIFE : Immediately Invoked Function Expression
//선언과 동시에 호출
(function hello() {
  console.log("IIFE");
})();
//함수를 `(...)`로 묶고 바로 `()`를 붙이면 된다.

/*
Quiz time
function calculate(command, a, b)
command : add, substract, divide, multiply, remainder
*/

const resultCal = function calculate(command, a, b) {
  if (command === "add") {
    add(a, b);
  } else if (command === "substract") {
    substract(a, b);
  } else if (command === "multiply") {
    multiply(a, b);
  } else remainder(a, b);
};

const substract = (a, b) => {
  a - b;
};
const multiply = (a, b) => {
  a * b;
};
const remainder = (a, b) => {
  a % b;
};

function calculateEllie(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command");
  }
}
