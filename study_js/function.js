// 자바스크립트 5. Arrow Function은 무엇인가? 함수의 선언과 표현

//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';
console.log('this is function.js file');
// Function
// - fundamental building block in the program / 프로그램을 구성하는 기본적인 빌딩 블럭
// - subprogram can be used multiple times / 서브 프로그램이라고도 불리며 여러번 재사용이 가능하다.
// - performs a task or calculates a value / 한가지의 과업이나 값을 계산하기 위해 쓰여짐
// input x -> FUNCTION f: -> output f(x)
// 자바스크립트 함수는 다른 함수 내에 중첩되어 정의될 수도 있다.

// 1. Function declaration
console.log('-----------------1. Function declaration / 함수의 정의');
// function name(param1, param2) { body... return; }
//   키워드 함수이름 (매개변수 나열)   함수안에 기본적인 로직... 리턴;
// one function === one thing / 중요! 하나의 함수는 한가지의 일만 하도록 만들어야 한다.
// naming: doSomething, command, verb / 함수이름 규칙 / 동작이나 명령이 나타나도록 짓는다.
// e.g. createCardAndPoint -> createCard, createPoint / 세분화 해서 이름 짓기
// function is object in JS / function은 object이기 때문에 변수에 할당할수도 있고 parameter로 전달이되고 함수를 리턴할수도 있다.
// 함수의 구성요소
// 1. 함수의 이름 : 함수를 구분하는 식별자(identifier)이다.
// 2. 괄호 안에 쉼표(,)로 구분되는 함수의 매개변수(parameter) : 함수를 호출할때 인수로 전달된 값을 함수 내부에서 사용할수 있게 해주는 변수
// 3. 중괄호({})로 둘러싸인 자바스크립트 실행문
// 함수 문법
// function 함수이름(매개변수1, 매개변수2,...) {

    //함수가 호출되었을 때 실행하고자 하는 실행문;

//}

function printHello() {
// 키워드  함수이름
   console.log('Hello');
   // Hello출력
}
printHello(); // 즉, printHello란 함수를 호출하면 문자 'Hello'를 출력하게 됨
// 실무에서는 'Hello'란 글자 밖에 출력이 안되기 때문에 실용성 떨어짐

function log(message) {
    // 파라미터로 메세지를 전달
    console.log(message);
}
// 내가 원하는 메세지를 적으면 얼마든지 출력가능
log('Hello@');
log(1234); // 타입이 구분되지 않고 문자로 변환되어 출력됨
log('지금은 자바스크립트, 함수편을 보고 계십니다!')
// 실무에서는 타입이 구분되는 TypeScript를 더 많이 선호함

function hello1() {
    console.log('hello1');
}
console.log(hello1, typeof hello1); // 함수도 객체 중의 한 종류이다.

// 2. Parameters
console.log('-----------------2. Parameters / 매개변수');
// premitive parameters: passed by value / premitive : 메모리에 값이 그대로 저장 -> value 전달
// object parameters: passed by reference / object : 메모리에 레퍼런스가 저장 -> reference 전달
function changeName(obj) {
    obj.name = 'coder';
}
// changeName function : 이름을 coder로 변경

const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
console.log('-----------------3. Default parameters (added in ES6)');
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
console.log('-----------------4. Rest parameters (added in ES6)');
function printAll(...args) { // 현재 3개의 값이 담겨져 있는 배열 형태
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) { // 'args'에 있는 값이 'arg'로 하나씩 넘어감
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg)); // 더 간단히 사용하려면 'forEach'사용 - 나중에 배열에서 더 자세히 알게됨!
}
printAll('dream', 'coding', 'ellie'); // 인자 총 3개를 전달

// 5. Local scope
console.log('-----------------5. Local scope : 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.');
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //error
    // return undefined; / 리턴타입이 없는 것은 return undefined;이 들어간것과 똑같다. / 생략 가능
}
printMessage();

// 6. Return a value
console.log('-----------------6. Return a value');
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit / 리턴은 최대한 빨리하고 그 뒤에 필요한 조건을 넣어줘라.
console.log('-----------------7. Early return, early exit');
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
console.log('-----------------2-1. Function expression');
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.

// const print = function print() { // 이름이 있는 함수 : named function
//     console.log('print');
// };

const print = function () { // 함수를 선언함과 동시에 'print'라는 변수 선언
    // anonymous function : 이름없는 함수를 'anonymous function'이라고 칭함
    console.log('print');
};
print(); // 함수 호출
const printAgain = print; // 'print' 함수 호출
printAgain();
const sumAgain = sum; // 'sum' 함수 호출
console.log(sumAgain(1, 3));

// function expression : 할당 된 다음부터 호출이 가능
// 즉, 선언하기 전에 함수 호출시 에러!

// function declaration(hoisted) : 함수가 선언되기전에 호출 가능

// 2. Callback function using function expression
console.log('-----------------2-2. Callback function using function expression');
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes(); // 정답이 'love you'일 경우에만 'printYes'라는 콜백함수 호출
    } else {
        printNo(); // 정답이 'love you'가 아닐경우 경우에만 'printNo'라는 콜백함수 호출
    }
}
// anonymous function / 이름이 없는 함수
const printYes = function () {
    console.log('yes!');
};

// named function / 이름이 지정된 함수
// better debugging in debugger's stack traces / 디버깅할때 이름이 지정된 함수를 씀
// recursions
const printNo = function print() {
    console.log('no!');
    // print(); // recursions / 함수안에서 자기 함수를 부르는 것 / 프로그램이 죽을수도 있으니 함부로 사용 X
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function / 함수를 간결히!
console.log('-----------------2-3. Arrow function  => ');
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

// Arrow function : function, {}삭제
const simplePrint = () => console.log('simplePrint!');

// const add = function (a, b) {
//   return a + b;
// };
const add = (a, b) => a + b;

const simpleMultiply = (a, b) => { // 블럭이 필요한경우 다음과 같이 처리
    // do something more
    return a * b; // return 키워드를 이용해서 값을 리턴
};

// IIFE: Immediately Invoked Function Expression
// 함수를 선언함과 동시에 호출 / 최근에는 잘 사용 X
console.log('-----------------2-4. IIFE ');
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time❤️
console.log('Fun quiz time❤');
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('오류입니다. 다시입력하세요.');
    }
}
console.log(calculate('add', 2, 3));
console.log(calculate('substract', 2, 3));
console.log(calculate('divide', 2, 3));
console.log(calculate('multiply', 2, 3));
console.log(calculate('remainder', 2, 3));
console.log(calculate('123', 2, 3));
