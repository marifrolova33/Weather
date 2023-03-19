export const ADDED_LOCATIONS_LIST =
  JSON.parse(localStorage.getItem("AddedLocationsList")) || [];

export function createLocalStorage(array) {
  localStorage.setItem("AddedLocationsList", JSON.stringify(array));
}
