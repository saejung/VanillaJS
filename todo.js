//1)
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

    const TODOS_LS = 'toDos';

    const toDos = [];

    //6)
    function saveToDos(){
        localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    }

    //5)
    function paintToDos(text){
        const li = document.createElement("li");
        const delbtn = document.createElement("button");
        const span = document.createElement("span");
        const newId = toDos.length + 1;
        delbtn.innerText = "X";
        span.innerText = text;
        li.appendChild(span);
        li.appendChild(delbtn);
        li.id = newId;
        toDoList.appendChild(li);
        const toDoObj = {
            text : text,
            id : newId
        }
        toDos.push(toDoObj);
        saveToDos();
    }

    //4)
    function handleSubmit(event){
        //현재 이벤트의 기본 동작을 중단한다.
        event.preventDefault();
        const currentValue = toDoInput.value;
        paintToDos(currentValue);
        toDoInput.value = "";
    }

    //2)
    function loadToDos(){
        const loadedToDos = localStorage.getItem(TODOS_LS);
        if(loadedToDos !== null){
            const parsedToDos = JSON.parse(loadedToDos);
            parsedToDos.forEach(function(toDo){
                paintToDos(toDo.text);
        }) 
        }else{
            
        }
    }

    //3)
     function init(){
         loadToDos();
         toDoForm.addEventListener("submit", handleSubmit);
     }

     init();