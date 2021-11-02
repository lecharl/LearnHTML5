const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todoss";

//투두를 저장하기 위한 배열 변수
let toDos = [];
//항상 빈 배열로 시작했기에, 새로고침할 때마다 localStorage가 비워진다!!
//그래서 const 대신 let으로 변경해야 한다.

//3
function saveToDos() {
  // localStorage.setItem("todosss", toDos);
  //***오로지 텍스트로만 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //****배열을 문자열로 바꿔서 저장
}

//2-2
function deleteToDo(event) {
  // console.log(event.target.parentElement);
  const li = event.target.parentElement;
  li.remove();
  //filter 는 원본유지하므로 다시 받는다!!
  //toDos(객체배열)의 각 요소인 객체toDo의 id가 제거한 li의 id와 다르면 toDos에 유지시킨다!!
  toDos = toDos.filter((toDo) => toDo.id != li.id);
  // toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 니꼬방식!!
  //그러나 li.id 는 string 이므로 타입을 일치시켜 줘야 한다!!

  //***제거하고 난 뒤에 localStorage에 저장!!
  saveToDos();
}

//2
function paintToDo(newTodo) {
  // console.log('i will paint '+newTodo);
  const li = document.createElement("li");
  //li에 속성 id 추가하기, 투두의 id를 저장한다.
  li.id = newTodo.id;
  const span = document.createElement("span");
  //li 안에, marker 바로 옆에 텍스트 감쌀 span
  const button = document.createElement("button");
  button.innerHTML = "❌";
  //2-2 삭제
  button.addEventListener("click", deleteToDo);

  //****span을 li 안 *맨 아래*에 넣기
  li.appendChild(span);
  li.appendChild(button);

  //***매개변수로 받은 객체(newTodoObj)의 text를 받아야 하니까
  span.innerHTML = newTodo.text;
  //???????????? innerTEXT는 안된다. ::marker:: 이것만 생김
  //****그렇게 완성된 li를 toDoList(ul태그)의 맨 아래에 넣기
  toDoList.appendChild(li);
}

//1
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //새로운 변수에 담아서 저장하는 용도, 문자열!!
  toDoInput.value = ""; //비워주기
  // console.log(newTodo, toDoInput.value);

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    //id : 각 투두를 구별하기 위함
    //***밀리세컨즈로 랜덤하게 아이디명 부여하기, **number**!!!!
  };

  //추가한 투두(객체)를 배열(즉 데이터베이스)에 push
  toDos.push(newTodoObj);
  //화면에 보여주는 건 text(입력한 문자열)
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//localStorage에 저장한 key인 TODOS_KEY 를 꺼내와서 저장한 변수
const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);

//투두를 하나라도 적었다면
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //***이전에 저장된 투두들(parsedToDos)을 투두리스트 배열에 계속 넣어두자!!!
  toDos = parsedToDos;

  //***이전에 저장된 투두들 대상으로, 각 투두마다 화면에 **계속** 보여주기
  // parsedToDos.forEach((item)=>{console.log('this is the turn of ', item);});
  toDos.forEach(paintToDo);
  //????니꼬는 parsedToDos로 했다?????주의??????
}
