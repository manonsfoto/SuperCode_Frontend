const btn = document.querySelector("button") as HTMLButtonElement;

btn.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * 256);
  const randomNum1 = Math.floor(Math.random() * 256);
  const randomNum2 = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${randomNum},${randomNum1},${randomNum2})`;
});
