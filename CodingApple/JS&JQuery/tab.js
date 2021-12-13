// 버튼0(products)을 누르면
// 0. 버튼0 버튼1 버튼2 모두에게 붙은 주황색 제거
// 0. 내용0 내용1 내용2 모두가 안보이게
// 1. 버튼0이 주황색으로 하이라이트 된다. : active
// 2. 내용0이 보여야한다. : show
// 3. 나머지는 제거
function openTab(n) {
	$('.tab-button').removeClass('active')
	$('.tab-content').removeClass('show');
	$('.tab-button').eq(n).addClass('active');
	$('.tab-content').eq(n).addClass('show');
}

// 반복문으로 해결하자!!!
// tab-button 의 개수!!!!
// for (let i = 0; i < $('.tab-button').length; i++) {
// 	$('.tab-button').eq(i).click(function () {
// 		openTab(i);
// 	})
// }
//이벤트리스너가 여러번이면 안좋다.


/* HTML에 지정한 속성 data-작명 의 속성값 꺼내오기
셀렉터.dataset.작명
 */

/* jQuery문법으로 몰래 정보저장
$('셀렉터').data('작명', '값');

꺼내오기
$('셀렉터').data('작명');
*/

// $('.list').data('id', '0');
// $(".list").data("id");
//해봤는데 안돼서 그냥 안함 ,ㅡㅡ






//이벤트버블링 활용->ul에 이벤트리스너 달아서 탭기능 만들기
$('.list').click(function (event) {
	//만약 실제 누른 요소가 버튼0이면 버튼0과 내용0
	// openTab(내가누른버튼에숨겨져있던숫자)
	openTab(event.target.dataset.id);
})

