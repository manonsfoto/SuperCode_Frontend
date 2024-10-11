const inputNumber = document.querySelector("#inputNumber") as HTMLInputElement;
const btnLoop = document.querySelector("#btnLoop") as HTMLInputElement;
const showResult = document.querySelector("#showResult") as HTMLElement;

btnLoop.addEventListener("click", () => {
  let o: string = "";
  if (Number(inputNumber.value) === 0) {
    alert("Du hast 0 eingegeben!");
  }

  if (Number(inputNumber.value) !== 0) {
    for (let i: number = 1; i <= Number(inputNumber.value); i++) {
      if (Number(inputNumber.value) % 2 === 0) {
        o += "o";
      } else {
        o += i % 2 === 0 ? "o" : "O";
      }
    }
    showResult.innerHTML = `L${o}p`;
  }
});
