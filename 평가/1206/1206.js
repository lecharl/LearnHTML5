const submit = document.getElementById('signIn');
const id = document.getElementById('userId');
const pwd1 = document.getElementById("userPwd1");
const pwd2 = document.getElementById("userPwd2");
const email = document.getElementById("email");
let pil1 = document.getElementById("pil1");
let pil2 = document.getElementById("pil2");
let pil2_2 = document.getElementById("pil2_2");
let pil3 = document.getElementById("pil3");

//요구사항2
//이메일 클릭했을 때,
//앞의 id input 박스 중 빈칸이 있다면??
//그 칸 밑에다가 '필수입력' 이라고 표시하기

// email.addEventListener('click', function () {
// 	if (id.value === "") {
// 		pil1.innerHTML = "필수 입력 항목 입니다";
// 	} else {
// 		pil1.innerHTML = "";
// 	}
// })



function bluring(input, out) {
	if (input.value.length == 0) {
		out.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;필수 입력 항목 입니다`;
		return false;
	} else {
		out.innerHTML = "";
		return true;
	}
}

pwd1.addEventListener("click", function () {
	pil2.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 영문자 대/소문자 특수문자, 숫자 포함 총 8~32자`;
})

// id.addEventListener('click', function () {
// 	if (id.value === '') {
// 		if (id.focus() == false) {
// 			pil1.innerHTML = '필수 입력 항목 입니다';
// 		}
// 	}

// })

// pwd1.onclick = function (

// )

// pwd1.addEventListener('click', function () {

// })


// if (pwd1.value === '') {
// 	pil2.innerText = '필수 입력 항목 입니다';
// }
// if (pwd2.value === '') {
// 	pil3.innerText = '필수 입력 항목 입니다';
// }
submit.addEventListener('click', function () {

})


//영문자 대/소문자 특수문자, 숫자 포함 총 8~32자
