const number = document.getElementById("number");

const btn = document.getElementById("btn");

const ergebnis = document.getElementById("ergebnis");

const text = "Die Wetter Qulaität ist: ";

function weather() {
  if (8 <= number.value) {
    ergebnis.innerText = text + "Super";
  } else if (6 <= number.value) {
    ergebnis.innerText = text + "Gut";
  } else if (3 <= number.value) {
    ergebnis.innerText = text + "Okay";
  } else {
    ergebnis.innerText = text + "Schlecht";
  }
}

btn.addEventListener("click", weather);
