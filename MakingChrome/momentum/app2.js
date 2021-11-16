document;
// 해당 html(index.html)문서, object 이다.
document.title = "hi from JS";
//이처럼 js 로 html을 업데이트할 수 있다.
document.body;
document.location;
//title, body, location ... : element

//**js로 html문서의 요소들을 갖고 오는 방법 : document 객체와 element를 가져오는 함수들을 이용한다.
const title1 = document.getElementById("title");
title1.innerText = "Got you!!";

console.log(title1.innerText);
console.dir(title1);
console.log(title1.className);
console.log(title1.id);

//-----------------------------------
const hells = document.getElementsByClassName("hell");

console.log(hells);	//******배열이다!!!!!

//******** */
//querySelector(), queryAllSelector()
//첫번째 요소만, 전체 요소를 배열 방식으로
//element를 CSS 방식으로 검색할 수 있다.
// const title = document.querySelector("div h1");
const h1 = document.querySelector(".hell h1");
//classname = hell 인 요소의 후손 중 h1 요소
const h12 = document.querySelectorAll(".hell h1");
const h13 = document.querySelector(".hell h1:first-child");
const h14 = document.querySelector("#title");

h14.innerText = "oh my god";
console.log(h1);
console.log(h12);
console.log(h13);
console.log(h14);


//-----------------------------------------
//Events
//on~event명

h1.style.color = "blue";
//모든 event는 js가 들을 수 있다.

const h15 = document.querySelector("div.hell:first-child h1");

function handleTitleClick(){
	const currentColor = h15.style.color;
	let newColor;
	if(currentColor === "blue"){
		newColor = "tomato";
	} else{
		newColor = "blue";
	}
	h1.style.color = newColor;
	console.log("title was clicked!");
}
function handleMouseEnter(){
	h15.innerText = "mouse is here!";
	console.log("mouse is here!");
}
function handleMouseLeave(){
	h15.innerText = "mouse is gone....";
}

function handleWindowResize() {
	document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
	alert("copier!");
}
function handleWindowOffline() {
	alert("SOS no WIFI");
}
function handleWindowOnline() {
	alert("Soooooooo Gooood");
}

h15.addEventListener("click", handleTitleClick);
//addEventListener("event명", 수행할 것)
// title5.onclick = handleTitleClick;
h15.addEventListener("mouseenter", handleMouseEnter);
// title5.onmouseenter = handleMouseEnte r;
h15.addEventListener("mouseleve", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


