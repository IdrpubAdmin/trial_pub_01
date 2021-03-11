//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';

console.log('this is callback-to-promise.js file');


// Callback Hell example
console.log('----------Callback Hell example');
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id); // 로그인이 잘 된다면 id전달
                } else {
                    reject(new Error('not found')); // 실패시 'not found'
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }

}

// Original code from Youtube course
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`)) // 출력
    .catch(console.log); // 수행중 문제가 생기면...

