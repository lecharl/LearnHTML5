window.onload = function(){
	//배열 선언 및 초기화
	let btn1 = document.getElementById('btn1');

	btn1.addEventListener('click', function(){
		let area = document.getElementById('area1');
		let array1 = new Array();	//빈 배열[]
		let array2 = new Array(3);	//빈 배열[empty x 3]
		let array3 = new Array('빨강', '파랑', '노랑', '초록');
		let array4 = ['java', 'oracle', 'html5', 'css3', 'javascript'];
		let array5 = [
			'문인수',	//문자
			20,	//숫자
			true,	//논리값
			[1, 2, 3, 4],	//배열
			function(){
				return 1
			},	//함수
			{}	//객체
		];

		console.log(array1);	//빈 배열[]
		console.log(array2);	//빈 배열[empty x 3]
		console.log(array3);
		console.log(array4);

		array1[0] = '귤';
		array1[1] = '사과';
		array1[2] = '자몽';

		area.innerHTML = `array1에 값 대입 : [${array1}] <br> array1.length : ${array1.length}<br><br>`;

		array2[0] = '자동차';
		array2[1] = '비행기';
		array2[2] = '기차';
		array2[3] = '배';

		area.innerHTML += `array2에 값 대입 : [${array2}] <br> array2.length : ${array2.length}<br><br>`;
		//사이즈가 무의미하다.
		area.innerHTML += `array3에 값 대입 : [${array3}] <br> array3.length : ${array3.length}<br><br>`;
		area.innerHTML += `array4에 값 대입 : [${array4}] <br> array4.length : ${array4.length}<br><br>`;
		area.innerHTML += `array5에 값 대입 : [${array5}] <br> array5.length : ${array5.length}<br><br>`;

		// area.innerHTML += array5;
		// area.innerHTML = '테스트';
	});

	//2. 배열의 메소드
	//1) indexOf()
	let btn2 = document.getElementById('btn2');

	btn2.addEventListener('click', function(){
		let array = ['귤', '복숭아', '사과', '망고', '자몽'];
		let area = document.getElementById('area2');

		area.innerHTML = `array: [${array}] <br><br>`;
		area.innerHTML += `복숭아가 있는 배열의 인덱스: ${array.indexOf('복숭아')}<br>`;
		area.innerHTML += `자몽이 있는 배열의 인덱스: ${array.indexOf('자몽')}<br>`;
		area.innerHTML += `사과가 있는 배열의 인덱스: ${array.indexOf('사과')}<br>`;
	});

	//2) concat()
	let btn3 = document.getElementById('btn3');

	btn3.addEventListener('click', function(){
		let array1 = ['귤', '복숭아', '사과', '망고', '자몽'];
		let array2 = ['바나나', '수박', '오렌지', '두리안', '딸기'];
		let area = document.getElementById('area3');

		area.innerHTML = `array1: [${array1}] <br>`;
		area.innerHTML += `array2: [${array2}] <br><br>`;

		area.innerHTML += `array1 기준으로 배열을 결합: [${array1.concat(array2)}] <br>`;
		area.innerHTML += `array1: [${array1}] <br>`;
		//***원본 배열에 영향을 미치지 않는다.

		area.innerHTML += `array2 기준으로 배열을 결합: [${array2.concat(array1)}] <br>`;
		area.innerHTML += `array2: [${array2}] <br>`;
	});


	//3) join()
	let btn4 = document.getElementById('btn4');

	btn4.addEventListener('click', function(){
		let array = ['강남', '역삼', '선릉', '삼성'];
		let area = document.getElementById('area4');

		area.innerHTML += `array: [${array}] <br>`;
		area.innerHTML += `array.toString(): [${array.toString()}] <br>`;
		// 같은 결과
		area.innerHTML += `typeof(array): [${typeof(array)}] <br>`;
		area.innerHTML += `array.join(): [${array.join()}] <br>`;
		//기본은 ',' 콤마로 구분
		area.innerHTML += `array.join('|'): [${array.join('|')}] <br>`;
		area.innerHTML += `typeof(array.join('|')): [${typeof(array.join('|'))}] <br>`;
	});


	//4) reverse()
	let btn5 = document.getElementById('btn5');
	btn5.addEventListener('click', function(){
		//Array.of() : ES6에서 추가된 배열생성 메소드****
		let array = Array.of(1,2,3,4,5,6,7,8,9,10);
		let area = document.getElementById('area5');

		area.innerHTML += `array: [${array}] <br><br>`;
		area.innerHTML += `array.reverse(): [${array.reverse()}] <br>`;
		//***** 원본 배열에 영향을 미치는 메소드
		area.innerHTML += `array: [${array}] <br>`;
	});


	//5) sort()
	let btn6 = document.getElementById('btn6');
	btn6.addEventListener('click', function(){
		let array1 = Array.of(10, 543, 30, 450, 123, 885);
		let array2 = ['Cherry', 'apple', 'Apple', 'Banana'];
		let area = document.getElementById('area6');

		area.innerHTML += `array1: [${array1}] <br>`;
		area.innerHTML += `array2: [${array2}] <br><br>`;
		area.innerHTML += `array1.sort(): [${array1.sort()}] <br>`;
		area.innerHTML += `array2.sort(): [${array2.sort()}] <br><br>`;
		area.innerHTML += `array1: [${array1}] <br>`;
		area.innerHTML += `array2: [${array2}] <br><br>`;
		//***** 원본 배열에 영향을 미치는 메소드


		//sort() 메소드에 함수를 매개값으로 전달해서 정렬 기준을 변경할 수 있다.
		array1.sort(function(left, right){
			return left - right;
		});
		//***양수 : 두 자리를 바꾼다.
		area.innerHTML += `array1 오름차순으로 정렬: [${array1}] <br>`;

		array1.sort(function(left, right){
			return right - left;
		});
		//***양수 : 두 자리를 바꾼다.
		area.innerHTML += `array1 내림차순으로 정렬: [${array1}] <br>`;

		area.innerHTML += `array2 내림차순으로 정렬: [${array2.sort().reverse()}] <br>`;
	});


	//6) push(), pop()
	let btn7 = document.getElementById('btn7');

	btn7.addEventListener('click', function(){
		let array = ['아이유', '방탄소년단', '크러쉬', '박효신'];
		let area = document.getElementById('area7');

		area.innerHTML += `array : [${array}] <br><br>`
		array.push('coldplay');	//push 후 요소의 개수를 반환한다.
		area.innerHTML += `array.push() 후 : [${array}] <br>`;
		array.push('임창정');
		area.innerHTML += `array.push() 후 : [${array}] <br><br>`;


		area.innerHTML += `array.pop() : [${array.pop()}] <br>`;
		area.innerHTML += `array.pop() 후 : [${array}] <br>`;
		area.innerHTML += `array.pop() : [${array.pop()}] <br>`;
		area.innerHTML += `array.pop() 후 : [${array}] <br>`;
	});


	//7) shift(), unshift()
	let btn8 = document.getElementById('btn8');

	btn8.addEventListener('click', function(){
		let array = ['아이유', '방탄소년단', '크러쉬', '박효신'];
		let area = document.getElementById('area8');

		area.innerHTML += `array : [${array}] <br><br>`;
		array.unshift('에스파');	//unshift 후 요소의 개수를 반환한다.
		area.innerHTML += `array.unshift() 후 : [${array}] <br>`;
		array.unshift('nct127');
		area.innerHTML += `array.unshift() 후 : [${array}] <br><br>`;

		area.innerHTML += `array.shift() : [${array.shift()}] <br>`;
		area.innerHTML += `array.shift() 후 : [${array}] <br>`;
		area.innerHTML += `array.shift() : [${array.shift()}] <br>`;
		area.innerHTML += `array.shift() 후 : [${array}] <br>`;

	});

	//8) slice(), splice()
	let btn9 = document.getElementById('btn9');

	btn9.addEventListener('click', function(){
		let array = ['Java', 'Oracle', 'HTML5', 'CSS3', 'JS'];
		let area = document.getElementById('area9');

		area.innerHTML += `array: [${array}] <br><br>`;
		// area.innerHTML += `array.slice(2, 4) : [${array.slice(2, 4)}] <br>`;
		// area.innerHTML += `array: [${array}] <br><br>`;
		//***원본 배열에 영향을 미치지 않는다.

		// area.innerHTML += `array.splice(2, 2): [${array.splice(2, 2)}] <br>`;
		// area.innerHTML += `array.splice(2, 2, 'Spring'): [${array.splice(2, 2, 'Spring')}] <br>`;
		area.innerHTML += `array.splice(2, 0, 'Spring', 'mybatis'): [${array.splice(2, 0, 'Spring', 'mtbatis')}] <br>`;
		area.innerHTML += `array: [${array}] <br><br>`;
		//***원본 배열에 영향을 미친다.
	});

};




