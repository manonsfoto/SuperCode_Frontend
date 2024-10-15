const radioButtons = document.querySelectorAll<HTMLInputElement>(
  'input[name="inputRadio"]'
);
const boxRadio = document.querySelector("#boxRadio") as HTMLElement;
const inputCustomNum = document.querySelector(
  "#inputCustomNum"
) as HTMLInputElement;
const outputCount = document.querySelector("#outputCount") as HTMLElement;
const inputGuessNum = document.querySelector(
  "#inputGuessNum"
) as HTMLInputElement;
const btnGuess = document.querySelector("#btnGuess") as HTMLInputElement;
const outputResult = document.querySelector("#outputResult") as HTMLElement;

// -------------------------------------------------------------------------------------------------------

let randomNum: number = Math.ceil(Math.random() * 100);
let roundMax: number;
let counter: number = 0;
// -------------------------------------------------------------------------------------------------------

boxRadio.addEventListener("change", () => {
  radioButtons?.forEach((radio) => {
    if (radio.checked) {
      roundMax = Number(radio.value);
      // custom value => 7
      if (roundMax === 7) {
        inputCustomNum.style.display = "flex";
        roundMax = Number(inputCustomNum.value);
      } else {
        inputCustomNum.style.display = "none";
      }
    }
  });
});

// -------------------------------------------------------------------------------------------------------

btnGuess.addEventListener("click", () => {
  if (!roundMax) {
    alert("please choose a number of rounds!");
  } else {
    let guessNum = Number(inputGuessNum.value);
    let roundRest: number = roundMax - counter;

    if (!guessNum) {
      alert("please guess a number!");
    } else {
      boxRadio.style.display = "none";
      outputCount.style.display = "flex";
      counter++;
      outputCount.innerHTML = `<p> ${counter}/ ${roundMax}</p>`;

      if (randomNum === guessNum) {
        outputResult.innerHTML = `<p>Congrat! Your guess is correct!🎉 It's ${randomNum}!!</p>`;
        btnGuess.style.display = "none";
      } else if (roundRest > 0) {
        let hint = guessNum > randomNum ? "lower" : "higher";
        outputResult.innerHTML += `<p>${counter} - You need to guess ${hint} than ${guessNum}. Try again!</p>`;
      } else if (roundRest === 0) {
        outputResult.innerHTML = `<p> You are out of moves :( </p> <a onclick="window.location.href=this" style="cursor:pointer;color:orange" >Try again</a>`;
        outputCount.innerHTML = `<p> ${roundMax}/ ${roundMax}</p>`;
        btnGuess.disabled = true;
      }
    }
  }
});
