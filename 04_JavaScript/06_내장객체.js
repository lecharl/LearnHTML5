// window.onload = () => {
//내장 객체
//1. Object 객체
let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  let obj1 = {};
  let obj2 = { name: "홍길동", height: 165 };
  let obj3 = new Object();

  console.log(obj1);
  console.log(obj2);
  console.log(obj3);

  console.log(obj1 instanceof Object);
  console.log(obj2 instanceof Object);
  console.log(obj3 instanceof Object);
  console.log("--------------------------------");

  //매개값으로 전달되는 속성을 가지고 있는지 확인하는 메소드
  console.log(obj2.hasOwnProperty("name"));
  console.log(obj2.hasOwnProperty("height"));
  console.log(obj2.hasOwnProperty("weight"));
});

//2. Number 객체
let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
  let area = document.getElementById("area2");
  let num1 = 3141592;
  let num2 = Number(3.141592);
  let num3 = new Number(3.141592);

  area.innerHTML = "Number 객체 <br><br>";
  area.innerHTML += `num1 : ${num1},	num1 instanceof Number : ${num1 instanceof Number}, typeof(num1) : ${typeof num1}<br>`;
  area.innerHTML += `num2 : ${num1},	num2 instanceof Number : ${num2 instanceof Number}, typeof(num2) : ${typeof num2}<br>`;
  area.innerHTML += `num3 : ${num1},	num3 instanceof Number : ${num3 instanceof Number}, typeof(num3) : ${typeof num3}<br><br>`;
	//new Number 생성자로 만들어졌기에 true

	area.innerHTML += `num1.toExponential() : ${num1.toExponential()}, typeof(num1) : ${typeof(num1.toExponential())}<br>`;
	//문자열로 반환
	area.innerHTML += `(3141592).toExponential() : ${(3141592).toExponential()}, typeof((3141592).toExponential()) : ${typeof ((3141592).toExponential())}<br><br>`;
	//괄호가 없으면 오류
	//괄호를 씌우면 -> Number객체로 wrapping 해줌

	area.innerHTML += `num2.toFixed(2) : ${num2.toFixed(2)}, typeof(num2.toFixed(2)) : ${typeof(num2.toFixed(2))}<br><br>`;

	area.innerHTML += `num3.toPrecision() : ${num3.toPrecision()}, ${typeof(num3.toPrecision())}<br>`;
	area.innerHTML += `num3.toPrecision(4) : ${num3.toPrecision(4)}, ${typeof(num3.toPrecision(4))}<br>`;
	area.innerHTML += `num3.toPrecision(1) : ${num3.toPrecision(1)}, ${typeof(num3.toPrecision(1))}<br>`;
	area.innerHTML += `num1.toPrecision(1) : ${num1.toPrecision(1)}, ${typeof(num1.toPrecision(1))}<br>`;
});

//String 객체
let btn3 = document.getElementById('btn3')
btn3.addEventListener('click', () => {
	let area = document.getElementById('area3');
	let str1 = 'javascript'
	let str2 = new String('javascript')

	area.innerHTML = `str1 : ${str1}, typeof(str1) : ${typeof str1}<br>`;
	area.innerHTML += `str2 : ${str2}, typeof(str2) : ${typeof str2}<br><br>`;

	area.innerHTML += `str1.bold() : ${str1.bold()}<br>`;
	area.innerHTML += `str1.italics() : ${str1.italics()}<br>`;
	area.innerHTML += `str1.fontcolor('red') : ${str1.fontcolor("red")}<br>`;
	area.innerHTML += `str1.link('https://www.naver.com') : ${str1.link("https://www.naver.com")}`;
})

//Date 객체
let btn4 = document.getElementById('btn4')
btn4.addEventListener('click', () => {
  let area = document.getElementById("area4");
  //Date 객체를 생성하는 방법
  let date1 = new Date();
  let date2 = new Date(1637667471216); //ms 기준
  let date3 = new Date("2021/11/23/20:19:30");
  let date4 = new Date("2021-11-23T20:19:30");
  let date5 = new Date(2021, 10, 23, 20, 24, 59); //두번째 월은 0부터 시작한다. 10-> 11월

  area.innerHTML = `date1 : ${date1}<br>`;
  area.innerHTML += `date2 : ${date2}<br>`;
  area.innerHTML += `date3 : ${date3}<br>`;
  area.innerHTML += `date4 : ${date4}<br>`;
  area.innerHTML += `date5 : ${date5}<br><br>`;

  //Date객체의 메소드 호출
  area.innerHTML += `date1.getFullYear() : ${date1.getFullYear()}<br>`;
  area.innerHTML += `date1.getMonth() + 1 : ${date1.getMonth() + 1}<br>`; //두번째 월은 0부터 시작한다. 10-> 11월
	area.innerHTML += `date1.getDate() : ${date1.getDate()}<br>`;
  area.innerHTML += `date1.getDay() : ${date1.getDay()}<br>`;	//0: 월요일 ~ 6: 토요일
	area.innerHTML += `date1.getMinutes() : ${date1.getMinutes()}<br>`;
	area.innerHTML += `date1.getSeconds() : ${date1.getSeconds()}<br>`;
	area.innerHTML += `date1.getMilliseconds() : ${date1.getMilliseconds()}<br><br>`;

	//1970년 1월 1일 00시를 기준으로 현재 시간에 대한 밀리세컨드 값을 반환한다.
	area.innerHTML += `date1.getTime() : ${date1.getTime()}<br>`;
	//표준시와 Date객체에 지정된 시간과 차이를 분 단위로 반환한다. (9시간 차이남)
	area.innerHTML += `date1.getTimezoneOffset() / 60 : ${date1.getTimezoneOffset() / 60}<br>`;
	area.innerHTML += `date1.toDateString() : ${date1.toDateString()}<br>`;
	area.innerHTML += `date1.toTimeString() : ${date1.toTimeString()}<br>`;
	area.innerHTML += `date1.toUTCString() : ${date1.toUTCString()}<br>`;
	area.innerHTML += `date1.toISOString() : ${date1.toISOString()}<br>`;
	area.innerHTML += `date1.toLocaleString() : ${date1.toLocaleString('en-US')}<br>`;
	area.innerHTML += `date1.toLocaleDateString() : ${date1.toLocaleDateString('en-US')}<br>`;
	area.innerHTML += `date1.toLocaleTimeString() : ${date1.toLocaleTimeString('en-US')}<br>`;
})

// }
