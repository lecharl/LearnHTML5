let result = document.getElementById('result');

let left = document.getElementById('left');
let right = document.getElementById('right');
let percent = document.getElementById('percent');
let clear = document.getElementById('clear');	//0으로
let astric = document.getElementById('astric');	//곱하기
let divide = document.getElementById('devide');	//나누기
let minus = document.getElementById('minus');	//빼기
let dot = document.getElementById('dot');		//소수점
let equal = document.getElementById('equal');	//실행하기
let plus = document.getElementById('plus');		//더하기

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');

function nothing() {
	if(result.innerHTML === '0'){
		result.innerHTML = '';
	}
}

left.addEventListener('click', () => {
	nothing();
	result.innerHTML += left.innerHTML;
});
right.addEventListener('click', () => {
	nothing();
	result.innerHTML += right.innerHTML;
});
percent.addEventListener('click', () => {
	nothing();
	result.innerHTML += percent.innerHTML;
});
clear.addEventListener('click', () => {
	result.innerHTML = '0';
});

//연산
divide.addEventListener('click', () => {
	nothing();
	result.innerHTML += divide.innerHTML;
});
astric.addEventListener('click', () => {
	nothing();
	result.innerHTML += astric.innerHTML;
});
minus.addEventListener('click', () => {
	nothing();
	result.innerHTML += minus.innerHTML;
});
plus.addEventListener('click', () => {
	nothing();
	result.innerHTML += plus.innerHTML;
});
dot.addEventListener('click', () => {
	nothing();
	result.innerHTML += dot.innerHTML;
});

//숫자
one.addEventListener('click', () => {
	nothing();
	result.innerHTML += one.innerHTML;
});
two.addEventListener('click', () => {
	nothing();
	result.innerHTML += two.innerHTML;
});
three.addEventListener('click', () => {
	nothing();
	result.innerHTML += three.innerHTML;
});
four.addEventListener('click', () => {
	nothing();
	result.innerHTML += four.innerHTML;
});
five.addEventListener('click', () => {
	nothing();
	result.innerHTML += five.innerHTML;
});
six.addEventListener('click', () => {
	nothing();
	result.innerHTML += six.innerHTML;
});
seven.addEventListener('click', () => {
	nothing();
	result.innerHTML += seven.innerHTML;
});
eight.addEventListener('click', () => {
	nothing();
	result.innerHTML += eight.innerHTML;
});
nine.addEventListener('click', () => {
	nothing();
	result.innerHTML += nine.innerHTML;
});
zero.addEventListener('click', () => {
	nothing();
	result.innerHTML += zero.innerHTML;
});

//실행
equal.addEventListener('click', () => {
	result.innerHTML = eval(result.innerHTML);
})
