//1. 정규표현식 객체 생성
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  const area = document.getElementById("area1");
  //첫번째 방법 : 생성자 함수를 이용한 정규표현식 객체 생성
  const regExp1 = new RegExp("script");
  //두번째 방법 : 리터럴을 이용한 정규표현식 객체 생성
  //패턴 양쪽에 / 로 작성한다.(시작기호, 종료기호)
  const regExp2 = /script/;
  const str1 = "javascript jqueryscript ajax";
  const str2 = "java jquery ajax";

  console.log(regExp1, typeof regExp1, regExp1 instanceof RegExp);
  console.log(regExp2, typeof regExp2, regExp2 instanceof RegExp);

  /*
	## RegExp 객체에서 제공하는 메소드

	### 객체.test(문자열) : 문자열에 정규식 패턴을 만족하는 값이 있으면 true, 없으면 false를 반환한다.
	### 객체.exec(문자열) : 문자열에 정규식 패턴을 만족하는 값이 있으면 처음 매치된 문자열을 반환한다.

	## String 객체에서 정규표현식 객체를 이용하는 메소드

	### 문자열.match(정규식) : 문자열에서 정규식 패턴의 값과 일치하는 값을 반환한다.
	### 문자열.replace(정규식, 바꿀값) : 문자열에서 정규식 패턴의 값과 일치하는 부분을 바꿀값으로 변경한다.
	### 문자열.search(정규식) : 문자열에서 정규식 패턴의 값과 일치하는 부분의 시작 인덱스를 반환한다.
	### 문자열.split(정규식) : 문자열에서 정규식 패턴의 값과 일치하는 값을, 구분자를 기준으로 배열을 생성하여 반환한다.
	*/

  area.innerHTML = "<h3>정규표현식 객체 생성</h3>";
  //RegExp 객체에서 제공하는 메소드 tkdyd
  area.innerHTML += `regExp1.test(str1) : ${regExp1.test(str1)} <br>`;
  area.innerHTML += `regExp1.test(str2) : ${regExp1.test(str2)} <br>`;

  area.innerHTML += `regExp1.exec(str1) : ${regExp1.exec(str1)} <br>`;
  area.innerHTML += `regExp1.exec(str2) : ${regExp1.exec(str2)} <br><br>`;

  //String 객체에서 정규표현식 객체를 이용하는 메소드
	area.innerHTML += `str1.match(regExp1) : ${str1.match(regExp1)}<br>`;
	area.innerHTML += `str1.replace(regExp1, '스크립트') : ${str1.replace(regExp1, '스크립트')}<br>`;
	area.innerHTML += `str1.search(regExp1) : ${str1.search(regExp1)}<br>`;
	area.innerHTML += `str1.split(regExp1) : ${str1.split(regExp1)}<br>`;

	console.log(str1.split(regExp1));
});
