//--------------------------------------
//Conditionals 조건문
//prompt : message를 보여주고, value를 넣으라고 창을 띄운다. 아주 old old old....
// const age1 = parseInt(prompt("how old are you?"));
//타입은 string!!!!
// console.log(age1, parseInt(age1));
//즉 15를 입력하면 "15", 1dfgdfg를 입력하면 "1dfgdfg"
//parseInt(string) : string을 number로 바꿔줌 -> 문자를 걸러준다.

//isNaN() : 숫자인지(false) 아닌지(true) 체크하는 함수
// console.log(isNaN(age1));

/////
const age2 = parseInt(prompt("How old are you?"));
if(isNaN(age2) || age2 < 0){
	console.log("Please write a real positive number.");
} else if(age2 < 18){
	console.log("You are too young.");
} else if(age2 >= 18 && age2 <= 50){
	console.log("You can drink.");
}else if(age2 >50 && age2 <= 80){
	console.log("You should exercise.");
} else if(age2 === 100){
	console.log("wow you are wise");
} else if(age2 > 80){
	console.log("You can do whatever you want.");
}


//---------------------------------------
//Return
const age = 96;
function calculatorKrAge(ageOfForeigner){
	ageOfForeigner + 100;
	return ageOfForeigner + 2;
}

const krAge = calculatorKrAge(age);

console.log(krAge);

//--------------------------------------------
//function
function sayHello(nameOfPerson, age){
	console.log("Hello my name is "+nameOfPerson+ "and I am "+ age);
}
//(argument) : 인수, 매개변수

sayHello();
sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn");

function plus(a, b){
	console.log(a+b);
}
function divide(a, b){
	console.log(a/b);
}
plus("a", "b");
plus(8, 60);
divide(98, 20);

const player1 = {
	name: "nicole",
	sayHello: function(otherPersonsName) {
		console.log("hello "+otherPersonsName + " nice to meet you");
	},
	// function sH(oPN) {
	// 	console.log("hello "+oPN + " nice to meet you");
	// }
};

console.log(player1.name);
player1.sayHello("lynn");
player1.sayHello("nico");

const calculator = {
	// add(a, b){
	// 	console.log(a + b);
	// },
	add: function(a, b){
		return a + b;
		// console.log(a + b);
		// alert(a + b);
	},
	minus: function(a, b){
		return a - b;
		// console.log(a - b);
	},
	times: function(a, b){
		return a * b;
		// console.log(a* b);
	},
	divide: function(a, b){
		return a / b;
		// console.log(a / b);
	},
	power: function(a, b){
		return a ** b;
		console.log(a**b);	//3의 5제곱
	},
};

const plusResult = calculator.add(3, 5);
console.log(plusResult);

console.log(calculator.add(3, 5));
console.log(calculator.minus(3, 5));
console.log(calculator.times(3, 5));
console.log(calculator.divide(3, 5));
console.log(calculator.power(3, 5));
//----------------------------------------------
//Object
const player = {
	name: "nico", 	//property: value, ...
	points: 10,
	fat: true,
};
console.log(player);
console.log(player.name);
//consle는 Object, log()는 function?
console.log(player["name"]);
player.fat = false;
console.log(player);
//constant Object 전체가 하나의 값으로 바꾸려 할 때 에러가 난다.
//constant Object 안의 속성 하나가 바뀔 땐 상관없다.

//새 속성 추가도 가능**********
player.lastName = "potato";
console.log(player);

player.points += 15;
console.log(player.points);


//---------------------------------------------------
//Array 배열
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = ["mon", "tue", wed, thu, fri, sat];
const nonsense = [1, 2, "hello", false, null, true, undefined, "nicole"];

console.log(nonsense);
console.log(daysOfWeek);
//get item from Array
console.log(daysOfWeek[4]);

//add one more day to the Array
daysOfWeek.push("sun");
daysOfWeek.push(sun);	//자바의 list, stack, que와 비슷하다
console.log(daysOfWeek);



// --------------------------------
//타입 : boolean(true/false), undefined, null
// const, let, var

// const amIFat = false;
// const amIFat = true;
const amIFat = null; 	//defined
console.log(amIFat);
let something;	//undefined
console.log(something);
// undefined : 메모리 공간에 존재하는데, 값이 정의안됨, 주어지지 않음
// null : 메모리 공간에 존재하고 값이 주어졌는데, 그 값이 없음. 아무것도 없는 상태.
console.log(amIFat, something);

// console.log(54545454);
// console.log('"lalalalal"');

const a = 5;
const b = 2;
//const : 상수, 값을 바꾸지 않을 때, 절대 업데이트 안되겠구나, new
//보통, 항상 const****
let myName = "nico";
//let : 값을 바꿀 때, 어디선가 업데이트 되겠구나(업데이트 허용되어야 하는 변수). new
//가끔 let**
var Name = "lele"
//var : 업데이트 가능, 어떠한 규칙도 없음, old
//절대 var ㄴㄴㄴㄴㄴ
// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
myName = "nicolas"
console.log("hello " + myName);
// alert("hi");
