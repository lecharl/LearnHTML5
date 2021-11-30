function validate() {
  const id = document.getElementById("userId");
	const pwd1 = document.getElementById("userPwd1");
	const pwd2 = document.getElementById("userPwd2");
	const userName = document.getElementById("userName")
	const email = document.getElementById("email")

	if (!/^[a-z][a-z\d]{3,11}$/.test(id.value)) {
		alert("Invalid ID")
		// event.preventDefault();
		return false;
	}

	if (!/^[\w!@#$%^&*-]{8,15}$/.test(pwd1.value)) {
		alert("Invalid PW")
		// event.preventDefault();
		return false;
	}

	if (pwd1.value !== pwd2.value) {
		alert("동일한 비밀번호 값을 입력하세요.")
		pwd1.value = '';
		pwd1.focus();
		// event.preventDefault();
		return false;
	}

	if (!/^[기-힣]{2,}$/.test(userName.value)) {
		alert("Invalid Name")
		// event.preventDefault();
		return false;
	}

	if (!/^[\w]+@[\w]+\.[A-Za-z\.]{2,6}$/.test(email.value)) {
		alert("Invalid Email")
		// event.preventDefault();
		return false;
	}


}
