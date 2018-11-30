const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    /*  toggle 의 기능과 동일함. 
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    }else{
        title.classList.add(CLICKED_CLASS);
    } */
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}

init();