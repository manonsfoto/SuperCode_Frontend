const time = document.querySelector("#time") as HTMLDivElement;
const inputMinutes = document.querySelector("#minutes") as HTMLInputElement;
const startBtn = document.querySelector("#start-button") as HTMLButtonElement;
const pauseBtn = document.querySelector("#pause-button") as HTMLButtonElement;
const restartBtn = document.querySelector(
  "#restart-button"
) as HTMLButtonElement;
const resetBtn = document.querySelector("#reset-button") as HTMLButtonElement;

// ===================================================================

let counter: number = 0;
let interval: number;
let restartedCounter: number = 0;

// ===================================================================
const displayTime = () => {
  let counterMinutes: number = Math.floor(counter / 60);
  let counterSeconds: number = counter - 60 * counterMinutes;

  time.textContent = `${counterMinutes
    .toString()
    .padStart(2, "0")}:${counterSeconds.toString().padStart(2, "0")}`;
};

// ===================================================================

const startCount = (minutesValue: number) => {
  inputMinutes.value = "";
  if (minutesValue) {
    counter = minutesValue * 60;

    interval = setInterval(() => {
      counter--;
      displayTime();

      if (counter === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
};

// ===================================================================

const pauseCount = () => {
  if (counter !== 0) {
    clearInterval(interval);
    restartedCounter = counter;
    displayTime();
  }
};

// ===================================================================

const resetCount = () => {
  time.textContent = "00:00";
  clearInterval(interval);
};

// ===================================================================

startBtn?.addEventListener("click", () => {
  const minutes: number = Number(inputMinutes.value);
  startCount(minutes);
});

restartBtn?.addEventListener("click", () => {
  startCount(restartedCounter / 60);
});

pauseBtn?.addEventListener("click", pauseCount);

resetBtn?.addEventListener("click", resetCount);
