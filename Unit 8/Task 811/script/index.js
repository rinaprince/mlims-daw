//TEmps en El Verger

"use strict";

let weather;

function main() {
   let lat;
   let lon;
   let API_key;

   lat = 38.8470900;
   lon = 0.0103400;
   API_key = 'db81cd742cb1788f38388940ee7ff099';

   // Current Weather Data
   const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
   fetch(currentWeatherUrl)
      .then(response => response.text())
      .then(function (result) {
         console.log(result);
         weather = JSON.parse(result); //convertir el string en objecte    
         console.log(weather);

         let temps = document.createElement('p');
         temps.innerHTML = ("Town name: " + weather.name);
         document.body.append(temps);

         let name = document.createElement('p');
         name.innerHTML = ("Weather: " + weather.weather[0].main);
         document.body.append(name);


         let temperatura = document.createElement('p');
         temperatura.innerHTML = (" Temperature: " + weather.main["temp"] + " ºC ");
         document.body.append(temperatura); 

         let vel = document.createElement('p');
         vel.innerHTML = (" Speed wind: " + weather.wind["speed"] + " m/s ");
         document.body.append(vel);

         let desc = document.createElement('p');
         desc.innerHTML = (" Description: " + weather.weather[0].description);
         document.body.append(desc);

         let date = document.createElement('p');
         date.innerHTML = (" Date: " + Date(weather.dt));
         document.body.append(date);
      });
}

document.addEventListener('DOMContentLoaded', main);
