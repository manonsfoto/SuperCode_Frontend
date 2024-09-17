const numberInput = document.getElementById("alterInput");

const btn = document.getElementById("btn");

const ergebnis = document.getElementById("ergebnis");

function alterBerechnung() {
  const aktuellesJahr = new Date().getFullYear();

  const alter = aktuellesJahr - Number(alterInput.value);

  return (ergebnis.innerHTML = alter);
}

btn.addEventListener("click", alterBerechnung);
