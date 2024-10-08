const inputMealName = document.querySelector(
  "#inputMealName"
) as HTMLInputElement;
const btn = document.querySelector("#btn") as HTMLInputElement;
const resultWeek = document.querySelector("#resultWeek") as HTMLElement;
const resultList = document.querySelector("#resultList") as HTMLElement;
const selectWeek = document.querySelector("#selectWeek") as HTMLSelectElement;

const mealTotalArr: string[][] = [
  ["Pizza", "Pasta"],
  ["Bibimbap", "Kimchipancake"],
  ["Udon", "Takoyaki"],
  ["Bratwurst", "Potato Salad"],
];
// console.log(mealTotalArr[2]);

if (
  inputMealName &&
  btn &&
  resultWeek &&
  resultList &&
  selectWeek &&
  mealTotalArr
) {
  selectWeek.addEventListener("change", () => console.log(selectWeek.value));
  btn.addEventListener("click", addMeal);

  function addMeal() {
    console.log(inputMealName.value);
    mealTotalArr[Number(selectWeek.value)].push(inputMealName.value);
    console.log(mealTotalArr[Number(selectWeek.value)]);
  }
}
