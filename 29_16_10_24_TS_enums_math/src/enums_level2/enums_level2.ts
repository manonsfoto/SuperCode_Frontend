// !==================================
// !=========Enum-TS-Level-2_1========
// !==================================

enum HtmlError {
  OK = 200,
  Redirect = 300,
  BadRequest = 400,
  InternalServerError = 500,
}

const showHtmlError = () => {
  let randomNum = Math.ceil(Math.random() * 5);
  switch (true) {
    case randomNum <= 2:
      console.log(HtmlError.OK);
      break;
    case randomNum === 3:
      console.log(HtmlError.Redirect);
      break;
    case randomNum === 4:
      console.log(HtmlError.BadRequest);
      break;
    case randomNum === 5:
      console.log(HtmlError.InternalServerError);
      break;
  }
};

showHtmlError();

// !==================================
// !=========Enum-TS-Level-2_2========
// !==================================

enum ClothingColor {
  Gelb = "#FFFF00",
  Orange = "#FFA500",
  Pink = "#FFC0CB",
  Blau = "#0000FF",
  Lila = "#800080",
  Grau = "#808080",
}

type Color = {
  name: string;
  hexValue: string;
};

const allColors: Color[] = [
  { name: "Gelb", hexValue: ClothingColor.Gelb },
  { name: "Orange", hexValue: ClothingColor.Orange },
  { name: "Pink", hexValue: ClothingColor.Pink },
  { name: "Blau", hexValue: ClothingColor.Blau },
  { name: "Lila", hexValue: ClothingColor.Lila },
  { name: "Grau", hexValue: ClothingColor.Grau },
];
const btnContainer = document.querySelector("#btnContainer") as HTMLElement;
allColors.forEach((color) => {
  btnContainer.innerHTML += `<button style="background-color:${color.hexValue}">${color.name}</button>`;
});
