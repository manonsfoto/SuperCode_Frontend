const btn = document.querySelector("button") as HTMLButtonElement;
const output = document.querySelector("div") as HTMLElement;

let counter = 0;

btn?.addEventListener("click", () => {
  counter++;

  const createBox = document.createElement("div");
  createBox.textContent = (counter - 1).toString();
  output.appendChild(createBox);

  createBox.setAttribute("class", "rechteck");
  createBox.classList.toggle("weiss", (counter - 1) % 10 === 0);
});
