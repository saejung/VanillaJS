//const title = document.getElementById("title");

//querySelector 는 노드의 첫번째 자식을 반환한다.
const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = "green";
console.dir(title);
console.dir(document);
document.title="I own you now"; 