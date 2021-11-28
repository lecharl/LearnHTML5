//1. make a string out of an array : join('구분자')
{
  const fruits = ["apple", "banana", "orange"];

  console.log(fruits);
  console.log(`fruits.toString() : ${fruits.toString()}`);
  console.log(`fruits.join() : ${fruits.join()}`);
  console.log(`fruits.join(', and ') : ${fruits.join(", and ")}`);
}
console.log("------------------------------------------");

//2. make an array out of a string : split('구분자', 개수)
{
  const fruits = "사과, 키위, 바나나, 체리";
  console.log(fruits);
  const result = new Array(fruits);
  console.log(result); //땡!! 전체가 하나의 요소로 된다(length == 1)
  console.log("------------------------------------------");

  const result2 = fruits.split(",");
  console.log(result2);
  const result3 = fruits.split(",", 2);
  console.log(result3);
}
console.log("------------------------------------------");

//3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
	
}

//4.  make new array without the first two elements
