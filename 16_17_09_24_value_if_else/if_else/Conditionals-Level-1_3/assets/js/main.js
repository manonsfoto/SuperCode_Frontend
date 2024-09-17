const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

const age = document.getElementById("age");

const btn = document.getElementById("btn");

const ergebnis = document.getElementById("ergebnis");

function adult() {
  if (age.value >= 18) {
    ergebnis.innerHTML = "Ja, Du kannst Shisha rauchen.";
  } else {
    ergebnis.innerHTML = "Nein. Du darfst keine Shisha rauchen.";
  }
}

btn.addEventListener("click", adult);
