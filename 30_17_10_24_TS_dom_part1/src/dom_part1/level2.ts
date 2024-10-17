// !============================================
// !======== Dom-Elements-TS-Level-2_1 =========
// !============================================
const navChange = document.querySelector("#navChange") as HTMLButtonElement;
const navHome = document.querySelector("#navHome") as HTMLButtonElement;

navChange.addEventListener("click", () => {
  const reversedHomeText = navHome.textContent?.split("").reverse().join("");
  navHome.textContent = reversedHomeText!;
  navHome.style.backgroundColor = "pink";
});

// !============================================
// !======== Dom-Elements-TS-Level-2_2 =========
// !============================================

const vorname = document.querySelector("#vorname") as HTMLInputElement;
const nachname = document.querySelector("#nachname") as HTMLInputElement;
const land = document.querySelector("#land") as HTMLInputElement;
const submitBtn = document.querySelector("#submitBtn") as HTMLButtonElement;

type SimplePerson = {
  vorname: string;
  nachname: string;
  land: string;
};

submitBtn.addEventListener("click", () => {
  if (vorname.value && nachname.value) {
    const people: SimplePerson = {
      vorname: vorname?.value,
      nachname: nachname?.value,
      land: land.value,
    };
    console.log(people);
  }
});

// !============================================
// !======== Dom-Elements-TS-Level-2_6 =========
// !============================================

import { data } from "./randompic";

type Picture = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

const content = document.querySelector("#content") as HTMLElement;

const createh3 = document.createElement("h3");
createh3.textContent = "Zufälliges Bild mit TypeScript anzeigen";
content.appendChild(createh3);

const createButton = document.createElement("button");
createButton.textContent = "Click Me";
content.appendChild(createButton);

createButton.addEventListener("click", () => {
  const existingImg = content.querySelector("img");
  if (existingImg) {
    content.removeChild(existingImg);
  }

  const randomIndex = Math.floor(Math.random() * data.length);
  const randomImgURL = data[randomIndex].download_url;
  const createImg = document.createElement("img");
  content.appendChild(createImg);
  createImg.setAttribute("src", randomImgURL);
});
