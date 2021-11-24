//1. use strict

"use strict";

//2. Variable
//Mutable data type
let globalName = "global name";

{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name); //블록 안에 있는 거라 안됨
console.log(globalName);

/*var hoisting : move declaration from bottom to top
어디에 선언했는지와 상관없이 항상 선언을 제일 위로 끌어올려주는 것
var : has no block scope
블록 밖에서도 var 변수를 가져올 수 있다.
*/

//3. Constants
//Immutable data type
/*
- security
- thread safety
- reduce human mistakes
*/

//4. Variable types
//primitive, single item : number, string, boolean, null, undefined, symbol
//object, box container
//function, first-class function
//: function도 다른 타입들처럼 변수에 할당이 가능하고, 함수의 인자로도 전달이 되고 함수를 리턴할 수도 있다.

//number
const count = 17; //integer
const size = 17.2; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - special numeric values : Infinity, -Infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
console.log("---------------------------");

//bigInt : fairly new, don't use it yet
//const bigInt = over (-2*53 ~ 2*53)

//string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`;
//`` 백틱 사용한 거: template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log("---------------------------");

//boolean
//false : 0, null, undefined, NaN, ''
//true : any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);
console.log("---------------------------");

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);
console.log("---------------------------");

//symbol, create unique identifiers for objects
//자료구조에서 쓰이는 고유한 식별자
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); //false, 다르다!!!!

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); //true, 같다!!
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
console.log("---------------------------");

//object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;
console.log(ellie.name, ellie.age);
console.log(`type: ${typeof ellie}`);
console.log("--------------------------");

//5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); //'h'
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); //text는 number이기 때문에 에러!!
