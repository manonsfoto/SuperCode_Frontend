const inputNumber = document.querySelector("#inputNumber") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLElement;
const Checkbtn = document.querySelector("#checkBtn") as HTMLInputElement;

function weather() {
  let qualityNumber = Number(inputNumber.value);
  if (qualityNumber <= 2) {
    result.innerHTML = "Die Wetter Qulität ist: " + "Schlecht";
  } else if (qualityNumber >= 3 && qualityNumber <= 5) {
    result.innerHTML = "Die Wetter Qulität ist: " + "okay";
  } else if (qualityNumber >= 6 && qualityNumber <= 7) {
    result.innerHTML = "Die Wetter Qulität ist: " + "gut";
  } else {
    result.innerHTML = "Die Wetter Qulität ist: " + "super";
  }
}
Checkbtn.addEventListener("click", weather);
