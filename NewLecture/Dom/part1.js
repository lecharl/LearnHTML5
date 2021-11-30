/*
getElementByID ID 속성을 통해서 해당 태그를 선택한다.
존재하지 않으면 null 리턴
*/
const myNumberTag = document.getElementById("myNumber");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");

let myNumber = +myNumberTag.textContent;

decreaseBtn.onclick = function () {
  myNumber--;
  myNumberTag.textContent = myNumber;
};

increaseBtn.onclick = function () {
  myNumber++;
  myNumberTag.textContent = myNumber;
};

const colorBtns = document.getElementsByClassName("color-btn");

for (let btn of colorBtns) {
  btn.onclick = function () {
    myNumberTag.style.color = btn.dataset.color;
  };
}
console.log(colorBtns.length);
console.log(colorBtns[1]);
console.log(colorBtns);
