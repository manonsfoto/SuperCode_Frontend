const allBtns = document.querySelectorAll(
  "button"
) as NodeListOf<HTMLButtonElement>;

const element = document.querySelector("#element") as HTMLElement;

allBtns[0].addEventListener("click", () => {
  element.classList.remove("middle", "big");
});
allBtns[1].addEventListener("click", () => {
  element.classList.add("middle");
  element.classList.remove("big");
});
allBtns[2].addEventListener("click", () => {
  element.classList.add("big");
});
