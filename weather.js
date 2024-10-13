const apiKey = "da13aad658b6bfa4a30d2a1482ba998f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wicon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    if(data.weather[0].main == "Clouds"){
        wicon.src = "images/cloudy.png"
    }
    else if(data.weather[0].main == "Clear"){
        wicon.src = "images/sunny.png"
    }

    else if(data.weather[0].main == "Rain"){
        wicon.src = "images/rain.png"
    }

    else if(data.weather[0].main == "Drizzle"){
        wicon.src = "images/drizzle.png"
    }

    else if(data.weather[0].main == "Mist"){
        wicon.src = "images/cloudy_day.png"
    }

    else if(data.weather[0].main == "Thunderstorm"){
        wicon.src = "images/thunderstrom.png"
    }

}

searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})
 
searchBox.addEventListener("keypress", function (e){
    if(e.key == "Enter"){
    checkweather(searchBox.value);
    }
});