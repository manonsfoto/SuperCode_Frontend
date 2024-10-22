// !==========================================
// !=====  BEFORE  ===========================
// !==========================================

const getNumberText = (num: number | undefined): string =>
  ["One", "Two", "Three", "Four", "Five"][num ? num - 1 : 0 - 1] ?? "Unknown";

const userInput: number = Math.ceil(Math.random() * 7);
console.log(userInput);
const numberText = getNumberText(userInput);
console.log(numberText);

// !==========================================
// !======  AFTER  ===========================
// !==========================================

const getNumberAsText = (num: number): string => {
  const numberTextArr: string[] = ["One", "Two", "Three", "Four", "Five"];

  if (num <= numberTextArr.length) {
    return numberTextArr[num - 1];
  } else {
    return "Unknown";
  }
};

const randomNumber: number = Math.ceil(Math.random() * 7);
const numberAsText: string = getNumberAsText(randomNumber);
