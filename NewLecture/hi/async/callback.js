"use strict";
console.log('================================');
/*
Jacascript is synchronous. : 동기적이다.
Execute the code block by order after hoisting.
작성한 순서대로 동기적으로 실행된다
hoisting: var, function declaration 선언들이 자동적으로 제일 위에 올라가는 것
hoisting이 된 후 코드가 나타나는 순서대로 자동적으로 실행된다.

asynchronous
비동기적
언제 코드가 실행될지 예측할 수 없다.
 */

console.log('1');
setTimeout(()=>{
	console.log('2');
}, 1000)
//1초 뒤에 함수를 실행하라.
//이런 브라우저api는 무조건 브라우저에 먼저 요청을 보낸다
console.log('3');


//Synchronous callback
function printImmediately(print) {
	print();
}	//자동적으로 맨 위에 올라간다.

printImmediately(() => console.log('hello'));

//Asynchronous callback
function printWithDelay(print, timeout) {
	setTimeout(print, timeout);
}

printWithDelay(()=> console.log('async callback'), 2000)

//Callback hell example
// class UserStorage{
// 	loginUser(id, password, onSuccess, onError) {
// 		setTimeout(() => {
// 			if (
// 				(id === 'ellie' && password === 'dream') ||
// 				(id === 'coder' && password === 'academy')
// 			) {
// 				onSuccess(id);
// 			} else {
// 					onError(new Error('not found'));
// 			}
// 		}, 2000)
// 	}

// 	getRoles(user, onSuccess, onError) {
// 		setTimeout(() => {
// 			if (user === 'ellie') {
// 				onSuccess({name: 'ellie', role:'admin'})
// 			} else {
// 				onError(new Error('not access'))
// 			}
// 		}, 1000)
// 	}
// }

console.log('================================');

/*
Promise is a JavaScript object for asynchronous ioeration
1)State : pending -> fulfilled or rejected
2)Producer vs. Consumer
*/

//1. Producer
//when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
	//doing some heavy work(network, read files)
	console.log('doing something...');
	setTimeout(() => {
		//성공하면
		resolve('ellie')
		//실패하면
		reject(new Error('no network'))
	}, 2000)
});

//2. Consumer: then, catch, finally
promise
	//resolve
	.then((value) => {
		console.log(value);
	})
	//reject
	.catch(error => {
		console.log(error);
	})
	.finally(() => {
		console.log('finally');
	})
//promise.then(value) : promise가 잘 수행되면 그러면(then) value를 받아와서 콜백함수를 사용한다.
//value : resolve(?)가 전달한 ?

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
	setTimeout(()=> resolve(1), 1000)
})

fetchNumber
.then(num => num*2)	//2
.then(num => num*3)	//6
.then(num => {
	return new Promise((resolve, reject) => {
		setTimeout(()=> resolve(num - 1), 1000)	//5
	})
})
.then(num => console.log(num))	//5

//4. Error Handling
const getHen = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve('🐔'), 1000)
	});
const getEgg = hen =>
	new Promise((resolve, reject) => {
		setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000)
	});
const birth = egg =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${egg} => 🐥`), 1000)
	});


getHen()
	// .then(hen => getEgg(hen))
	.then(getEgg)
	.catch(error => {
		return '🥨'
	})
	// .then(egg => birth(egg))
	.then(birth)
	// .then(wow => log(wow));
	.then(console.log)
	.catch(console.log);

