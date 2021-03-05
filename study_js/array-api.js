// 자바스크립트 9. 유용한 10가지 배열 함수들. Array APIs 총정리
//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';

console.log('this is array-api.js file');


// Q1. make a string out of an array
console.log('------------------------Q1.주어진 배열을 스트링으로 변환하시오. / 함수 join');
{
    const fruits = ['apple', 'banana', 'orange'];
                    // 3개의 아이템
    const result = fruits.join(',');
                        // 구분자
    console.log(result);
}

// Q2. make an array out of a string
console.log('------------------------Q2.주어지는 string을 array로 변환하시오. / split');
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',', 2);
                                // 필수:구분자, 몇번까지 받아올것인가
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
console.log('------------------------Q3. 주어진 배열을 거꾸로 만들기 / reverse');
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
                        // 아이템의 순서를 거꾸로 만들어 준다.
    console.log(result);
    console.log(array);
}

// Q4. make new array without the first two elements
console.log('------------------------Q4. 첫번째, 두번째를 제외한 나머지 세개가 들어있는 새로운 배열 만들기');

{    // 새로운 배열을 만들어야 하기 때문에 splice X
     // splice : 배열 자체를 수정
    const array = [1, 2, 3, 4, 5];
    const result = array.splice(0, 2);  // index 0부터 2개를 삭제
                     // 영역을 지정하면 그부분을 삭제 해주는 API
    console.log(result); // 삭제된 숫자 리턴
    console.log(array); // 새로운 배열 출력
}
console.log('------------------------ slice');
    // slice : 배열에서 원하는 부분만 리턴해서 받아옴
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5); // 2번부터 출력, 5번부터 배제(exclusive)

    console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
            // 이름, 나이, 수업등록 여부, 점수
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
// find : 콜백 함수를 만들어서 전달해야한다.
console.log('------------------------Q5. 점수가 90점인 학생을 찾아라 / find');
{
    const result = students.find((students) => students.score === 90); // 점수가 90점인 학생을 출력
                                 // 콜백 함수
    console.log(result);
}

// Q6. make an array of enrolled students
console.log('------------------------Q6. 학생들 중에 수업에 등록한(true) 학생만 골라서 출력 / filter');
{
    const result = students.filter((students) => students.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
console.log('------------------------Q7. 학생들의 배열에서 점수만 출력 / map');
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((students) => students.score); // 학생들의 점수를 받아온다.
    // const result = students.map((students) => students.score * 2); // 학생들의 점수에 2를 곱하여 받아온다.
    console.log(result);
}

console.clear();

    // Q8. check if there is a student with the score lower than 50
console.log('------------------------Q8. 학생들 중에 점수가 50점보다 낮은 학생이 있는지 확인 / some, every');
{
    const result = students.some((student) => student.score < 50); // 요소중 1개라도 이 조건을 충족하면 출력
    console.log(result);

    const result2 = students.every((student) => student.score < 50); // 모든 요소들이 이조건을 충족해야 출력
    console.log(result2);

    const result3 = !students.every((student) => student.score >= 50);
                 // ! 이 값을 반대로 출력              // 모든학생들의 점수가 50점보다 크거나 같거나
    console.log(result3);
}

console.clear();

// Q9. compute students' average score
console.log('------------------------Q9. 학생들의 평균점수를 구해와라 / reduce');
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
console.log('------------------------Q10. 학생들의 모든 점수를 문자로 변환해라');
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map(student => student.score)
        .filter(score => score >= 50)
        .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
console.log('------------------------보너스. 제일 낮은 점수부터 스트링으로 나열해라 /  sort');
{
    const result = students
        .map((student) => student.score)
        .sort((a, b)=> b - a)
        .join();
    console.log(result);

}



