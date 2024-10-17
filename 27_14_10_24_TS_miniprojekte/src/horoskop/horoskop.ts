import { allHoroscop } from "./data";

const inputMonth = document.querySelector("#inputMonth") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;
const resultBox = document.querySelector("#resultBox") as HTMLElement;

button.addEventListener("click", () => {
  resultBox.innerHTML = "";

  const monthValue = inputMonth.value;
  const matchHoroscop = allHoroscop.find((elt) => elt.month === monthValue);

  if (matchHoroscop) {
    const createimg = document.createElement("img");
    const createH4 = document.createElement("h4");
    const createP = document.createElement("p");

    resultBox.append(createimg, createH4, createP);

    createimg.setAttribute("src", matchHoroscop.URL);
    createH4.textContent = `Your horoscope is ${matchHoroscop?.horoscopeName}`;
    createP.textContent = matchHoroscop?.description;
  }
});
