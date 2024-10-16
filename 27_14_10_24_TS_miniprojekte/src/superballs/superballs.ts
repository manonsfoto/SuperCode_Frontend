enum btnColor {
  green = "rgb(63, 236, 101)",
  purple = "rgb(205, 37, 205)",
  yellow = "rgb(239, 226, 49)",
  darkpurple = "rgb(81, 10, 144)",
  black = "rgb(0, 0, 0)",
  orange = "rgb(250, 151, 70)",
  darkblue = "rgb(0, 59, 127)",
  skyblue = "rgb(92, 255, 255)",
}

type SuperBall = {
  btnName: string;
  bgColor: string;
  textColor: string;
};

const superBalls: SuperBall[] = [
  {
    btnName: "btn1",
    bgColor: btnColor.green,
    textColor: btnColor.purple,
  },
  {
    btnName: "btn2",
    bgColor: btnColor.darkpurple,
    textColor: btnColor.yellow,
  },
  {
    btnName: "btn3",
    bgColor: btnColor.black,
    textColor: btnColor.orange,
  },
  {
    btnName: "btn4",
    bgColor: btnColor.darkblue,
    textColor: btnColor.skyblue,
  },
];

const btn1 = document.querySelector("#btn1") as HTMLButtonElement;
const btn2 = document.querySelector("#btn2") as HTMLButtonElement;
const btn3 = document.querySelector("#btn3") as HTMLButtonElement;
const btn4 = document.querySelector("#btn4") as HTMLButtonElement;

const h1 = document.querySelector("h1") as HTMLElement;
const body = document.querySelector("body") as HTMLElement;

const changeColor = (index: number) => {
  h1.style.color = superBalls[index].textColor;
  body.style.background = superBalls[index].bgColor;
};

btn1.addEventListener("click", () => changeColor(0));
btn2.addEventListener("click", () => changeColor(1));
btn3.addEventListener("click", () => changeColor(2));
btn4.addEventListener("click", () => changeColor(3));
