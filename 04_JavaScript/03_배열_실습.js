//1번
const la1 = document.querySelector('#la1');
const la2 = document.querySelector('#la2');
const la3 = document.querySelector('#la3');
const la4 = document.querySelector('#la4');
const btn1 = document.querySelector('#btn1');
const text = document.querySelector('#text');

let ar1 = la1.innerHTML.split(',');
let ar2 = la2.innerHTML.split(',');
let ar3 = la3.innerHTML.split(',');
let ar4 = la4.innerHTML.split(',');
// console.log(ar1);
// console.log(ar2);
// console.log(ar3);
// console.log(ar4);
let ar5 = ar1.concat(ar2.concat(ar3.concat(ar4)))
console.log(ar5);

function findFood() {
	let tv = text.value;
	// console.log(tv);

	if(tv.trim() != '' && tv.length != 0){	//뭔가를 입력했으면
		if(ar5.indexOf(tv) != -1){	//배열에 있으면
			let ar5i = ar5.indexOf(tv);
			alert(`배열의 위치 : ${ar5i}`);
		} else{
			alert("존재하지 않습니다.");
		}
	}
}

btn1.addEventListener('click', findFood);

//------------------------------------
//2번

const sla1 = document.querySelector('#stringla1');
const sla2 = document.querySelector('#stringla2');

let print = document.querySelector('#print');
const btn2 = document.querySelector('#btn2');

function makeSort() {
	let slaH1 = sla1.innerHTML.split(" ").reverse();
	let slaH2 = sla2.innerHTML.split(" ").reverse();
	print.innerHTML = slaH1.join('')+slaH2.join('');
}


btn2.addEventListener('click', makeSort);


//------------------------------------------------
//3번
let strInput = document.querySelector('#strInput');

let print2 = document.querySelector('#print2');
const btn3_0 = document.querySelector('#btn3_0');
const btn3 = document.querySelector('#btn3');
let array3 = [];
//전역변수로 선언해야 빈배열로 초기화되지 않는다.


function input() {
	let userInput = strInput.value;

	if(userInput.length!= 0 && userInput.trim() != ''){
		array3.push(userInput);
		strInput.value = '';
		strInput.focus();
	}
}

function naerimPrint() {
	print2.innerHTML = array3.sort().reverse();
}

btn3_0.onclick = input;

btn3.addEventListener('click', naerimPrint);


//-------------------------------------
//4번

const stringla4 = document.querySelector('#stringla4');

const remove = document.querySelector('#remove');
const add = document.querySelector('#add');

let print4 = document.querySelector('#print4');
const btn4 = document.querySelector('#btn4');

let array4 = stringla4.innerHTML.split(" ");
// console.log(array4);

function foodPrint() {
	let rv = remove.value;
	let av = add.value;

	if(rv.trim() != '' && rv.length != 0){
		if(array4.indexOf(rv) !== -1) {
			let rvi = array4.indexOf(rv);
			array4.splice(rvi, 1);
		}
		remove.value = '';
		remove.focus();
	}
	if(av.trim() != '' && av.length != 0){
		array4.push(av);
		add.value = '';
		add.focus();
	}
	print4.innerHTML = array4.join(' ');

}

btn4.addEventListener('click', foodPrint);
