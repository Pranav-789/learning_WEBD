document.addEventListener('DOMContentLoaded', () => {
  const cityInput = document.getElementById("city-input")
  const cityNameDisplay = document.getElementById("city-name")
  const getWeatherBtn = document.getElementById("get-weather-btn")
  const weatherInfo = document.getElementById("weather-info")
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-messag");

  const API_KEY = "xyz";

  getWeatherBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if(!city) return;

    //it may throw an error
    //server/DB is always in another continent

    try{
      const weatherData = await fetchWeaterData(city);
      displayWeaatherData(weatherData);
    }catch(error){
      showError();
    }

  })

  async function fetchWeaterData(city){
    //gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log(response);

    if(!response.ok){
      throw new Error("City not found");
    }

    const data = await response.json();
    return data;
  }

  function displayWeaatherData(data){
    //display
    const {name, main ,weather} = data;
    cityNameDisplay.textContent = name;
    temperatureDisplay.textContent = `Temperature: ${main.temp}`;
    descriptionDisplay.textContent = `Weather: ${weather[0].description}`;

    weatherInfo.classList.remove('hidden');
    errorMessage.classList.add('hidden');
  }

  function showError(){
    //error
    weatherInfo.classList.remove('hidden');
    errorMessage.classList.add('hidden');
  }
})