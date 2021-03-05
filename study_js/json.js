// 자바스크립트 10. JSON 개념 정리 와 활용방법 및 유용한 사이트 공유
//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';

console.log('this is json.js file');

// JSON
// JavaScript Object Notation
// 즉, 자바스크립트에서 Object.물건(데이터)을 나타내는 Notation.표기(저장방식)이다.
// 자바 스크립트에서 데이터를 저장하는 방식
// 데이터를 저장하거나 전송할 때 많이 사용되는 경량의 DATA 교환 형식
// Javascript에서 객체를 만들 때 사용하는 표현식을 의미한다.
// JSON 표현식은 사람과 기계 모두 이해하기 쉬우며 용량이 작아서, 최근에는 JSON이 XML을 대체해서 데이터 전송 등에 많이 사용한다.
// key, value로 이루어져 있음
// 프로그램 언어, 플랫폼에 상관없이 쓸수 있음

// JSON to Object (deserialize)
// JSON은 데이터 포맷일 뿐이며 어떠한 통신 방법도, 프로그래밍 문법도 아닌 단순히 데이터를 표시하는 표현 방법일 뿐이다.

// 1. Object to JSON(serialize)
console.log('---------------------------1. Object to JSON / 직렬화');
// stringfy(obj)

let json = JSON.stringify(true);
console.log(json);

// 오버 로딩 : 함수의 이름은 같으나 어떤 파라미터를 전달하냐에 따라 각각 다른 방식으로 호출이 가능

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol('id'), // json에 포함 X
    jump: function () {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit); // rabbit을 json으로 변환해라
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']); // rabbit에서 이름, 색상만 받아오시오
console.log(json);

console.log('--------------------------- 콜백함수 이용');

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // return value;
    return key === 'name' ? 'ellie' : value;1
});
console.log(json);

console.clear();
// 2. JSON to Object
console.log('---------------------------2. JSON to Object / parse');
// parse(json)

json = JSON.stringify(rabbit);
console.log(json);

console.log('---------------------------');

const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);

console.log('---------------------------');

rabbit.jump();
// obj.jump();

console.log('---------------------------rabbit.birthDate.getDate');
console.log(rabbit.birthDate.getDate());

console.log('---------------------------obj.birthDate.getDate');
console.log(obj.birthDate.getDate());

