// 자바스크립트 7. 오브젝트 넌 뭐니? | 프론트엔드 개발자 입문편 (JavaScript ES6)

//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';

console.log('this is object.js file');

// 1. Literals and properties
console.log('-----------------1. Literals and properties');
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; / obj는 키와 벨류의 집합체이다.

// 코드 작성이 번거롭다.
// const name = 'ellie'; // 변수 name 선언
// const age = 4; // 변수 age 선언
// print(name, age); // 이름과 나이를 파라미터로 전달
// function print(name, age) // 함수 정의 : 두가지 파라미터 받아오도록 작성
//     console.log(name);
//     console.log(age);
// }

// obj를 만드는 방법
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax / 객체 생성자

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4}; // js에서는 클래스가 없어도 바로 obj생성 가능
print(ellie); // ellie만 호출하면 되니 간편함

// 동적인 js
ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob); // undefined

// 2. Computed properties
console.log('-----------------2. Computed properties'); // 계산된 속성
// key should be always string
console.log(ellie.name); // 코딩할때 '.'을 이용하여 출력하는게 일반적!
console.log(ellie['name']); // obj안에 있는 변수를 '스트링' 형태로 접근 가능

ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
console.log('-----------------3. Property value shorthand');
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);

// 4. Constructor Function
console.log('-----------------4. Constructor Function');
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj) / 해당 obj안에 key가 있는지 확인
console.log('-----------------5. in operator: property existence check (key in obj)');
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random); // 정의하지 않는 것을 찾으면 undefined

// 6. for..in vs for..of
// for (key in obj)
console.log('-----------------6. for..in vs for..of');
console.clear(); // 이전에 키들이 다 지워짐
for (let key in ellie) { //ellie안에 있는 모든키를 받아옴
    console.log(key);
}

// for (value of iterable) / 배열 리스트
const array = [1, 2, 4, 5];
for (let value of array) {
    console.log(value);
}

// 7. Fun cloning
console.log('-----------------7. Fun cloning');
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user; // user안에 있는 ref를 user2에도 동일하게 넣어줌
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
console.log('-----------------another example');
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
