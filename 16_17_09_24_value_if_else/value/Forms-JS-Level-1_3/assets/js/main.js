const alter1 = document.getElementById("alter1");

const alter2 = document.getElementById("alter2");

const btn = document.getElementById("btn");

const ergebnis = document.getElementById("ergebnis");

function vergleich() {
  return (ergebnis.innerHTML = Number(alter1.value) - Number(alter2.value));
}

btn.addEventListener("click", vergleich);
