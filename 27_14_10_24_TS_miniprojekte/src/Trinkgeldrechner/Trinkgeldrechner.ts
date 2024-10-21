const inputNum = document.querySelector("#inputNum") as HTMLInputElement;
const inputPeople = document.querySelector("#inputPeople") as HTMLInputElement;
const select = document.querySelector("select") as HTMLSelectElement;
const btn = document.querySelector("#btn") as HTMLButtonElement;
const output = document.querySelector("#output") as HTMLElement;

btn.addEventListener("click", () => {
  console.log(select.value);
  if (inputNum.value && inputPeople.value && select.value) {
    const tips: number = Number(inputNum.value) * Number(select.value);

    const sum: number = Number(inputNum.value) + tips;

    const perPerson: number = sum / Number(inputPeople.value);

    const createOutputTips = document.createElement("p");
    createOutputTips.textContent = `Das Trinkgeld ist: ${tips} €`;

    const createOutputSum = document.createElement("p");
    createOutputSum.textContent = `Die Gesammtsumme beträgt: ${sum} €`;

    const createOutputPerPerson = document.createElement("p");
    createOutputPerPerson.textContent = `Der Preis pro Person ist: ${perPerson} €`;

    output.append(createOutputTips, createOutputSum, createOutputPerPerson);
  }
});
