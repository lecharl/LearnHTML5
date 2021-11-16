const h1 = document.querySelector("div.hell:first-child h1");

//classList
// function handleTitleClick() {
// 	const clickedClass = "active";
// 	if(h1.classList.contains(clickedClass)){
// 		h1.classList.remove(clickedClass);
// 	} else{
// 		h1.classList.add(clickedClass);
// 	}
// }
function handleTitleClick() {
	h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick);
