"use strict";
console.log("========================================");

//1. Object to JSON
//stringify(obj)
let json = JSON.stringify(true);
console.log(json, typeof json);

json = JSON.stringify(["apple", "banana"]);
console.log(json, typeof json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  // symbol: Symbol("id"),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);
//함수는 객체의 정보가 아니기 때문에 없음
//symbol은 자바스크립트에만 있는 타입이므로 안됨
console.log("====================================================");

//JSON.stringify(대상, replacer배열|함수) : 내가 원하는 정보만
json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json);
console.log("------------------------------------------------");

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // return value;
  return key === "name" ? "ellie" : value;
});
//처음엔 **최상위 객체**가 전달된다.
console.log(json);
console.log("=================================================");

//2. JSON to Object
//parse(json)
json = JSON.stringify(rabbit);
console.log(json);
console.log("-------------------------------------------------");
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // return value;
  return key === "birthDate" ? new Date() : value;
});
//마지막에 **최상위 객체**가 전달된다.
console.log(obj);

rabbit.jump();
// obj.jump(); //오류 : jump()함수가 없다.
console.log("------------------------------------------------");

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); //오류 : 그냥 parse()로 하면, JSON으로 변환될 때 이미 string으로 저장됨
console.log(obj.birthDate);
console.log(obj.birthDate.getDate());

