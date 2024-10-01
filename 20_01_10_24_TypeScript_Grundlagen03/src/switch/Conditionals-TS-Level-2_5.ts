const bundeslandInfo = document.querySelector(
  "#bundeslandInfo"
) as HTMLInputElement;

const bundeslandInfoErgebnis = document.querySelector(
  "#bundeslandInfoErgebnis"
) as HTMLElement;

const Checkbtn = document.querySelector("#checkBtn") as HTMLInputElement;

function check() {
  switch (bundeslandInfo.value) {
    case "Baden-Württemberg":
      bundeslandInfoErgebnis.innerText =
        "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
      break;
    case "Bayern":
      bundeslandInfoErgebnis.innerText =
        "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
      break;
    case "Berlin":
      bundeslandInfoErgebnis.innerText =
        "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
      break;
    case "Brandenburg":
      bundeslandInfoErgebnis.innerText =
        "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
      break;
    case "Bremen":
      bundeslandInfoErgebnis.innerText =
        "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
      break;
    case "Hamburg":
      bundeslandInfoErgebnis.innerText =
        "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
      break;
    case "Hessen":
      bundeslandInfoErgebnis.innerText =
        "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
      break;
    case "Mecklenburg-Vorpommern":
      bundeslandInfoErgebnis.innerText =
        "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
      break;
    case "Baden-Württemberg":
      bundeslandInfoErgebnis.innerText =
        "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
      break;
    case "Niedersachsen":
      bundeslandInfoErgebnis.innerText =
        "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
      break;
    case "Nordrhein-Westfalen":
      bundeslandInfoErgebnis.innerText =
        "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
      break;
    case "Rheinland-Pfalz":
      bundeslandInfoErgebnis.innerText =
        "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadtt";
      break;
    case "Saarland":
      bundeslandInfoErgebnis.innerText =
        "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
      break;
    case "Sachsen":
      bundeslandInfoErgebnis.innerText =
        "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
      break;
    case "Sachsen-Anhalt":
      bundeslandInfoErgebnis.innerText =
        "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
      break;
    case "Schleswig-Holstein":
      bundeslandInfoErgebnis.innerText =
        "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
      break;
    case "Thüringen":
      bundeslandInfoErgebnis.innerText =
        "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
      break;

    default:
      bundeslandInfoErgebnis.innerText =
        "Ein solches Bundesland gibt es in Deutschland nicht.";
  }
}
Checkbtn.addEventListener("click", check);
