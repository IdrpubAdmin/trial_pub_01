// 자바스크립트 6. 클래스와 오브젝트의 차이점(class vs object), 객체지향 언어 클래스 정리
//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';

console.log('this is class.js file');

// Object-oriendted programming / 객체지향 프로그래밍
// 객체란 여러 속성을 하나의 변수에 저장할 수 있도록 해주는 데이터 타입으로 Key / Value Pair를 저장할 수 있는 구조이다.

// class: template / 예시 : 붕어빵을 만드는 틀
// object: instance of a class / class에 data를 넣어 만듬 / 예시 : 팥 붕어빵, 피자붕어빵, 크림 붕어빵 등 넣는 데이터에 따라 달라질수 있음
// JavaScript classes
//  - introduced in ES6 / ES6에 도입
//  - syntactical sugar over prototype-based inheritance

// class : 연관있는 데이터를 한데 묶어 놓은 컨테이너(속성과 동작이 종합적으로 묶여있는 것을 말함)
// data class: 동작없이 속성만 들어있는 경우도 있음

// 1. Class declarations
console.log('-----------------1. Class declarations/ class 선언');
class Person { // 사람이라는 키워드를 만듬
    // constructor
    constructor(name, age) { // constructor 생성자
        // fields
        this.name = name; // name에 전달된 데이터를 바로 할당해줌
        this.age = age;
    }
    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20); // 새로운 오브젝트를 만들땐 new를 붙여줌
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters / 사용자가 잘 못 입력하여도 오류가 나지 않도록 특정 부분은 프라이빗하게 작업
// 예제 : 선배의 커피머신 이야기
// 캡슐화 : 동전을 넣고 커피를 만드는 동작은 오픈하나 커피값이 -1가 되면 오류가 되므로 커피 갯수는 프라이빗하게 관리
console.log('-----------------2. Getter and setters');
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() { // get이라는 키워드를 이용하여 값을 리턴
        return this._age; // getter와 setter에서 쓰는 변수를 조금 다르게 만들어줘야함
    }
    set age(value) { // set이라는 키워드를 이용하여 값을 설정, set은 값을 설정하기때문에 value를 받아와야함
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
        // value의 값이 -라면 0을 쓰고 아니면 지정된 value를 쓰겠다.
    }
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private) / 최근에 추가된거라 아직 많이 사용X / safari에서도 지원 X
console.log('-----------------3. Fields (public, private)');
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
    publicField = 2;
    #privateField = 0; // class 내부 에서만 접근 가능, 클래스 외부에서 사용 X
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
console.log('-----------------4. Static properties and methods');
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); // class이름을 이용하여 호출
Article.printPublisher();

// 5. Inheritance
// 유지보수가 용이하다.
// 공통적인 분모를 편하게 적용할수 있음
// 오버라이딩 : 필요한 함수만 재 정의도 가능!!
console.log('-----------------5. Inheritance/ 상속과 다양성');
// 예시 : 도형
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`); // class 한곳에만 수정하면 아래 Rectangle, Triangle 적용
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {} // class shape에 있는 모든것들이 Rectangle에 포함
class Triangle extends Shape {// 오버라이딩 : 필요한 함수만 재 정의도 가능!!
    draw() {
        super.draw();
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log('-----------------6. Class checking: instanceOf');
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); // js에서 만든 모든 object class들은 js에 있는 object를 상속한것이다.
console.log(triangle.toString());
