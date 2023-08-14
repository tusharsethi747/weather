const apikey = "d37934d198993ac7dc3ea2c9325aa9f0";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather icon");

async function checkweather(city) {
  const repsonse = await fetch(apiUrl + city + `&appid=${apikey}`);  
  var data = await repsonse.json();
  if (repsonse.status == 404) {
    const errorElement = document.querySelector(".error");
    errorElement.style.display = "block";
    const weatherElement1 = document.querySelector(".weather");
    weatherElement1.style.display = "none";
  } 
  else {
    const errorElement = document.querySelector(".error");
    errorElement.style.display = "none";
    document.querySelector(".city").innerHTML = data.name;
    console.log(document.querySelector(".city").innerHTML)
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";
    console.log(data);
    // console.log(data.weather[0].main);
    const weatherIcon1=document.querySelector(".weatherIcon");
    // console.log(weatherIcon1)
    // console.log(weatherIcon1.src)
    if (data.weather[0].main == "Clouds") {
      weatherIcon1.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon1.src = "clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon1.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon1.src = "mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon1.src = "snow.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon1.src = "rain.png";
    }
    const weatherElement = document.querySelector(".weather");
    weatherElement.style.display = "block";   
}

}
searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});
checkweather(city);
