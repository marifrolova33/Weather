export const SERVER = {
  SERVER_URL: "https://api.openweathermap.org/data/2.5/weather",
  API_KEY: "3b2a90ab392eba7f5708d0c85c3d4695",
  FORECAST_URL: "https://api.openweathermap.org/data/2.5/forecast",
};

export const FORM = {
  CITY_NAME: document.querySelector(".searchInput"),
  SEARCH_BUTTON: document.querySelector(".searchButton"),
  FORM_FIELD: document.querySelector(".form"),
};

export const TAB_NOW = {
  TEMPERATURE: document.querySelector(".current_temperature"),
  CLOUD: document.querySelector(".cloud"),
  CITY_NAME: document.querySelector(".currentCityName"),
  IMG_LIKE: document.querySelector(".buttonLike"),
  BUTTON_ADD_CITY: document.querySelector(".buttonAddCity"),
};

export const TAB_DETAILS = {
  CITY_NAME: document.querySelector(".details_city_name"),
  TEMPERATURE: document.querySelector(".detailsTemp"),
  FEELS_LIKE: document.querySelector(".feelsLike"),
  WEATHER_CLOUDS: document.querySelector(".weatherClouds"),
  SUNRISE: document.querySelector(".sunrise"),
  SUNSET: document.querySelector(".sunset"),
};

export const TAB_FORECAST = {
  CITY_NAME: document.querySelector(".currentCityForecast"),
  BOXES: document.querySelector(".forecastBoxes"),
};
