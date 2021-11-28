"use script";
console.log("=====================================");
//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ["사과", "바나나"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //첫 인덱스
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); //마지막 인덱스
console.log("---------------------------------");

//3. Looping over an array
//print all fruits
//1) for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log("---------------------------------");

//2) for..of
for (const fruitV of fruits) {
  console.log(fruitV);
}
console.log("===================================");

//3) forEach(콜백함수)
fruits.forEach((value, index) => console.log(value, index));
console.log("---------------------------------");

fruits.forEach((value) => console.log(value));
console.log("===================================");

//4. Addition, deletion, copy
//push : add an item to the end
fruits.push("딸기", "복숭아");
console.log(fruits);
console.log("---------------------------------");

//pop : remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log("===================================");

//unshift : add an item to the begining
fruits.unshift("키위", "레몬");
console.log(fruits);
console.log("---------------------------------");

//shift : remove an item from the begining
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log("===================================");

//주의 : shift, unshift are slower than pop, push

//splice : remove an item by index position
fruits.push("딸기", "복숭아", "레몬");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);

fruits.splice(1, 1, "수박", "멜론");
console.log(fruits);
console.log("===================================");

//concat : combine two arrays
const fruits2 = ["배", "구아바"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
console.log("===================================");

//5. Searching
//indexOf : find the index
console.log(fruits);
console.log(fruits.indexOf("사과"));
console.log(fruits.indexOf("수박"));
console.log(fruits.indexOf("구아바"));
console.log("-------------------------------------");

//includes
console.log(fruits.includes("수박"));
console.log(fruits.includes("구아바"));
console.log("=======================================");

//lastIndexOf
fruits.push("사과");
console.log(fruits);
console.log(fruits.indexOf("사과"));
console.log(fruits.lastIndexOf("사과"));
console.log("=======================================");
