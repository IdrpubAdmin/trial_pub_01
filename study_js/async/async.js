// 자바스크립트 13. 비동기의 꽃 JavaScript async 와 await 그리고 유용한 Promise APIs
//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';

console.log('this is async.js file');

// async & await
// clear style of using promise :)

// 1. async
console.log('--------------------------- 1. async');

//     function fetchUser() {
//         return new Promise((resolve, reject) => {
            // do network reqeust in 10 secs....
//             resolve('ellie');
//         });
// }

async function fetchUser() {
    // 함수앞에 async라는 키워드를 붙여 간단히 promise작성
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
// 콜백함수 then 이용
console.log(user);

// 2. await ✨
console.log('--------------------------- 2. await ✨'); // async가 붙은 함수 안에서만 쓸수 있음
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


// 3. useful APIs
console.log('--------------------------- 3. useful APIs');
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits =>
        fruits.join(' + ')
        // join : 배열을 스트링으로 묶는것
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    // 첫번째 과일 받아오기
    return Promise.race([getApple(), getBanana()]);
            // API race:배열에 전달된 프로미스 중에서 가장먼저 값을 리턴하는 아이만 전달
}

pickOnlyOne().then(console.log);
