// 자바스크립트 8. 배열 제대로 알고 쓰자. 자바스크립트 배열 개념과 APIs 총정리 | 프론트엔드 개발자 입문편 (JavaScript ES6 )

//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';
console.log('this is array.js file');

// JavaScript === dynamically typed language
// 동적 언어

// Array🎉배열이란? 칸칸이 나뉘어 있는 자료구조

// 1. Declaration
console.log('--------------------------1. Declaration / 배열 선언');
const arr1 = new Array();
const arr2 = [1, 2]; // 대괄호를 이용하여 만들기, 더 흔하게 쓰이는 방법
// 총 길이가 2개인 배열이 만들어짐 0번째 : 1, 1번째 2

// 2. Index position
console.log('--------------------------2. Index position');
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length); // 길이
console.log(fruits[0]); // 사과 출력
console.log(fruits[1]); // 바나나 출력
console.log(fruits[2]); // 배열 밖에있는 것을 호출 / undefined
console.log(fruits[fruits.length -1]); // 배열의 마지막, 총길이에 -1

console.clear(); // 이전에 있는 로그들 전부 지우기
// 3. Looping over an array // 배열안에 있는 전체적인 데이터
console.log('--------------------------3. Looping over an array');
// print all fruits / 모든 과일을 출력해라
// a. for
console.log('--------------------------3-a. for');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for of
console.log('--------------------------3-b. for of');
for (let fruit of fruits) {
    console.log(fruit);
}
// c. forEach / 배열안에 들어있는 밸류들 마다 내가 전달한 함수를 출력
console.log('--------------------------3-c. forEach');
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy / 넣기, 빼기, 복사
console.log('--------------------------4. Addtion, deletion, copy');

// push: add an item to the end / 집어 넣기
// 아이템을 뒤로 하나씩 넣어줌
console.log('--------------------------4-1. push');
fruits.push('🍓', '🍑');
console.log(fruits);

// pop : remove an item from the end / 빼기
// 뒤에서 부터 아이템이 빠짐
console.log('--------------------------4-2. pop');
const poped = fruits.pop(); // 지워진 아이를 리턴받아 사용할수 있음.
fruits.pop(); // 뒤에 아이템 하나 빼기
fruits.pop(); // 뒤에 아이템 두개 빼기
console.log(fruits);

// unshift: add an item to the benigging
// 원하는 데이터를 앞에서 부터 넣어주기
console.log('--------------------------4-3. unshift');
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the benigging
// 앞에서 부터 데이터가 빠짐
console.log('--------------------------4-4. shift');
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// shift, unshift는 pop, push보다 느리다.
// 그렇기 때문에 가능한 pop, push를 사용해라라

// splice: remove an item by index position
// 아이템을 지정된 포지션에서 삭제
console.log('--------------------------4-5. splice');
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1); // 바나나만 지울께!
console.log(fruits);
// 몇번부터 지울지 선택, 몇개나 지울지 선택
// 만약 몇개를 지울지 선택하지 않는다면 선택한 번호부터 모두 지우게된다.
fruits.splice(1, 1, '🍏', '🍉');
console.log(fruits); // 1번째 칸에 1개만 지우고, 거기에 원하는 데이터를 넣어준다.
// fruits.splice(1, 0, '🍏', '🍉');
// 데이터를 지우지 않고 원하는 곳에 넣어주려면 데이터 갯수를 지정하는 곳에 0을 기재해준다.

// combine two arrays
// 두가지의 아이템을 묶기
console.log('--------------------------4-6. combine two arrays');
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // 기존에 있던 fruits와 새로 만든 newFruits가 합해짐.

console.clear();
// 5. Searching
// indexOf: find the index / 검사, 검색
// 배열안에 어떤 값이 몇번째 인덱스에 있는지 찾을때
console.log('--------------------------5. Searching');
console.log(fruits);
console.log(fruits.indexOf('🍏'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥')); // 들어있지 않는 값을 호출하면 '-1'을 호출

// includes // 배열에 수박이 들어있는지 체크
console.log('--------------------------includes');
console.log(fruits.includes('🍉')); // 수박이 들어있어서 true
console.log(fruits.includes('🥥')); // 코코넛이 없어서 false

console.clear();
// lastIndexOf
console.log('--------------------------lastIndexOf');
fruits.push('🍎'); // 똑같은 데이터 넣어주기
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 제일 처음 위치의 사과 index
console.log(fruits.lastIndexOf('🍎')); // 제일 마지막 위치의 사과 index

// 과제: 배열이 선언된 곳으로 가서 한번씩 읽어보기