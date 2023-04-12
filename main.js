import { SERVER, FORM, TAB_NOW } from "./scripts/constants.js";
import {
  ADDED_LOCATIONS_LIST,
  createLocalStorage,
} from "./scripts/localStorage.js";
import {
  clearAddedLocations,
  clearTabs,
  fillTabsIfEmpty,
} from "./scripts/clearFunctions.js";
import {
  fillTabNow,
  fillTabDetails,
  fillTabForecast,
} from "./scripts/fillTabs.js";

FORM.FORM_FIELD.addEventListener("submit", getCityWeather);
TAB_NOW.BUTTON_ADD_CITY.addEventListener("click", addFavoiriteCity);

fillTabsByDefault();

async function getDataForNowDetails(cityName) {
  const URL = `${SERVER.SERVER_URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;
  try {
    const response = await fetch(URL);
    if (response.ok) {
      return await response.json();
    } else {
      alert(`HTTP Error: ${response.status} - ${response.statusText}`);
      return;
    }
  } catch (error) {
    alert(new Error(`Error: ${error.name} - ${error.message}`));
  }
}

async function getDataForForecast(cityName) {
  const URL = `${SERVER.FORECAST_URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;
  try {
    const response = await fetch(URL);
    if (response.ok) {
      return await response.json();
    } else {
      alert(`HTTP Error: ${response.status} - ${response.statusText}`);
      return;
    }
  } catch (error) {
    console.log(new Error(`Error: ${error.name} - ${error.message}`));
  }
}

async function getCityWeather(event) {
  event.preventDefault();
  const cityNameForm = FORM.CITY_NAME.value;

  const cityName = cityNameForm.trim();
  if (!cityName) {
    alert("You should type a city name");
    return;
  }
  const cityWeatherData = await getDataForNowDetails(cityName);
  const forecastData = await getDataForForecast(cityName);
  FORM.FORM_FIELD.reset();

  if (!cityWeatherData && !forecastData) {
    return;
  }

  const likeColor = "";

  fillTabNow(cityName, cityWeatherData, likeColor);
  fillTabDetails(cityName, cityWeatherData);
  fillTabForecast(cityName, forecastData);
}

function addFavoiriteCity() {
  const cityName = TAB_NOW.CITY_NAME.textContent;
  if (ADDED_LOCATIONS_LIST.find((city) => city.name === cityName)) {
    alert("This city already exists in list");
    return;
  }
  ADDED_LOCATIONS_LIST.push({ name: cityName });
  createLocalStorage(ADDED_LOCATIONS_LIST);
  render();
}

async function getFavoiriteCityWeather() {
  const cityName = this.parentElement.firstChild.textContent;
  const cityWeatherData = await getDataForNowDetails(cityName);
  const forecastData = await getDataForForecast(cityName);
  const likeColor = "red";
  fillTabNow(cityName, cityWeatherData, likeColor);
  fillTabDetails(cityName, cityWeatherData);
  fillTabForecast(cityName, forecastData);
}

function render() {
  clearAddedLocations();
  ADDED_LOCATIONS_LIST.forEach((city) => {
    const addedLocationsList = document.querySelector(".addedLocationsList");
    const favoiriteCity = document.createElement("li");
    const favoiriteCityName = document.createElement("div");
    const closeButton = document.createElement("button");
    favoiriteCity.classList.add("favoirite-city");
    closeButton.classList.add("button", "closeButton");
    closeButton.innerHTML = "X";
    addedLocationsList.appendChild(favoiriteCity);
    favoiriteCity.append(favoiriteCityName, closeButton);
    favoiriteCityName.textContent = city.name;

    closeButton.addEventListener("click", deleteTask);
    favoiriteCityName.addEventListener("click", getFavoiriteCityWeather);
  });
  if (ADDED_LOCATIONS_LIST.length != 0) {
    let lastCity = ADDED_LOCATIONS_LIST[ADDED_LOCATIONS_LIST.length - 1].name;
    fillTabsByDefault(lastCity);
  }
}

function deleteTask() {
  const cityNameForDelete = this.parentElement.firstChild.textContent;
  const cityIndex = ADDED_LOCATIONS_LIST.findIndex(
    (city) => city.name === cityNameForDelete
  );
  if (cityIndex != -1) {
    ADDED_LOCATIONS_LIST.splice(cityIndex, 1);
  }

  createLocalStorage(ADDED_LOCATIONS_LIST);
  clearTabs();
  fillTabsByDefault(ADDED_LOCATIONS_LIST[0].name);
  render();
}

async function fillTabsByDefault(cityNameShow) {
  if (ADDED_LOCATIONS_LIST.length === 0) {
    fillTabsIfEmpty();
    return;
  }
  const cityName = cityNameShow;
  const cityWeatherData = await getDataForNowDetails(cityName);
  const forecastData = await getDataForForecast(cityName);
  const likeColor = "red";

  fillTabNow(cityName, cityWeatherData, likeColor);
  fillTabDetails(cityName, cityWeatherData);
  fillTabForecast(cityName, forecastData);
}

fillTabsIfEmpty();
render();
