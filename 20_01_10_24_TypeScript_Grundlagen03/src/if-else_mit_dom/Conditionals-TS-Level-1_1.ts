const inputAge = document.querySelector("#inputAge") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLElement;
const Checkbtn = document.querySelector("#checkBtn") as HTMLInputElement;

function adult() {
  let userAge: number = Number(inputAge.value);
  if (userAge >= 18) {
    return (result.innerHTML = "Volljährig");
  } else {
    return (result.innerHTML = "Minderjährig");
  }
}

Checkbtn.addEventListener("click", adult);
