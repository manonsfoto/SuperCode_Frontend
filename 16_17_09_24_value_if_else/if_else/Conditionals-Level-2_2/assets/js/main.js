const number = document.getElementById("number");
const rangeText = document.getElementById("rangeText");
const ergebnis = document.getElementById("ergebnis");
const body = document.querySelector("body");

function checkAirQuality() {
  rangeText.innerHTML = number.value;
  if (number.value <= 50) {
    ergebnis.innerHTML =
      "Level of health concern:  Good<br>Level of health effect: Little or no risk";
    body.style.backgroundColor = "green";
  } else if (number.value > 50 && number.value <= 100) {
    ergebnis.innerHTML =
      "Level of health concern:  Moderate<br>Level of health effect: Acceptable quality";
    body.style.backgroundColor = "yellow";
  } else {
    ergebnis.innerHTML =
      "Level of health concern:  Unhealthy for sensitive groups<br>Level of health effect: Generable publics not likely affected";
    body.style.backgroundColor = "orange";
  }
}

number.addEventListener("change", checkAirQuality);
