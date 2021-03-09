// 자바스크립트 11. 비동기 처리의 시작 콜백 이해하기, 콜백 지옥 체험 😱
//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';

console.log('this is callback.js file');

// JavaScript is synchronous. / 자바스크립트는 동기적인 아이다.
// Execute the code block by orger after hoisting. / 호이스팅이 된 이후부터 코드가 순서대로 나온다.
// hoisting: var, function declaration / 변수, 함수선언들이 제일 위로 올라가는 것
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
console.log('----------Synchronous callback / 즉각적 반응 / 동기 콜백 ');
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
console.log('----------Asynchronous callback / 비동기 콜백 ');
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
console.log('----------Callback Hell example');
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }                        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);

// 콜백 체인의 문제점 : 가독성이 떨어짐 / 콜백 지옥~!!

