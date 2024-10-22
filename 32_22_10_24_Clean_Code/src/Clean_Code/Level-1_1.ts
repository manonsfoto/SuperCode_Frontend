const inputText = document.querySelector("#inputText") as HTMLInputElement;
const btnCountCapitalLetters = document.querySelector(
  "#btnCountCapitalLetters"
) as HTMLButtonElement;
const btnCountSpaces = document.querySelector(
  "#btnCountSpaces"
) as HTMLButtonElement;
const btnCountVowels = document.querySelector(
  "#btnCountVowels"
) as HTMLButtonElement;
const outputText = document.querySelector("#outputText") as HTMLElement;
const createParagraph = document.createElement("p");
outputText.appendChild(createParagraph);
createParagraph.textContent = "";

const countLetters = (textToCompare: string) => {
  const textValue = inputText.value.trim();

  let count = 0;

  for (const char of textValue) {
    if (textToCompare.includes(char)) {
      count++;
    }
  }

  createParagraph.textContent = count.toString();
};

btnCountCapitalLetters.addEventListener("click", () => {
  const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  countLetters(capitalLetters);
});

btnCountSpaces.addEventListener("click", () => {
  countLetters(" ");
});

btnCountVowels.addEventListener("click", () => {
  const vowels = "aeiouAEIOU";
  countLetters(vowels);
});
