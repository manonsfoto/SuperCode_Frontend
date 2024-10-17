// !============================================
// !======== Dom-Elements-TS-Level-1_1 =========
// !============================================

const inputText = document.querySelector("#inputText") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;
const myList = document.querySelector("#myList") as HTMLElement;

button.addEventListener("click", () => {
  let trimmedText = inputText.value.trim();
  if (trimmedText) {
    const createList = document.createElement("li");
    createList.textContent = trimmedText;
    myList.appendChild(createList);
    inputText.value = "";
  }
});

// !============================================
// !======== Dom-Elements-TS-Level-1_2 =========
// !============================================

const example = document.getElementsByClassName(
  "example"
) as HTMLCollectionOf<HTMLElement>;
const btn1 = document.querySelector("#btn1") as HTMLButtonElement;

const defaultColor = "#666";
const newColor = "rgb(0, 0, 0)";

const changeColor = () => {
  for (let i = 0; i < example.length; i++) {
    btn1.style.color = "#fff";
    const currentElement = example[i];
    let currentBgColor = currentElement.style.backgroundColor;

    currentElement.style.backgroundColor =
      currentBgColor === newColor ? defaultColor : newColor;
  }
};

btn1.addEventListener("click", changeColor);

// !============================================
// !======== Dom-Elements-TS-Level-1_9 =========
// !============================================

const button2 = document.querySelector("#button") as HTMLButtonElement;
const farbeAuswahlen = document.querySelector(
  "#farbeAuswahlen"
) as HTMLSelectElement;

const deleteOption = () => {
  const listOfSelect = farbeAuswahlen.children;
  const index = farbeAuswahlen.selectedIndex;
  listOfSelect[index].remove();
};

button2.addEventListener("click", deleteOption);
