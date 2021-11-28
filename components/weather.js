"use strict";

const API_KEY = "091dae33e14b9ff632dfadae805d202e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(
        ".weahtherAndLocation span:first-child"
      );
      const temp = document.querySelector(
        ".weahtherAndLocation span:nth-child(2)"
      );
      const weather = document.querySelector(
        ".weahtherAndLocation span:last-child"
      );

      city.innerText = data.name;
      temp.innerText = `${data.main.temp}℃`;
      weather.innerText = `${data.weather[0].main}`;
    });
}

function onGeoError() {
  console.log("We can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
