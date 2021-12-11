// 버튼0(products)을 누르면
// 0. 버튼0 버튼1 버튼2 모두에게 붙은 주황색 제거
// 0. 내용0 내용1 내용2 모두가 안보이게
// 1. 버튼0이 주황색으로 하이라이트 된다. : active
// 2. 내용0이 보여야한다. : show
// 3. 나머지는 제거
function activeBtn(n) {
	$('.tab-button').removeClass('active')
	$('.tab-content').removeClass('show');
	$('.tab-button').eq(n).addClass('active');
	$('.tab-content').eq(n).addClass('show');
}

// 반복문으로 해결하자!!!
// tab-button 의 개수!!!!
for (let i = 0; i < $('.tab-button').length; i++) {
	$('.tab-button').eq(i).click(function () {
		activeBtn(i);
	})
}

// for (let i = 0; i < $('.tab-button').length; i++) {
// 	$('.tab-button').eq(i).click(function () {
// 		$('.tab-button').removeClass('active');
// 		$('.tab-content').removeClass('show');
// 		$('.tab-button').eq(i).addClass('active');
// 		$('.tab-content').eq(i).addClass('show');
// 	})
// }
