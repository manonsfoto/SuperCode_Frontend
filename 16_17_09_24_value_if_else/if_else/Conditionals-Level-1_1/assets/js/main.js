const age = document.getElementById("age");

const btn = document.getElementById("btn");

const ergebnis = document.getElementById("ergebnis");

function adult() {
  if (age.value >= 18) {
    ergebnis.innerHTML = "Volljährig";
  } else {
    ergebnis.innerHTML = "Minderjährig";
  }
}

btn.addEventListener("click", adult);
