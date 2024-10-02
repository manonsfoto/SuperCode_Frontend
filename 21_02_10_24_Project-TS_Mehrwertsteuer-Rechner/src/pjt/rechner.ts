const nettoZuBrutto = document.querySelector(
  "#nettoZuBrutto"
) as HTMLInputElement;
const bruttoZuNetto = document.querySelector(
  "#bruttoZuNetto"
) as HTMLInputElement;
const neunzehn = document.querySelector("#neunzehn") as HTMLInputElement;
const sieben = document.querySelector("#sieben") as HTMLInputElement;
const inputBetrag = document.querySelector("#inputBetrag") as HTMLInputElement;
const btn = document.querySelector("#btn") as HTMLInputElement;
const resultBetrag = document.querySelector("#resultBetrag") as HTMLElement;
const resultBetrag2 = document.querySelector("#resultBetrag2") as HTMLElement;
const starLabel = document.querySelector("#starLabel") as HTMLElement;
const resultLabel = document.querySelector("#resultLabel") as HTMLElement;

if (
  nettoZuBrutto &&
  bruttoZuNetto &&
  neunzehn &&
  sieben &&
  inputBetrag &&
  btn
) {
  nettoZuBrutto.addEventListener("focus", () => {
    starLabel.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro";
    resultLabel.innerHTML = "Bruttobetrag (Endpreis)";
  });
  bruttoZuNetto.addEventListener("focus", () => {
    starLabel.innerHTML =
      "Bruttobetrag (Preis inklusiv Mehrwertsteuer) in Euro";
    resultLabel.innerHTML = "Nettobetrag";
  });
  const returnNumber = (): number => {
    switch (true) {
      case neunzehn.checked:
        return 0.19;
        break;
      case sieben.checked:
        return 0.07;
      default:
        return NaN;
    }
  };

  btn.addEventListener("click", () => {
    const convertinputBetrag: number = Number(
      inputBetrag.value.replace(",", ".")
    );
    resultBetrag.innerHTML = returnNumber() * convertinputBetrag + "€";

    switch (true) {
      case nettoZuBrutto.checked:
        resultBetrag2.innerHTML =
          returnNumber() * convertinputBetrag + convertinputBetrag + "€";
        break;
      case bruttoZuNetto.checked:
        resultBetrag2.innerHTML =
          convertinputBetrag - returnNumber() * convertinputBetrag + "€";
        break;
    }
  });
}
