import { TAB_NOW, TAB_DETAILS, TAB_FORECAST } from "./constants.js";
export function fillTabNow(cityName, cityWeatherData) {
  const currentTempValue = cityWeatherData.main.temp;
  const cloudIcon = cityWeatherData.weather[0].icon;

  TAB_NOW.CITY_NAME.textContent = cityName;
  TAB_NOW.TEMPERATURE.textContent = `${Math.trunc(currentTempValue)}°`;
  TAB_NOW.IMG_LIKE.src = "img/Shape.svg";
  TAB_NOW.CLOUD.src = `https://openweathermap.org/img/wn/${cloudIcon}@4x.png`;
}

export function fillTabDetails(cityName, cityWeatherData) {
  const currentTempValue = cityWeatherData.main.temp;
  const feelsLikeValue = cityWeatherData.main.feels_like;
  const weatherCloudsValue = cityWeatherData.weather[0].description;
  const sunriseValue = new Date(cityWeatherData.sys.sunrise * 1000);
  const sunsetValue = new Date(cityWeatherData.sys.sunset * 1000);

  TAB_DETAILS.CITY_NAME.textContent = cityName;
  TAB_DETAILS.TEMPERATURE.textContent = `Temperature: ${Math.trunc(
    currentTempValue
  )}°`;
  TAB_DETAILS.FEELS_LIKE.textContent = `Feels like:  ${Math.trunc(
    feelsLikeValue
  )}°`;
  TAB_DETAILS.WEATHER_CLOUDS.textContent = `Weather:  ${
    weatherCloudsValue[0].toUpperCase() + weatherCloudsValue.slice(1)
  }`;
  TAB_DETAILS.SUNRISE.textContent = `Sunrise: ${correctTime(sunriseValue)}`;
  TAB_DETAILS.SUNSET.textContent = `Sunset:  ${correctTime(sunsetValue)}`;
}

export function fillTabForecast(cityName, forecastData) {
  TAB_FORECAST.BOXES.innerHTML = '';
  TAB_FORECAST.CITY_NAME.textContent = cityName;
  const forecastList = forecastData.list;
  for (let i = 0; i < 5; i ++) {
    fillForecastBox(forecastList, i);
  }
  
}

function fillForecastBox(forecastList, index) {
  const currentDate = new Date(forecastList[index].dt * 1000);
  const currentTime = `${correctTime(currentDate)}`;
  const currentTempValue = forecastList[index].main.temp;
  const feelsLikeValue = forecastList[index].main.feels_like;
  const weatherCloudsValue = forecastList[index].weather[0].main;
  const cloudIcon = forecastList[index].weather[0].icon;

  const FORECAST_BOX = document.createElement("div");
  FORECAST_BOX.classList.add("forecast-box");

  const FORECAST_CURRENT_DATE = document.createElement("div");
  const FORECAST_CURRENT_DAY = document.createElement("span");
  const FORECAST_CURRENT_TIME = document.createElement("span");
  FORECAST_CURRENT_DATE.classList.add("date");
  FORECAST_CURRENT_DAY.classList.add("currentDay");
  FORECAST_CURRENT_TIME.classList.add("currentTime");
  FORECAST_CURRENT_DATE.append(FORECAST_CURRENT_DAY, FORECAST_CURRENT_TIME);

  const FORECAST_TEMPERATURE = document.createElement("div");
  const FORECAST_TEMP_VALUE = document.createElement("p");
  const FORECAST_WEATHER = document.createElement("p");
  FORECAST_TEMPERATURE.classList.add("forecast-temp");
  FORECAST_TEMP_VALUE.classList.add("tempValue");
  FORECAST_WEATHER.classList.add("weatherForecast");
  FORECAST_TEMPERATURE.append(FORECAST_TEMP_VALUE, FORECAST_WEATHER);

  const FORECAST_PICTURE = document.createElement("div");
  const FORECAST_FEELS_LIKE = document.createElement("p");
  const FORECAST_IMG_BORDER = document.createElement("div");
  const FORECAST_IMG = document.createElement("img");
  FORECAST_PICTURE.classList.add("forecast_picture");
  FORECAST_FEELS_LIKE.classList.add("forecastFeelsLike");
  FORECAST_IMG_BORDER.classList.add("forecastImgBorder");
  FORECAST_IMG.classList.add("forecastImg");
  FORECAST_IMG_BORDER.appendChild(FORECAST_IMG);
  FORECAST_PICTURE.append(FORECAST_FEELS_LIKE, FORECAST_IMG_BORDER);

  TAB_FORECAST.BOXES.appendChild(FORECAST_BOX);

  FORECAST_BOX.append(
    FORECAST_CURRENT_DATE,
    FORECAST_TEMPERATURE,
    FORECAST_PICTURE
  );

  FORECAST_CURRENT_DAY.textContent = currentDay(currentDate);
  FORECAST_CURRENT_TIME.textContent = currentTime;
  FORECAST_TEMP_VALUE.textContent = `Temperature: ${Math.trunc(
    currentTempValue
  )}°`;
  FORECAST_FEELS_LIKE.textContent = `Feels like:  ${Math.trunc(
    feelsLikeValue
  )}°`;
  FORECAST_WEATHER.textContent = `${
    weatherCloudsValue[0].toUpperCase() + weatherCloudsValue.slice(1)
  }`;
  FORECAST_IMG.src = `https://openweathermap.org/img/wn/${cloudIcon}@2x.png`;
}

function correctTime(timeValue) {
  const hours = timeValue.getHours();
  const minutes = timeValue.getMinutes();
  const hourValue = hours < 10 ? "0" + hours : hours;
  const minutesValue = minutes < 10 ? "0" + minutes : minutes;
  return `${hourValue}:${minutesValue}`;
}

function currentDay(currentDate) {
  const options = {
    month: "long",
  };
  const currentMonth = currentDate.toLocaleDateString("en-US", options);
  const currentDay = `${currentDate.getDate()} ${currentMonth}`;
  return currentDay;
}
