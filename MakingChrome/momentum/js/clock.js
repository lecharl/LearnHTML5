const clock = document.querySelector("#clock");

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');
	clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}

// setInterval(sayHello, 5000);	//5초마다
// setTimeout(sayHello, 5000);		//5초가 지나야

getClock();	//즉시 호출
setInterval(getClock, 1000);	//1초마다
