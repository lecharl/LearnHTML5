//1. 이벤트 모델의 종류
//1) 고전 이벤트 모델
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.onclick = function (event) {
  alert("btn1이 클릭되었습니다.");
  console.log(this); //클릭된 버튼 객체
  console.log(event.target);
};

btn2.onclick = (event) => {
  alert("btn2이 클릭되었습니다.");
  console.log(this); //애로우 펑션에선 window 객체!!
  console.log(event.target); //클릭된 버튼 객체
};

//3) 표준 이벤트 모델
let btn3 = document.getElementById("btn3");
// btn3.addEventListener("click", () => {});
btn3.addEventListener("click", clickEventHandler);
btn3.addEventListener("mouseenter", function (event) {
  // this.style.backgroundColor = "red";
  event.target.style.backgroundColor = "red";
});
btn3.addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "green";
});

function clickEventHandler() {
  alert("표준 이벤트 모델");
}

//2. 이벤트가 발생한 요소 객체에 접근하는 방법
//1) 고전 이벤트 방식
let btn4 = document.getElementById("btn4");

//익명함수 : 3가지 방법
// btn4.onclick = function (event) {
//   console.log(event); //PointerEvent
//   console.log(window.event);

//   console.log(event.target); //버튼 객체
//   console.log(window.event.target);
//   console.log(this);
// };

//애로우 펑션 : 2가지 방법
btn4.onclick = (event) => {
  console.log(event); //PointerEvent
  console.log(window.event);

  console.log(event.target); //버튼 객체
  console.log(window.event.target);

  console.log(this); //window 객체
};

//2) 인라인 이벤트 방식
function test(event) {
  console.log(event); //undefined
  //매개값으로 이벤트 객체를 가져올 수 없다.

  console.log(window.event.target); //버튼 객체

  // console.log(event.target);  //오류, target undefined

  console.log(this); //window 객체
}

//3) 표준 이벤트 방식
let btn5 = document.getElementById("btn5");
//익명 함수
btn5.addEventListener('click', function (event) {
	console.log(event.target); //버튼 객체
	console.log(window.event.target);
	console.log(this);
})

//애로우 펑션
// btn5.addEventListener("click", (event) => {
//   console.log(event.target); //버튼 객체
//   console.log(window.event.target);

//   console.log(this); //window 객체
// });

//3. 태그별 기본적으로 가지고 있는 이벤트 제거
//1) 기본 이벤트 제거 1
function passwordCheck() {
  const pass1 = document.getElementById("pass1").value;
  const pass2 = document.getElementById("pass2").value;

  if (pass1 !== pass2) {
    alert("비밀번호가 일치하지 않습니다.");
    return false;
  }
}

//2) 기본 이벤트 제거 2
let submit = document.getElementById("submit");
// submit.onclick = () => {
//   alert("아이디를 정상적으로 입력해 주세요.");
// 	return false;
// };
submit.addEventListener("click", (event) => {
  const userId = document.getElementById("userId").value;
  const regExp = /^[a-zA-Z0-9]{5,12}$/;

	if (!regExp.test(userId)) {
			alert("아이디를 정상적으로 입력해 주세요.");
			// return false; addEventListener 에선 안됨
			//표준이벤트 방식에서는 아래와 같이 기본 이벤트를 제거해야 한다.
			event.preventDefault();
	}
});
