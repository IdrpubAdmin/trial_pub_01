// 자바스크립트 4. 코딩의 기본 operator, if, for loop 코드리뷰 팁 | 프론트엔드 개발자 입문편 (JavaScript ES6)

//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';

console.log('this is operator.js file');

// 1. String concatenation
console.log('-----------------1. String concatenation');

console.log('my' + ' cat'); // 문자 + 문자
console.log('1' + 2); // 문자 + 숫자 = string(문자)로 변환
console.log(`string literals: 
'''''
1 + 2 = ${1 + 2}`); // `` 백틱을 이용하여 표기하면 문자를 그대로 표기할수 있다.(줄바꿈, 특수기호도 표기)
console.log("ellie's \nbook\tbook2"); // '\n' 세로 줄바꿈 '\t' 탭키

// 2. Numeric operators
console.log('-----------------2. Numeric operators / 산술연산자');
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder(나머지)
console.log(2 ** 3); // exponentiation(지수연산자/거듭제곱) // 2의 3승 = 2*2*2

// 3. Increment and decrement operators
console.log('-----------------3. Increment and decrement operators / 증가 및 감소 연산자');
let counter = 2;

const preIncrement = ++counter; // 바로 값을 +1로 업데이트
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; // counter의 값을 postIncrement에 먼저 할당 후 1을 증가 // 값을 할당을 한 후에 +1 업데이트
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
console.log('-----------------4. Assignment operators / 할당 연산자');
let x = 3;
let y = 6;
x += y; // x = x + y; // 반복되는 x생략
console.log(x);
x -= y;
console.log(x);
x *= y;
console.log(x);
x /= y;
console.log(x);

// 5. Comparison operators
console.log('-----------------5. Comparison operators / 비교 연산자');
console.log(10 < 6); // less than / 작거나
console.log(10 <= 6); // less than or equal / 작거나 같거나
console.log(10 > 6); // greater than / 크거나
console.log(10 >= 6); // greater than or equal / 크거나 같거나

// 6. Logical operators: || (or), && (and), ! (not)
console.log('-----------------6. Logical operators: || (or), && (and), ! (not) / 논리 연산자');
const value3 = false; // false
const value4 = 4 < 2; // false

// check 함수 : true를 리턴해줌
function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😱');
    }
    return true;
}

// || (or), finds the first truthy value
console.log(`or 1: ${value3 || value4 || check()}`); // or : 3개중에 1개라도 true가 있으면 true로 계산됨

const value1 = true; // true
const value2 = 4 < 2; // false

// || (or), 처음으로 true가 나오면 거기서 연산을 멈춘다.
console.log(`or 2: ${value1 || value2 || check()}`);
// 즉, value3에서 바로 연산을 멈춤.(check함수의 wasting time 노출 X)
// 가볍게 연산할수 있는 것으로 제일 앞에 위치해 놓는다.(필요없이 무겁게 연산하는 표현식은 제일 뒤로 배치)

// && (and), finds the first falsy value / and : 모든 값이 true여야 true로 리턴한다.
console.log(`and: ${value1 && value2 && check()}`);
// 즉, value2는 false이기 때문에 false로 값 리턴
// 처음 혹은 중간에 false가 나오면 그 뒤에부터는 계산 X -> false로 값 리턴
// and도 가벼운 계산부터 앞에 배치해 둔다.

// and : 간편하게 null 체크할때도 많이 쓰임!
// often used to compress long if-statement // 긴 if문을 압축하는데 자주 사용됨
// nullableObject && nullableObject.something // nullObject가 null이 아닐때만 Object에 something이라는 값을 받아옴
// if (nullableObjectbject != null) {
//     nullableObjectbject.something;
// }

// ! (not) : 값을 반대로 바꿔줌
console.log(!value1); // value1이 true이기 때문에 false로 바꿔줌

// 7. Equality : 변수 또는 값 간의 동등성 또는 차이를 판별하기 위해 사용(값은 true or false)
console.log('-----------------7. Equality / 비교연산자');
const stringFive = '5';
const numberFive = 5;

console.log('----------------- 비교연산자 > loose equality');
// == loose equality, with type conversion
console.log(stringFive == numberFive); // stringFive, numberFive 똑같음 = true
console.log(stringFive != numberFive); // stringFive, numberFive 같지 않음 = false

console.log('----------------- 비교연산자 > strict equality'); // 코딩시 가능한 strict equality 사용!
// === strict equality, no type conversion : type까지 체크하여 값 추출
console.log(stringFive === numberFive); // stringFive, numberFive 똑같으나 타입이 틀림 = false
console.log(stringFive !== numberFive); // stringFive, numberFive 타입이 틀림 = true

console.log('----------------- 비교연산자 > object equality by reference');
// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

console.log('----------------- 비교연산자 > equality - puzzler');
// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if (조건부 연산자)
// if, else if, else
console.log('-----------------8. Conditional operators: 조건부 연산자');
// name이 ellie가 맞다면 'Welcome, Ellie!'를 출력해라
const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}
// 또는, name이 coder라면 'You are amazing coder'를 출력해라
const name2 = 'coder';
if (name2 === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name2 === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}
// 또는, 아무것도 아니라면 'unknown'을 출력해라
const name3 = 'df';
if (name3 === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name3 === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ? : 간단한 조건문을 작성할때 사용, 너무 빈번하게 사용하면 가독성이 떨어지니 주의!
console.log('-----------------9. Ternary operator: ? / 삼항 연산자');
// condition ? value1 : value2;
console.log(name3 === 'ellie' ? 'yes' : 'no'); // name3이 ellie면 yes 아니면 no

// 10. Switch statement
console.log('-----------------10. Switch statement');
// use for multiple if checks / if, else를 자주 반복하게 되면 switch문을 사용해도 좋다.
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!'); // browser의 값이 IE면 go away!를 출력해라
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!'); // browser의 값이 Chrome or Firefox면 love you!를 출력해라
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
console.log('-----------------11. Loops');
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) { // i가 0보다 크니?
    console.log(`while: ${i}`); // i = 3이기 때문에 출력 > 0으로 갈때까지 반복
    i--; // i를 1감소
}

// do while loop, body code is executed first,
// then check the condition.
// 블럭을 실행한 다음에 조건이 맞는지 안맞는지 확인
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// 즉, 블럭을 먼저 실행하고 싶다면 'do while 사용' 조건문이 맞을때만 블럭을 실행하고 싶다면 'while' 사용

// for loop, for(begin; condition; step)
console.log('-----------------Loops > for loop');
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
// for loop : 1. begin은 딱 한번만 실행
// 2. 블럭을 실행하기 전에 condition이 맞는지 검사
// 3. 블럭을 다 실행하게 되면 step을 실행
// 4. 후에 condition, step만 안맞을때 까지 실행

for (let i = 3; i > 0; i = i - 2) { // let i = 3 : 블럭 안에 지역변수 선언
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue / break 루프를 완전히 끝냄,  continue 지금것은 멈추고 다음 스텝으로 넘어가기
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
console.log('-----------------Q1. 숫자를 0 - 10까지 짝수인 아이들만 프린트해보라');
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}
console.log('----------------- 실제사용');
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`q1. ${i}`);
    }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
console.log('-----------------Q2. 숫자 1-10까지 프린터 하되 숫자 8이 나오면 멈춰라');
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}
