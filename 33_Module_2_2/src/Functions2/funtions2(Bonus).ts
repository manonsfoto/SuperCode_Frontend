const inputHeight = document.querySelector("#inputHeight") as HTMLInputElement;
const inputAge = document.querySelector("#inputAge") as HTMLInputElement;
const radioButtons = document.querySelectorAll(
  'input[name="bodyShape"]'
) as NodeListOf<HTMLInputElement>;
const button = document.querySelector("button") as HTMLButtonElement;
const output = document.querySelector("#output") as HTMLElement;

const calcIdealWeight = (
  height: number,
  age: number,
  bodyShape: number
): number => {
  return Math.round((height - 100 + age / 10) * 0.9 * bodyShape);
};

const getBodyShapeValue = (): number | null => {
  for (const radio of radioButtons) {
    if (radio.checked) {
      return Number(radio.value);
    }
  }
  return null;
};

button?.addEventListener("click", () => {
  const height = Number(inputHeight.value);
  const age = Number(inputAge.value);
  const bodyShape = getBodyShapeValue();

  if (height && age && bodyShape !== null) {
    const idealWeight = calcIdealWeight(height, age, bodyShape);

    output.textContent = `Dein Idealgewicht ist ${idealWeight}kg`;
  } else {
    output.textContent = "Bitte alle Felder korrekt ausfüllen.";
  }
});
