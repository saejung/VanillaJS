const age = prompt("How old are you?");

if(age >= 18 && age <= 21){
    console.log("you can drink but you should not");
    title.innerHTML = "you can drink but you should not";
    title.style.color = "orange";
}else if(age > 21){
    console.log("go ahead");
    title.innerHTML = "go ahead";
    title.style.color = "#34495e";
}else{
    console.log(age);
    title.innerHTML = "too young!!";
    title.style.color = "red";
}