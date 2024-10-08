const inputMealName = document.querySelector(
  "#inputMealName"
) as HTMLInputElement;
const btnAdd = document.querySelector("#btnAdd") as HTMLInputElement;
const btnDelete = document.querySelector("#btnDelete") as HTMLInputElement;
const placeNumber = document.querySelector("#placeNumber") as HTMLInputElement;
const resultWeek = document.querySelector("#resultWeek") as HTMLElement;
const resultList = document.querySelector("#resultList") as HTMLElement;
const selectWeek = document.querySelector("#selectWeek") as HTMLSelectElement;

const mealTotalArr: string[][] = [
  ["Pizza", "Pasta"],
  ["Bibimbap", "Kimchi Pancake"],
  ["Udon", "Takoyaki"],
  ["Bratwurst", "Potato Salad"],
];

if (
  inputMealName &&
  btnAdd &&
  resultWeek &&
  resultList &&
  selectWeek &&
  mealTotalArr &&
  btnDelete &&
  placeNumber
) {
  // !===============================================
  // !===Initialize the default week and meal list===
  // !===============================================

  const defaultvalue: number = 0;
  resultWeek.textContent = `Week ${defaultvalue + 1}`;
  placeNumber.max = mealTotalArr[defaultvalue].length.toString();
  mealTotalArr[defaultvalue].forEach((item) => {
    if (resultList) {
      resultList.innerHTML += `<li>${item}</li>`;
    }
  });

  // !================================
  // !===== Update the week text =====
  // !================================

  selectWeek.addEventListener("change", () => {
    resultWeek.textContent = `Week ${Number(selectWeek.value) + 1}`;
    resultList.innerHTML = "";
    placeNumber.max = mealTotalArr[Number(selectWeek.value)].length.toString();

    mealTotalArr[Number(selectWeek.value)].forEach((item) => {
      if (resultList) {
        resultList.innerHTML += `<li>${item}</li>`;
      }
    });
  });

  // !================================
  // !===== Update the meal list =====
  // !================================

  btnAdd.addEventListener("click", () => {
    if (inputMealName.value) {
      mealTotalArr[Number(selectWeek.value)].splice(
        Number(placeNumber.value),
        0,
        inputMealName.value
      );
      placeNumber.max =
        mealTotalArr[Number(selectWeek.value)].length.toString();
      resultList.innerHTML = "";

      mealTotalArr[Number(selectWeek.value)].forEach((item) => {
        if (resultList) {
          resultList.innerHTML += `<li>${item}</li>`;
        }
      });
    }
  });

  btnDelete.addEventListener("click", () => {
    if (inputMealName.value) {
      mealTotalArr[Number(selectWeek.value)].pop();
      placeNumber.max =
        mealTotalArr[Number(selectWeek.value)].length.toString();
      resultList.innerHTML = "";

      mealTotalArr[Number(selectWeek.value)].forEach((item) => {
        if (resultList) {
          resultList.innerHTML += `<li>${item}</li>`;
        }
      });
    }
  });
}
