// WeatherAPI key
const apiKey = "c1feecf73df14faa864190424263101";

// Get DOM elements once
const cityInput = document.getElementById("cityInput");
const errorMsg = document.getElementById("errorMsg");
const weatherInfo = document.getElementById("weatherInfo");

function getWeather() {
  const city = cityInput.value.trim();

  // Empty input check
  if (city === "") {
    errorMsg.style.display = "block";
    errorMsg.innerText = "⚠ Please enter a city name";
    weatherInfo.style.display = "none";
    return;
  }

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      // Hide error
      errorMsg.style.display = "none";
      weatherInfo.style.display = "block";

      // Update UI
      document.getElementById("cityName").innerText =
        `${data.location.name}, ${data.location.country}`;

      document.getElementById("temperature").innerText =
        `${Math.round(data.current.temp_c)}°C`;

      document.getElementById("description").innerText =
        data.current.condition.text;

      document.getElementById("tempDetail").innerText =
        `${Math.round(data.current.temp_c)}°C`;

      document.getElementById("humidity").innerText =
        `${data.current.humidity}%`;

      document.getElementById("wind").innerText =
        `${data.current.wind_kph} km/h`;

      document.getElementById("weatherIcon").src =
        "https:" + data.current.condition.icon;
    })
    .catch(() => {
      errorMsg.style.display = "block";
      errorMsg.innerText = "⚠ City not found!";
      weatherInfo.style.display = "none";
    });
}
