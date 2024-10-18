const inputText = document.querySelector("#inputText") as HTMLInputElement;
const inputLetter = document.querySelector("#inputLetter") as HTMLInputElement;
const davorRadio = document.querySelector("#davorRadio") as HTMLInputElement;
const danachRadio = document.querySelector("#danachRadio") as HTMLInputElement;

const clickbtn = document.querySelector("button") as HTMLButtonElement;
const outputFirst = document.querySelector("#outputFirst") as HTMLElement;
const outputLast = document.querySelector("#outputLast") as HTMLElement;

clickbtn?.addEventListener("click", () => {
  const trimmedText: string = inputText.value.trim();
  const trimmedLetter: string = inputLetter.value.trim();
  outputFirst.textContent = "";
  outputLast.textContent = "";
  if (trimmedText) {
    switch (true) {
      // -------------------------------------------
      case davorRadio.checked:
        const sliceDavorTextLast = trimmedText.slice(
          trimmedText.indexOf(trimmedLetter)
        );

        const sliceDavorTextFirst = trimmedText.slice(
          0,
          trimmedText.indexOf(trimmedLetter)
        );

        outputFirst.textContent = sliceDavorTextFirst;
        outputLast.textContent = sliceDavorTextLast;

        break;
      // -------------------------------------------
      case danachRadio.checked:
        const sliceDanachTextLast = trimmedText.slice(
          trimmedText.indexOf(trimmedLetter) + 1
        );

        const sliceDanachTextFirst = trimmedText.slice(
          0,
          trimmedText.indexOf(trimmedLetter) + 1
        );

        outputFirst.textContent = sliceDanachTextFirst;
        outputLast.textContent = sliceDanachTextLast;

        break;
    }
  }
});
