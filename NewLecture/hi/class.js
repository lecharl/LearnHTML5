"use strict";
console.log("-----------------------------------");
/*
Object-oridented programming
class: template
object: instance of a class

JavaScript classes
- introduced in ES6
- syntactical sugar over prototype-based inheritance
*/

//1. Class declaration
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

//Object 생성
const ellie3 = new Person("ellie", 20);
console.log(ellie3.name);
console.log(ellie3.age);
ellie3.speak();
console.log("---------------------------------------");

//2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error("age cannot be negative");
    // }

    return (this._age = value < 0 ? 0 : value);
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);
console.log("---------------------------------------");

/*
3. Fields (public, private)
- 생성자를 쓰지 않고 사용하는 방법
- 아직 ㄴㄴ
*/
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
// console.log(experiment.privateField); //not found 에러
console.log("--------------------------------------");

/*
4. Static properties and methods
- class이름을 사용해야 한다.
- 들어오는 데이터에 상관없이 공통적으로 클래스에서 쓸 수 있는 거라면
- 아직 ㄴㄴ
*/
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
console.log(article2.publisher);
console.log(Article.publisher);
Article.printPublisher();
console.log("------------------------------");

//5. Inheritance
//a way for noe class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log("🔺");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rec = new Rectangle(20, 20, "blue");
rec.draw();
console.log(rec.getArea());
const tri = new Triangle(20, 20, "red");
tri.draw();
console.log(tri.getArea());
console.log("--------------------------------------------");

//6. Class checking: instanceof
//a instanceOf A : 클래스A로 만들어진 인스턴스냐
console.log(rec instanceof Rectangle);
console.log(tri instanceof Rectangle);
console.log(tri instanceof Triangle);
console.log(tri instanceof Shape);
console.log(tri instanceof Object);
console.log(tri.toString());
console.log(tri);
console.log("--------------------------------------------");

console.log(calculateEllie("remainder", 4, 2));
console.log("===============================================");
