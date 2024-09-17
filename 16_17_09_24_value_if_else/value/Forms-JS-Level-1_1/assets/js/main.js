const numberInput = document.getElementById("numberInput");

const btn = document.getElementById("btn");

function verdoppelMich() {
  return (document.querySelector("#ergebnis").innerHTML =
    numberInput.value * 2);
}
btn.addEventListener("click", verdoppelMich);
