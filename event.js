const title = document.querySelector("#title");

function handleResize(){
    console.log("I have been resized");
}

function handleClick(){ 
    title.innerHTML = "Hi! From JS";
    title.style.color = "deeppink";
    document.title="I own you now"; 
}

window.addEventListener("resize",handleResize);
title.addEventListener("click",handleClick);