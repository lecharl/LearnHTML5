// window.onload = () => {
//객체 선언
let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  let area = document.getElementById("area1");
  //객체 리터럴????
  let product = {
    // 'pName': "아이폰 12 미니", 특수문자나 공백이 없을 경우 작은따옴표는 없어도 된다.
    0: "배열 흉내",
    //0 이 아니라 문자 '0' 이다 ****
    pName: "아이폰 12 미니",
    price: 1000000,
    1: "배열 흉내1",
    brand: "삼성",
    brand: "애플", //중복 선언하게 되면 마지막에 선언된 속성이 덮어스게 된다.
    spec: ["OLED", "IOS15"],
  };

  console.log(product);

  area.innerHTML = `객체 선언 테스트<br>`;
  area.innerHTML += `객체명["속성명"]으로 접근하는 방법<br>`;
  area.innerHTML += `product["0"] : ${product["0"]}<br>`;
  area.innerHTML += `product[0] : ${product[0]}<br>`;
  area.innerHTML += `product[1] : ${product[1]}<br>`;
  // area.innerHTML += `product[pName] : ${product[pName]}<br>`; undefined****
  area.innerHTML += `product["pName"] : ${product["pName"]}<br>`;
  area.innerHTML += `product["brand"] : ${product["brand"]}<br>`;
  area.innerHTML += `product["spec"] : ${product["spec"]}<br>`;
  area.innerHTML += `product["spec"][0] : ${product["spec"][0]}<br>`;
  area.innerHTML += `product["spec"][1] : ${product["spec"][1]}<br><br>`;

  area.innerHTML += `객체명.속성명으로 접근하는 방법<br>`;
  // area.innerHTML += `product.0 : ${product."0"}`; ***반드시 위의 방식으로**
  area.innerHTML += `product.pName : ${product.pName}<br>`;
  area.innerHTML += `product.price : ${product.price}<br>`;
  area.innerHTML += `product.brand : ${product.brand}<br>`;
  area.innerHTML += `product.spec[0] : ${product.spec[0]}<br>`;
  area.innerHTML += `product.spec[1] : ${product.spec[1]}<br><br>`;

  let user = {
    "user name": "문인수",
    user_age: 20,
    "id!!": "ismoon",
  };

  area.innerHTML += `공백이나 특수문자가 속성명에 있는 경우 대괄호를 이용해서 값을 가져올 수 있다.<br>`;
  // area.innerHTML += `user.user name : ${user.user name}`;
  area.innerHTML += `user["user name"] : ${user["user name"]}<br>`;
  area.innerHTML += `user.user_age : ${user.user_age}<br>`;
  area.innerHTML += `user.["id!!"] : ${user["id!!"]}<br>`;
});

//객체의 메소드
let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
  let dog = {
    name: "백구",
    kind: "진돗개",
    eat: function (food) {
      //this를 명시적으로 꼭 써야한다***
      //객체 내부의 속성에 접근하기 위해서는 'this.속성명'으로 작성해야 한다.
      console.log(
        `${this.kind} 종류인 ${this.name}가(이) ${food}을(를) 먹고 있네요.`
      );
      console.log(
        `${this["kind"]} 종류인 ${this.name}가(이) ${food}을(를) 먹고 있네요.`
      );
    },
  };

  dog.eat("닭가슴살");
});

//객체와 반복문
let btn3 = document.getElementById("btn3");

btn3.addEventListener("click", () => {
  let game = {
    title: "크레이지 아케이드",
    price: 0,
    supportOS: ["win7", "win10"],
    service: true,
  };

  console.log(game);

  for (const key in game) {
    console.log(`key : ${key}, game[key] : ${game[key]}`);
    //key말고 다른이름으로 써도 된다. 어쨌든 객체의 속성을 가져온다는 것!
  }
});

//객체의 속성 추가 및 제거
let btn4 = document.getElementById("btn4");

