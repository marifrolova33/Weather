import { TAB_NOW, TAB_DETAILS } from "./constants.js";
export function fillTabNow(cityName, cityWeatherData) {
  const currentTempValue = cityWeatherData.main.temp;
  const cloudIcon = cityWeatherData.weather[0].icon;

  TAB_NOW.CURRENT_CITY_NAME.textContent = cityName;
  TAB_NOW.CURRENT_TEMPERATURE.textContent = `${Math.trunc(currentTempValue)}°`;
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

function correctTime(timeValue) {
  const hours = timeValue.getHours();
  const minutes = timeValue.getMinutes();
  const hourValue = hours < 10 ? "0" + hours : hours;
  const minutesValue = minutes < 10 ? "0" + minutes : minutes;
  return `${hourValue}:${minutesValue}`;
}
