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
};

