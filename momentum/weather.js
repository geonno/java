function ongeook(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(`you live in ${lat} ${lng}`)
}

function ongeoerror(){
    alert('cant find you. no weather for you')
}

navigator.geolocation.getCurrentPosition(ongeook, ongeoerror)