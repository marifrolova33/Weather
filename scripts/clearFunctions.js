import { TAB_NOW, TAB_DETAILS, TAB_FORECAST } from "./constants.js";
export function clearAddedLocations() {
  const deleteLocationsList = document.querySelectorAll(".favoirite-city");
  if (deleteLocationsList) {
    deleteLocationsList.forEach((deleteLocationsList) =>
      deleteLocationsList.remove()
    );
  }
}

export function clearTabs() {
  const tabNow = document.querySelectorAll(".tabNow");
  const tabDetailClear = document.querySelectorAll(".details");
  const imageForDelete = document.querySelectorAll(".image");
  tabNow.forEach((now) => (now.textContent = ""));
  tabDetailClear.forEach((detail) => (detail.textContent = ""));
  imageForDelete.forEach((image) => (image.src = ""));
}

export function fillTabsIfEmpty() {
  TAB_NOW.CLOUD.src = `img/869767.png`;
  TAB_NOW.CITY_NAME.textContent = "...Waiting";
  TAB_DETAILS.CITY_NAME.textContent = "...Waiting";
  TAB_DETAILS.TEMPERATURE.textContent = `Temperature:`;
  TAB_DETAILS.FEELS_LIKE.textContent = `Feels like:`;
  TAB_DETAILS.WEATHER_CLOUDS.textContent = `Weather:`;
  TAB_DETAILS.SUNRISE.textContent = `Sunrise:`;
  TAB_DETAILS.SUNSET.textContent = `Sunset:`;
  TAB_FORECAST.CITY_NAME.textContent = "Waiting";
}
