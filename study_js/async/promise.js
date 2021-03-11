// 자바스크립트 12. 프로미스 개념부터 활용까지 JavaScript Promise |

//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';

console.log('this is promise.js file');
// Promise is a JavaScript object for asynchronous operation.
// js안에 내장되어있는 obj이다.
// 비동기적인것을 수행할때 콜백함수 대신에 쓰임

// State(상태): pending(수행중) -> fulfilled(완료) or rejected(파일을 찾을수 없음 or 네트워크 문제)
// Producer vs Consumer / 제공자 vs 소비자

// 1. Producer
console.log('------------------1. Producer');
// when new Promise is created, the executor runs automatically.
// 새로운 프로미스가 생성 될때는 우리가 생성한 executor가 바로 실행된다.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
        // 성공시 ellie
        // reject(new Error('no network'));
        // 실패시 no network
    }, 2000);
});

// 2. Consumers: then, catch, finally(최신 추가)
console.log('------------------2. Consumers: then, catch, finally');
promise //
    .then(value => {
    // then : 프로미스의 값이 정상적으로 수행이 된다면
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });

// 3. Promise chaining
console.log('------------------3. Promise chaining / promise 연결하기');
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
console.log('------------------4. Error Handling / 오류 처리하기');
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} =? 🥚`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen() //
    // .then(hen => getEgg(hen))
    // .then(egg => cook(egg))
    // .then(meal => console.log(meal));
    .then(getEgg)
    // .catch(error => {
    //     return '🥐';
    // })
    .then(cook)
    .then(console.log)
    .catch(console.log);