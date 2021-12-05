//Node 객체
//텍스트 노드가 있는 요소 노드 생성
let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  //요소 노드 생성
  let elementNode = document.createElement("h3");

  //텍스트 노드 생성
  let textNode = document.createTextNode("안녕하세요");

  elementNode.appendChild(textNode);
  document.getElementById("area1").appendChild(elementNode);
  document.getElementById("area1").innerHTML += "<h3>안녕하세요~!</h3>";
});

//텍스트 노드가 없는 요소 노드 생성
let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
  //요소 노드 생성
  let elementNode = document.createElement("img");

  elementNode.src = "../resources/image/flower1.PNG";
  elementNode.setAttribute("width", "150px");
  // elementNode.width = "150px"; *****실행 안됨!!!!!!!!!
  elementNode.setAttribute("height", "100px");
  elementNode.setAttribute("myAttr", "p123");
  // elementNode.setAttribute("alt", '1')
  // elementNode.alt = '1'  //둘다 됨****

  document.getElementById("area2").appendChild(elementNode);

  document.getElementById("area2").innerHTML +=
    '<img src="../resources/image/flower2.PNG" width="150px" height="100px" myattr="p123"></img>';
});

//Node 객체 삭제
let btn3 = document.getElementById("btn3");

btn3.addEventListener("click", (event) => {
  document.getElementById("area1").remove();
  document.body.removeChild(document.getElementById("area2"));

  console.log(event.type); //click
  console.log(event.target); //<button id="btn3">실행 확인</button>
  console.log(event.target.parentNode); //<body>...</body>

  event.target.parentNode.removeChild(document.getElementById("area3"));
});
