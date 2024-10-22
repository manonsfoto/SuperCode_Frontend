// !==========================================
// !======  AFTER   ==========================
// !==========================================

const inputBrutto = document.querySelector("#brutto") as HTMLInputElement;
const inputSteuerklasse = document.querySelector(
  "#steuerklasse"
) as HTMLSelectElement;
const result = document.querySelector("#result") as HTMLElement;
const button = document.querySelector("button");

const calcNetto = () => {
  const bruttoValue: number = Number(inputBrutto.value);
  const steuerklasseValue: number = Number(inputSteuerklasse.value);

  if (bruttoValue && steuerklasseValue) {
    let netto;
    switch (true) {
      case steuerklasseValue === 1:
        netto = bruttoValue * 0.7;

        break;
      case steuerklasseValue === 2:
        netto = bruttoValue * 0.75;
        break;
      case steuerklasseValue === 3:
        netto = bruttoValue * 0.8;
        break;
      case steuerklasseValue === 4:
        netto = bruttoValue * 0.85;
        break;
      case steuerklasseValue === 5:
        netto = bruttoValue * 0.9;
        break;
      case steuerklasseValue === 6:
        netto = bruttoValue * 0.95;
        break;
    }

    netto = netto?.toFixed(2);

    result.textContent = `Nettogehalt: ${netto} €`;
  }
};

button?.addEventListener("click", calcNetto);
