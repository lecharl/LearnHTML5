const loginForm = document.querySelector("#login-form");
//loginForm 에서 찾을 수 있다 ***** -> HTML문서 안의 요소에서 찾을 수 있다!!
const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// const loginInput = document.querySelector('#login-form input');
// const loginButton = document.querySelector('#login-form button');

const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
	event.preventDefault();
	//******브라우저의 기본 동작을 막아준다. 새로고침 막아줌!!
	//defaultPrevented: true
	console.log(event);


	// *******class명을 추가
	loginForm.classList.add(HIDDEN_CLASSNAME);


	const username = loginInput.value;
	// greeting.innerHTML = "Hello "+ username;
	greeting.innerHTML = `Hello ${username}!`;
	greeting.classList.remove(HIDDEN_CLASSNAME);

	console.log(username);


	// if(username === ''){
	// 	alert('Please write your name.');
	// } else if(username.length > 15){
	// 	alert('Your name is too long.');
	// }
	// console.log('click!!');
}

function handleLinkClick(event) {
	// alert('clicked!')
	event.preventDefault();
	console.dir(event);
}

loginForm.addEventListener('submit', onLoginSubmit);
link.addEventListener('click', handleLinkClick);

//js가 함수를 실행할 때, 그 함수에 첫번째 인자로 object를 넣어준다.
//이 object에는 방금 일어난 event에 대한 정보가 담겨있다.

// loginButton.addEventListener('click', onLoginBtnClick);
