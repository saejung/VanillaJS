/* API(Application Programming Interface) 는 다른 서버로 부터 손쉽게 데이터를 가져올 수 있는 수단이다.*/
const API_KEY = "62c9727901b95d89272ab7a66c967e56";
const COORDS = "coords";
const weather = document.querySelector(".js-weather");

//6
function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        //console.log(json);
        return response.json();
    })
    .then(function(json){      
        const temp = json.main.temp; //온도       
        const place = json.name; //위치정보
        weather.innerText = `${temp}ºC @ ${place}`;
    });
}

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
    getWeather(latitude, longitude);
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
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

//1
function init(){
    loadCoords();
}

init();