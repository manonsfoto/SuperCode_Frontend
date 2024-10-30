const time = document.querySelector("#time") as HTMLDivElement;
const inputMinutes = document.querySelector("#minutes") as HTMLInputElement;
const startBtn = document.querySelector("#start-button") as HTMLButtonElement;
const pauseBtn = document.querySelector("#pause-button") as HTMLButtonElement;
const restartBtn = document.querySelector(
  "#restart-button"
) as HTMLButtonElement;
const resetBtn = document.querySelector("#reset-button") as HTMLButtonElement;

startBtn.addEventListener("click", () => {
  const minutes: number = Number(inputMinutes.value);
  inputMinutes.value = "";

  let counter: number = minutes * 60;

  const interval = setInterval(() => {
    counter--;
    let counterMinutes: number = Math.floor(counter / 60);
    let counterSeconds: number = counter - 60 * counterMinutes;

    time.textContent = `${counterMinutes
      .toString()
      .padStart(2, "0")}:${counterSeconds.toString().padStart(2, "0")}`;

    if (counter === 0) {
      clearInterval(interval);
    }
  }, 100);
});

// pauseBtn.addEventListener("click", () => {
//   clearInterval(interval);
//   let pausedCounter: number = counter;
// });

// restartBtn.addEventListener("click", () => {
//   const restartedInterval = setInterval(() => {
//     pausedCounter--;
//     let counterMinutes: number = Math.floor(counter / 60);
//     let counterSeconds: number = counter - 60 * counterMinutes;

//     time.textContent = `${counterMinutes
//       .toString()
//       .padStart(2, "0")}:${counterSeconds.toString().padStart(2, "0")}`;
//     if (counter === 0) {
//       clearInterval(restartedInterval);
//     }
//   }, 100);
// });
