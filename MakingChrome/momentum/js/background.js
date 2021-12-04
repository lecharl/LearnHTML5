const images = [
  "../../resources/image/river1.PNG",
  "../../resources/image/river2.PNG",
  "../../resources/image/tower1.PNG",
];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
//document.createElement('img') : document(html문서 브라우저)에 'img'라는 태그를 만든다.
//자스에서 html에 태그를 생성하는 방법

bgImage.src = `${chosenImages}`;
//즉 bgImage === img 태그이다. 이 태그의 속성src의 값을 대입한다.

document.body.appendChild(bgImage);
//document.body.appendChild(?) : body에 ?을 가장 뒤에 추가한다.
//document.body.prependChild(?) : body에 ?을 가장 앞에 추가한다.

// console.log(bgImage);
