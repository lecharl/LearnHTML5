const clock = document.querySelector("#clock");

function getClock() {
	const date = new Date();
	console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
}

// setInterval(sayHello, 5000);	//5초마다

// setTimeout(sayHello, 5000);		//5초가 지나야

setInterval(getClock, 1000);
