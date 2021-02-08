// 14강. 프로그래밍 포기하지 마세요(자바스크립트 함수 기본편)

//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';

console.log('this is function.js file');

// 1. 함수 선언 & 호출
console.log('1. 함수 선언 & 호출');
// 함수 선언(function declarations)
function doSomething() {
         // 함수명 - 변수명 규칙과 동일, Camel Case
    console.log('hello');
    // code
}

// 함수 호출
doSomething();

// 2. 값을 리턴하는 함수
console.log('2. 값을 리턴하는 함수');
// 함수 선언
function add(a, b) {
    const sum = a + b;
    return sum;
}

// 함수 호출
const result = add(1, 2);
console.log(result);

// 3. 언어 공부 방법
console.log('3. 언어 공부 방법');
// 한줄 한줄 console.log를 확인하면서 공부

// 4. 함수를 인자로 전달
console.log('4. 함수를 인자로 전달');

// 함수 선언
function doSomething_02(add_02) {
// doSomething이라는 함수에 add라는 함수를 받아와라
    console.log(add_02);
    const result = add_02(2, 3);
    console.log(result);
}

function add_02(a, b) {
    const sum = a + b;
    return sum;
}

// 함수 호출
doSomething_02(add_02); // add라는 함수 자체가 전달

// 5. 선언 & 호출 복습
console.log('5. 선언 & 호출 복습');
// 선언
// 1. 어떤 값을 전달 받아 올껀지 인자들을 정의
// 2. 코드 블럭 작성
// 3. 선언만 해놓으면 우리가 작성한 코드들은 수행되지 않는다.
// 4. 코드를 수행하려면 함수를 호출해야 한다.

// 호출
// 1. 함수를 호출 하기 위해서는 함수 이름 옆에 괄호를 이용하여 함수에서 정의된 인자값들을 호출 해야한다.
// 2. 함수의 이름자체는 함수를 가르키는 함수 자체가 된다.

// 6. 함수를 변수에 할당
console.log('6. 함수를 변수에 할당');

const addFun = add;
console.log(add);
addFun(1, 2);


// 드림코딩 강의 외 추가로 찾아본 내용
console.log('* 드림코딩 강의 외 추가로 찾아본 내용');
// 함수란? 일련된 공통의 작업을 처리하기 위해서 연관된 코드들을 모아 놓은 자료형 (function이라는 키워드 필요)
// 코드의 집합을 나타내는 자료형 : 코드의 집합이라고 부르는 이유? 중괄호 {..}내부에 코드를 넣기 때문에

// 함수의 형식
// function 함수명([인자...[,인자]]) {
//    코드
//    return 반환값
// }

// 함수 표현식 - var, let, const 변수 키워드 중에서 함수 표현식은 주로 const 키워드로 변수를 생성합니다.
// 함수는 한번 선언 후 내용이 변경되지 않는 경우가 많으므로 주로 const 사용
// 함수 표현식은 변수의 이름으로만 호출할수 있다.

// 변수 생성
const 함수 = function () {
    console.log('함수 내부의 코드입니다 .....1')
    console.log('함수 내부의 코드입니다 .....2')
    console.log('함수 내부의 코드입니다 .....3')
    console.log('')
}

// 함수 호출
함수() // 함수 호출, 여러 코드의 집합이 한번에 실행
함수() // 두번째 함수 호출, 코드 집합 재실행

// 출력
console.log(typeof 함수) // 함수의 자료형
console.log(함수) // 함수 출력
