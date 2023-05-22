const api_keys = "b48084576d3c400c39e87f8012d83fce"

function ongeook(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_keys}`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span : first-child")
        const city = document.querySelector("#weather span : last-child")
        city.innerText = data.name
        weather.innerText = data.weather[0].main
    })
}


function ongeoerror(){
    alert('cant find you. no weather for you')
}

navigator.geolocation.getCurrentPosition(ongeook, ongeoerror)