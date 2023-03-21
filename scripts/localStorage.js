import { TAB_NOW } from "./constants.js";

export const ADDED_LOCATIONS_LIST =
  JSON.parse(localStorage.getItem("AddedLocationsList")) || [];

export function createLocalStorage(array) {
  localStorage.setItem("AddedLocationsList", JSON.stringify(array));
}

export function fillTabsIfEmpty() {
  TAB_NOW.CURRENT_CITY_NAME.textContent = "...Waiting";
  //TAB_NOW.CURRENT_TEMPERATURE.textContent = ``;
  TAB_NOW.CLOUD.src = `img/869767.png`;
}
