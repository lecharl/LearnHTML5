let submit = document.getElementById('signIn');
let id = document.getElementById('userId');
let pwd1 = document.getElementById("userPwd1");
let pwd2 = document.getElementById("userPwd2");
let pil1 = document.getElementById("pil1");
let pil2 = document.getElementById("pil2");
let pil3 = document.getElementById("pil3");

function bluring(any) {
	if (any.value.length == 0) {
		pil1.innerHTML = "필수 입력 항목 입니다";
		alert("Please enter");
		return false;
	}
	return true;
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
