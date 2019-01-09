const COORDS = "coords";

//5
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

//4
function handleGeoSucces(position){
    //console.log(position.coords.latitude);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj ={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

//4
function handleGeoError(){
    console.log("Can't access geo location");
}

//3
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}


//2
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        //getWeather
    }
}

//1
function init(){
    loadCoords();
}

init();