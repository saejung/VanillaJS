const body = document.querySelector("body");
const IMG_NUMBER = 5;

//3
function paintImage(imgNumber){
    const img = new Image();
    img.src = `img/black/${imgNumber +1}.jpg`;
    img.classList.add("bgImage");
    body.appendChild(img);
}

//2
function genRandom(){
    const number =  Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

//1
function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();