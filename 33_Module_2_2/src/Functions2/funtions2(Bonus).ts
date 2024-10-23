const inputHeight = document.querySelector("#inputHeight") as HTMLInputElement;
const inputAge = document.querySelector("#inputAge") as HTMLInputElement;
const radio = document.querySelector(
  'input[name="bodyShape"]:checked'
) as HTMLInputElement;

const button = document.querySelector("button") as HTMLButtonElement;

const output = document.querySelector("#output") as HTMLElement;

radio.addEventListener("change", () => {
  if (radio.checked) {
    const checkedValue = radio.value;
    console.log(checkedValue);
  }
});
button.addEventListener("click", () => {
  const height = Number(inputHeight.value);
  const age = Number(inputAge.value);

  if (height && age && radio.checked) {
  }
});

console.log(radio);
