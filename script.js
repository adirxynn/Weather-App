const apiKey = "c7ad1c6de898e1f68d70a2afd76a38fb";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const temperature = document.getElementById("temperature");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const description = document.getElementById("description");
const weatherIcon = document.getElementById("weatherIcon");
const error = document.getElementById("error");

async function getWeather(city){

    try{

        const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);

        if(!response.ok){
            throw new Error();
        }

        const data = await response.json();

        error.style.display = "none";

        cityName.textContent = data.name;

        temperature.textContent =
        Math.round(data.main.temp) + "°C";

        humidity.textContent =
        data.main.humidity + "%";

        wind.textContent =
        data.wind.speed + " km/h";

        description.textContent =
        data.weather[0].description;

        const icon =
        data.weather[0].icon;

        weatherIcon.src =
        `https://openweathermap.org/img/wn/${icon}@2x.png`;

    }

    catch{

        error.style.display = "block";

    }
}

searchBtn.addEventListener("click",()=>{

    const city = cityInput.value.trim();

    if(city){
        getWeather(city);
    }

});

cityInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        const city =
        cityInput.value.trim();

        if(city){
            getWeather(city);
        }

    }

});