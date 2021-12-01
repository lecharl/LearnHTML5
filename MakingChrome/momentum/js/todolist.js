const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

//투두를 저장하기 위한 배열 변수
const toDos = [];

//3
function saveToDos() {
	// localStorage.setItem("todosss", toDos);
	//***오로지 텍스트로만 저장
	localStorage.setItem("todosss", JSON.stringify(toDos));
	//****문자열로 바꿔 배열 형식으로
}

function deleteToDo(event) {
  // console.log(event.target.parentElement);
  const li = event.target.parentElement;
  li.remove();
}

//2
function paintToDo(newTodo) {
  // console.log('i will paint '+newTodo);
  const li = document.createElement("li");
  const span = document.createElement("span");
  //li 안에, marker 바로 옆에 텍스트 감쌀 span
  const button = document.createElement("button");
  button.innerHTML = "❌";
  button.addEventListener("click", deleteToDo);

  //****span을 li 안 *맨 아래*에 넣기
  li.appendChild(span);
  li.appendChild(button);

  span.innerHTML = newTodo;
  //???????????? innerTEXT는 안된다. ::marker:: 이것만 생김
  //****그렇게 완성된 li를 toDoList(ul태그)의 맨 아래에 넣기
  toDoList.appendChild(li);
  console.log(li);
}

//1
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //새로운 변수에 담아서 저장하는 용도
  toDoInput.value = ""; //비워주기
  // console.log(newTodo, toDoInput.value);

  toDos.push(newTodo); //추가한 투두리스트를 배열에 push
	paintToDo(newTodo);
	saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
