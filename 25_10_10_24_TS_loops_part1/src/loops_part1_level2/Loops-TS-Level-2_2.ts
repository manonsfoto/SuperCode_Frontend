const inputNumber = document.querySelector("#inputNumber") as HTMLInputElement;
const btnLoop = document.querySelector("#btnLoop") as HTMLInputElement;
const showResult = document.querySelector("#showResult") as HTMLElement;

btnLoop.addEventListener("click", () => {
  let o: string = "";
  for (let i: number = 1; i <= Number(inputNumber.value); i++) {
    o += "o";
  }
  showResult.innerHTML = `L${o}p`;
});
