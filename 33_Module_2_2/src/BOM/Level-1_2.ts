const zeitOutput = document.querySelector(".zeit") as HTMLDivElement;

const btn = document.querySelector("#btn") as HTMLButtonElement;

function countdown() {
  let counter: number = 100;

  const interval = setInterval(() => {
    counter--;

    zeitOutput.textContent = `${counter}%`;

    if (counter === 0) {
      clearInterval(interval);
    }
  }, 100);
}

btn.addEventListener("click", countdown);
