"use strict";
/*
navigator.geolocation.getCurrentPosition(콜백함수1, 콜백함수2)
콜백함수1 : 모든 게 잘 됐을 때 실행될 함수
콜백함수2 : 에러가 났을 때 실행될 함수 (옵션)
*/

const API_KEY = "54d4bf97c641ad857fc25fff5253320f";

function onGeoOk(position) {
	//user의 위치position를 얻는다.
	const lat = position.coords.latitude;
	//37.4944698
	const lon = position.coords.longitude;
	//126.9218479
	console.log("You live in", lat, lon);
	//이제 이 숫자들을 장소로 바꿔줄 서비스를 사용해야 한다.

	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	// console.log(url);

	//fetch를 이용해서 url을 불러 얻는다.
	//얻기까지 시간이 걸리고, 그 다음(then) 내용을 json()
	//그 다음(then) 내용의 name(장소), weather(날씨)를 얻는데 weather는 배열이다!!
	//weather[0].main을 얻어야 한다.
	fetch(url)
		.then(response => response.json())
		.then(data => {
			const weather = document.querySelector('#weather span:first-child');
			const city = document.querySelector('#weather span:last-child');
			city.innerText = data.name;
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
			// const name = data.name;
			// const weather = data.weather;
			// console.log(data.name, data.weather[0].main)
		});
}

function onGeoError() {
	alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
