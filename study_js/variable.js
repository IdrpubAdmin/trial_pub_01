// 3강. 자바스크립트 3. 데이터타입, data types, let vs var, hoisting | 프론트엔드 개발자 입문편 (JavaScript ES5+)

//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';

console.log('this is variable.js file');


// 2. Variable, rw(read/write)
// let (added in ES6) - ES6에서 추가됨
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));

// 2. 변수 Variable
console.log('-----------------2. 변수 Variable');
// let ES6에서 추가
// let name = 'elle';
// console.log(name);
// name = 'hello';
// console.log(name);

// Block scope - 괄호 안에서만 동작
console.log('* Block scope *');
{
    let name = 'elle';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);

// global scope - 괄호 밖에서도 동작, 어플리케이션 시작부터 끝까지 메모리에 탑제되어 있기 때문에 최소한으로 쓰는것이 좋음
console.log('* global scope *');
let globalName = 'globalname';
{
    let name = 'elle';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(globalName);

console.log('* var *');
// let 이전에는 var를 사용(don't ever use this!)
// var hoisting(끌어 올려주다) - 어디에 선언한지 상관없이 선언을 제일위로 끌어 올린다.
// 즉, var는 값을 선언하기도 전에 출력 가능(비정상)
// block scope이 적용 X, 규모가 큰 프로젝트에서는 버그와 같이 에러사항으로 나올수 있음.
{
    age = 4;
    var age;
}
console.log(age);

// 이런 이유로 인해 let을 사용해야한다.
// let - js에서 변수를 선언할수 있는 딱 하나의 키워드

// ES6의 브라우저 호환성
console.log('* 브라우저 호환성 *');
// IE는 지원 안되는 부분이 있으므로 일단, BABEL을 이용하여 ES6이상으로 개발하고 최종적으로 배포시 ES5로 내려서 진행한다.

// 3. Contants
console.log('-----------------3. Contants');
// 값이 한번 할당되면 절대 변하지 않는다.
// Immutable : 값이 변경되지 않는다(contants)
// Mutable : 값이 변경될수 있는 것(let)
// 장점 : 보안 강화, 다른 개발자가 코드를 변경 했을때도 실수를 방지할수 있음
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInweek = 7;
const maxNumber = 5;

// 4. Variable types = 데이터 타입, 메모리의 값이 저장되는 방법
console.log('-----------------4. Variable types');
//  4-1) primitive type
//  single item: number, string, boolean, null, undefined, symbol
//  더 이상 값을 나눌수 없는 한가지 아이템, 값 자체가 메모리에 저장됨

//  4-2) object type
//  box container - single item들을 한 박스로 묶어서 관리
//  크기가 커서 메모리에 한번에 저장 X 즉, variable가 가르키는 ref레퍼런스가 저장된다.
// function, first-class function

// js안에서 숫자관련 타입은 number로 통용됨!
console.log('* number *');
const count = 17; // 정수
const size = 17.1; // 소수점
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// 특별한 숫자의 값
const infinity = 1 / 0;  // 숫자를 0으로 나눔, 무한대
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2; // 숫자가 아닌값
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt - 최근에 추가된 type(아직은 크롬, 파이어폭스만 지원)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
console.log('* string *');
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan; // 일반 string + 다른 변수 / + 기호를 이용해서 붙일수 있음
console.log(`value: ${greeting}, type: ${typeof greeting}`); // 백틱을 이용하면 더 간결하게 코드를 작성고 표현할수 있음 / 스페이싱과 문자열도 간결히 표현 가능
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
// 백틱 없이 + 기호를 사용하여 코드를 작성한다면 아래와 같이 번거럽고 길어진다.
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean / 참과 거짓
console.log('* boolean *');
// false: 0, null, undefined, NaN, '' / false로 간주되어지는 값 / '' : 비어있는 string
// true: any other value / false를 제외한 값은 true로 간주됨
const canRead = true;
const test = 3 < 1; // false // 거짓의 값을 할당 주어서 false값을 입력
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
console.log('* null *');
let nothing = null; // 비어있는 아무것도 아닌 값이라고 지정
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
console.log('* undefined *');
let x; // 아무런 값이 할당 되어 있지 않은상태 // let x = undefined;과 같은 의미
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects / 객체애 대한 고유한 식별자
console.log('* symbol *');
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // 심볼은 동일한 string을 작성했어도 각각 다른 값을 가짐
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id'); // string이 똑같다면 동일한 심볼을 만들고 싶을떄 'for'를 사용
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// 심볼은 바로 출력하면 error가 난다. 항상 '.description'을 이용하여 스트링으로 변환 후 출력해야함.

// 5. Dynamic typing: dynamically typed language(동적으로 유형화된 언어) - 프로그래밍이 동작할때 할당된 값에 따라서 type이 변경될수 있음
console.log('-----------------5. Dynamic typing');
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));

// TS : js위에 type이 올려진 언어, 실시간으로 볼수 X

// object, real-life object, data structure
console.log('-----------------object');
const ellie = { name: 'ellie', age: 20 }; // const로 지정이 되어있어서 한번 할당된 오브젝트는 다른 오브젝트로 변경 불가
ellie.age = 21; // 세부 변수에 별도 지정하여 변경은 가능