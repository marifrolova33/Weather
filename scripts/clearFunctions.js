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
