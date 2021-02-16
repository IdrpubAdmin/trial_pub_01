// 자바스크립트 5. Arrow Function은 무엇인가? 함수의 선언과 표현

//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';
console.log('this is function.js file');
// Function
// - fundamental building block in the program / 프로그램을 구성하는 기본적인 빌딩 블럭
// - subprogram can be used multiple times / 서브 프로그램이라고도 불리며 여러번 재 사용이 가능하다.
// - performs a task or calculates a value / 한가지의 테스크나 값을 계산하기 위해 쓰여짐

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing / 중요! 하나의 함수는 한가지의 일만 하도록 만들어짐
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
