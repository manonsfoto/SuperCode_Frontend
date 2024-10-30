const messageDiv = document.querySelector(".message") as HTMLDivElement;
const countDiv = document.querySelector("#count") as HTMLDivElement;

function countdown() {
  let counter: number = 10;

  const interval = setInterval(() => {
    counter--;

    countDiv.textContent = `${counter}`;

    if (counter === 0) {
      clearInterval(interval);

      messageDiv.style.display = "none";
    }
  }, 1000);
}

countdown();