btn4.addEventListener("click", () => {
  //빈 객체 선언
  let student = {};

  //객체의 속성 추가
  student.name = "홍길동";
  student.age = 20;
  student["job"] = "도둑";

  //객체에 메소드 추가
  student.whoAreyou = function () {
    let str = "";
    for (const key in this) {
      if (typeof this[key] !== "function") {
        str += `${key} : ${this[key]} `;
      }
    }
    return str;
  };

  console.log(student);
  console.log(student.whoAreyou());
  console.log("job" in student);

  delete student.job;
  // delete(student.job);

  console.log(student);
  console.log(student.whoAreyou());
  console.log("job" in student);
});

//객체 배열

let btn5 = document.getElementById("btn5");

btn5.addEventListener("click", () => {
  //배열을 사용하지 않을 경우
  let student1 = { name: "문인수", java: 100, oracle: 70 };
  let student2 = { name: "홍길동", java: 70, oracle: 10 };
  let student3 = { name: "백구", java: 100, oracle: 100 };
  let student4 = { name: "누렁이", java: 90, oracle: 90 };
  let student5 = { name: "이몽룡", java: 20, oracle: 20 };

  //배열 선언 및 초기화
  let students = [
    { name: "문인수", java: 100, oracle: 70 },
    { name: "홍길동", java: 70, oracle: 10 },
  ];

  //배열에 요소 추가
  students.push({ name: "백구", java: 100, oracle: 100 });
  students.push(student4);
  students.push(student5);

  //배열에 담겨있는 모든 객체에 메소드를 추가
  for (let i = 0; i < students.length; i++) {
    students[i].getSum = function () {
      return this.java + this.oracle;
    };

    students[i].getAvg = function () {
      return this.getSum() / 2;
    };
  }

  console.log(students);

  //모든 학생의 정보가 담긴 배열을 출력
  for (const index in students) {
    with (students[index]) {
      // console.log(students[index].name);
      console.log(`이름 : ${name}, 총점 : ${getSum()}, 평균 : ${getAvg()} `);
    }
  }
});

//생성자 함수
function Student(name, java, oracle) {
  //속성 정의
  this.name = name;
  this.java = java;
  this.oracle = oracle;

  //메소드 정의
  // this.getSum = functoin(){
  // 	return this.java + this.oracle;
  // };
  // this.getAvg = function () {
  // 	return this.getSum() / 2;
  // };
}

Student.prototype.getSum = function () {
  return this.java + this.oracle;
};
Student.prototype.getAvg = function () {
  return this.getSum() / 2;
};

let btn6 = document.getElementById("btn6");

btn6.addEventListener("click", () => {
  let student = new Student("문인수", 80, 80);
  let students = [];

  students.push(student);
  students.push(new Student("홍길동", 80, 60));
  students.push(new Student("백구", 100, 100));
  students.push(new Student("이몽룡", 40, 40));

  //생성자 함수로 만들어진 객체의 경우 해당 객체가 어떤 생성자 함수로 생성되었는지 instanceof연산자로 검사할 수 있다.
  console.log(student instanceof Student);
  console.log(students instanceof Student);
  console.log(students);

  //모든 학생의 정보가 담긴 배열을 출력(이름, 총점, 평균)
  for (const index in students) {
    console.log(
      `이름 : ${students[index].name}, 총점 : ${students[
        index
      ].getSum()}, 평균 : ${students[index].getAvg()} `
    );
  }
});

//캡슐화
function IdolGroup(n, m) {
  let name = n;
  let member = m;

  this.getGroupName = function () {
    return name;
  };

  this.getMembers = function () {
    return member;
  };

  this.getMemberCount = function () {
    return member.length;
  };

  this.setGroupName = function (n) {
    name = n;
  };

  this.setMembers = function (m) {
    member = m;
  };
}

let btn7 = document.getElementById("btn7");

btn7.addEventListener("click", () => {
  //생성자 함수를 이용해 객체를 생성
  let idol = new IdolGroup("에스파", ["윈터", "닝닝", "지젤", "카리나"]);

  console.log(idol);
  console.log(idol.getGroupName(), idol.getMembers(), idol.getMemberCount());

  idol.setGroupName("NCT127");
  idol.setMembers(["해찬", "재현", "정우", "도영", "마크"]);

  console.log(
    `그룹명 : ${idol.getGroupName()}, 멤버 : ${idol.getMembers()}, 멤버수 : ${idol.getMemberCount()}`
  );
});

// };
