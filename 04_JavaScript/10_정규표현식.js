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
	area.innerHTML +=`str1.split(regExp1) : ${str1.split(regExp1)}<br>`;

	console.log(str1.split(regExp1));
});


//플래그 문자
const btn2 = document.getElementById('btn2')

btn2.addEventListener('click', () => {
  let area = document.getElementById('area2');
  let str = 'JAvaScript jQuery Ajax';

  area.innerHTML += '<h3>플래그 문자</h3>'
  // replace()메소드에서 `$&` : 패턴을 만족하는 문자열을 가리킨다.
  area.innerHTML += `/a/ : ${str.replace(/a/, '($&)')}<br>`;
  area.innerHTML += `/a/i : ${str.replace(/a/i, '($&)')}<br>`;
  area.innerHTML += `/a/g : ${str.replace(/a/g, '($&)')}<br>`;
  area.innerHTML += `/a/ig : ${str.replace(/a/ig, '($&)')}<br>`;
  area.innerHTML += `/a/gi : ${str.replace(/a/gi, '($&)')}<br>`;
})


//메타 문자
const btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
  let area = document.getElementById("area3");
  area.innerHTML += "<h3>메타 문자</h3>";
  let str = "as aa aaa aaaa";
  /*
  ### 반복 검색
  - `{m, n}` : 앞선 패턴이 최소 m번 최대 n번 반복되는 문자열을 의미한다.
  - `+` : 앞선 패턴이 최소 한번 이상 반복되는 문자열을 의미한다.
  - `?` : 앞선 패턴이 최대 한번 이상 반복되는 문자열을 의미한다.
  */
  area.innerHTML += "<h4>반복 검색</h4>";
  area.innerHTML += `/a{1,2}/g : ${str.replace(/a{1,2}/g, "($&)")}<br>`;
  // {3} == {3,3}
  area.innerHTML += `/a{3}/g : ${str.replace(/a{3}/g, "($&)")}<br>`;
  //앞선 패턴이 최소 2번 이상 반복되는 문자열을 의미한다.
  area.innerHTML += `/a{2,}/g : ${str.replace(/a{2,}/g, "($&)")}<br>`;
  // + == {1,}
  area.innerHTML += `/a+/g : ${str.replace(/a+/g, "($&)")}<br>`;
  // ? == {0, 1}
  // a가 0개 또는 1개일때 괄호로 감싼다
  area.innerHTML += `/a?/g : ${str.replace(/a?/g, "($&)")}<br>`;

  str = "Javascript\nJquery\nShellscript\nAjax";
  area.innerHTML += "<h4>문자열의 앞뒤 구분</h4>";
  /*
  ### 문자열의 앞뒤 구분
  - `^` : 문자열의 시작
  - `$` : 문자열의 마지막
  */

  area.innerHTML += `/^j/ig : ${str.replace(/^j/gi, "($&)")}<br>`;
  area.innerHTML += `/^j/igm : ${str.replace(/^j/gim, "($&)")}<br>`;
  area.innerHTML += `/ipt$/igm : ${str.replace(/ipt$/gim, "($&)")}<br>`;

  str = "123 Javascript Jquery Ajax";
  area.innerHTML += "<h4>OR 검색</h4>";
  /*
  ### OR 검색
  - `[...]` : 대괄호 내의 문자들 중 하나라도 존재할 경우를 의미한다.
  */
  area.innerHTML += `/[aj]/ig : ${str.replace(/[aj]/gi, "($&)")}<br>`;
  //[a,j] : 하나의 문자열로 인식한다. 'a,j'를 검색함

  //[^...] : 대괄호 내의 `^`는 not의 의미를 가진다.
  area.innerHTML += `/[^aj]/ig : ${str.replace(/[^aj]/gi, "($&)")}<br>`;

  //[..-..] : 대괄호 내의 `-`는 범위 지정을 의미한다.
  area.innerHTML += `/[a-z]/ig : ${str.replace(/[a-z]/gi, "($&)")}<br>`;
  area.innerHTML += `/[A-Z]/g : ${str.replace(/[A-Z]/g, "($&)")}<br>`;
  area.innerHTML += `/[0-9]/g : ${str.replace(/[0-9]/g, "($&)")}<br>`;

  /*
  ### 임의의 문자열 검색
  - `.`  : 임의의 문자 한 개를 의미하고, 문자 내용은 무엇이든 상관없다.
  */
  area.innerHTML += "<h4>임의의 문자열 검색</h4>";
  area.innerHTML += `/../g : ${str.replace(/../g, "($&)")}<br>`;
  area.innerHTML += `/.../g : ${str.replace(/.../g, "($&)")}<br>`;

  /*
  ### 추가 메타 문자
  - `\d` : 숫자를 의미한다.
  - `\D` : 숫자가 아닌 문자를 의미한다.
  - `\w` : 알파벳, 숫자, 언더스코어(_)를 의미한다.
  - `\W` : 알파벳, 숫자, 언더스코어(_)가 아닌 문자를 의미한다.
  - `\s` : 공백문자를 의미한다. (띄어쓰기, 탭, 줄바꿈)
  - `\S` : 공백문자가 아닌 문자를 의미한다. (띄어쓰기, 탭, 줄바꿈 제외)
  */

  str = "A1 B2 C3 d_4 e:5 ` ffgg77--__--\t가\n나\n다";
  area.innerHTML += "<h3>추가 메타 문자</h3>";
  // /\d/ == /[0-9]/g
  area.innerHTML += `/\\d/g : ${str.replace(/\d/g, "($&)")}<br>`;
  // /\D/ == /^[0-9]/g
  area.innerHTML += `/\\D/g : ${str.replace(/\D/g, "($&)")}<br>`;
  // /\w/ == /[a-zA-Z0-9_]/g
  area.innerHTML += `/\\w/g : ${str.replace(/\w/g, "($&)")}<br>`;
  // /\W/ == /[^a-zA-Z0-9_]/g
  area.innerHTML += `/\\W/g : ${str.replace(/\W/g, "($&)")}<br>`;
  // /\s/ == /[ \n\t]/
  area.innerHTML += `/\\s/g : ${str.replace(/\s/g, "($&)")}<br>`;
  area.innerHTML += `/[\\s\\n\\t]/g : ${str.replace(/[\s\n\t]/g, "($&)")}<br>`;
  // /\S/ == /[^ \n\t]/
  area.innerHTML += `/\\S/g : ${str.replace(/\S/g, "($&)")}<br>`;
})
