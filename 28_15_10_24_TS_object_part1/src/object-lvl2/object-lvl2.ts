// !============================================
// !=============== Level-2_1 ==================
// !============================================

type EdelmetallPreis = {
  name: string;
  preiseGramEuro: number;
  veraenderung: string;
};

let edelMetallPreise: EdelmetallPreis[] = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];
// name
const nameArr1: string[] = [];
edelMetallPreise.forEach((singleArr) => nameArr1.push(singleArr.name));
console.log(nameArr1);

const nameArr2: string[] = edelMetallPreise.map((singleArr) => singleArr.name);
console.log(nameArr2);

// preiseGramEuro

const preiseGramEuroArr1: number[] = [];
edelMetallPreise.forEach((singleArr) =>
  preiseGramEuroArr1.push(singleArr.preiseGramEuro)
);
console.log(preiseGramEuroArr1);

const preiseGramEuroArr2: number[] = edelMetallPreise.map(
  (singleArr) => singleArr.preiseGramEuro
);
console.log(preiseGramEuroArr2);

// veraenderung
const veraenderungArr1: string[] = [];
edelMetallPreise.forEach((singleArr) =>
  veraenderungArr1.push(singleArr.veraenderung)
);
console.log(veraenderungArr1);

const veraenderungArr2: string[] = edelMetallPreise.map(
  (singleArr) => singleArr.veraenderung
);
console.log(veraenderungArr2);

// filter()

const filteredArr: EdelmetallPreis[] = edelMetallPreise.filter(
  (elt) => elt.preiseGramEuro > 50
);

console.log(filteredArr);
// Tabelle
const reihe1 = document.querySelector("#reihe1") as HTMLElement;
const reihe2 = document.querySelector("#reihe2") as HTMLElement;
const reihe3 = document.querySelector("#reihe3") as HTMLElement;

edelMetallPreise.forEach((singleObj) => {
  reihe1.innerHTML += `<p>${singleObj.name}</p>
`;
});
edelMetallPreise.forEach((singleObj) => {
  reihe2.innerHTML += `<p>${singleObj.preiseGramEuro}</p>
`;
});
edelMetallPreise.forEach((singleObj) => {
  reihe3.innerHTML += `<p>${singleObj.veraenderung}</p>
`;
});

// !============================================
// !=============== Level-2_2 ==================
// !============================================
console.log("----------------------------------");

type PeriodActive = {
  start: number;
  end: number | string;
  extra?: number;
};

type Singer = {
  name: string;
  country: string;
  period_active: PeriodActive;
  genre: string;
};

const singers: Singer[] = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

const copyArr = [...singers];
const sortArr = copyArr.sort((a: Singer, b: Singer) => {
  return a.name.localeCompare(b.name);
});

console.log(sortArr);
const sortArr1 = copyArr.sort((a: Singer, b: Singer) => {
  return a.period_active.start - b.period_active.start;
});

console.log(sortArr1);

// !============================================
// !=============== Level-2_3 ==================
// !============================================
console.log("----------------------------------");

const TableReihe1 = document.querySelector("#TableReihe1") as HTMLElement;
const TableReihe2 = document.querySelector("#TableReihe2") as HTMLElement;
const TableReihe3 = document.querySelector("#TableReihe3") as HTMLElement;
const TableReihe4 = document.querySelector("#TableReihe4") as HTMLElement;
// singers.forEach((singleObj) => {
//   TableReihe1.innerHTML += `<p>${singleObj.name}</p>`;
// });
// singers.forEach((singleObj) => {
//   TableReihe2.innerHTML += `<p>${singleObj.country}</p>`;
// });
// singers.forEach((singleObj) => {
//   const period =
//     singleObj.period_active.start + " - " + singleObj.period_active.end;

//   TableReihe3.innerHTML += `<p>${period}</p>`;
// });
// singers.forEach((singleObj) => {
//   TableReihe4.innerHTML += `<p>${singleObj.genre}</p>`;
// });

// !============================================
// !=============== Level-2_4 ==================
// !============================================
console.log("----------------------------------");
const btnSortName = document.querySelector("#btnSortName") as HTMLInputElement;
const btnSortCountry = document.querySelector(
  "#btnSortCountry"
) as HTMLInputElement;
const btnSortGenre = document.querySelector(
  "#btnSortGenre"
) as HTMLInputElement;
const inputText = document.querySelector("#inputText") as HTMLInputElement;
const btnSearch = document.querySelector("#btnSearch") as HTMLInputElement;

const renderList = (Obj: Singer[]) => {
  TableReihe1.innerHTML = "";
  TableReihe2.innerHTML = "";
  TableReihe3.innerHTML = "";
  TableReihe4.innerHTML = "";
  Obj.forEach((singleObj: Singer) => {
    TableReihe1.innerHTML += `<p>${singleObj.name}</p>`;
  });
  Obj.forEach((singleObj) => {
    TableReihe2.innerHTML += `<p>${singleObj.country}</p>`;
  });
  Obj.forEach((singleObj) => {
    const period =
      singleObj.period_active.start + " - " + singleObj.period_active.end;

    TableReihe3.innerHTML += `<p>${period}</p>`;
  });
  Obj.forEach((singleObj) => {
    TableReihe4.innerHTML += `<p>${singleObj.genre}</p>`;
  });
};
renderList(singers);

btnSortName.addEventListener("click", () => {
  const sortNameArr = singers.sort((a: Singer, b: Singer) =>
    a.name.localeCompare(b.name)
  );
  renderList(sortNameArr);
});
btnSortCountry.addEventListener("click", () => {
  const sortCountryArr = singers.sort((a: Singer, b: Singer) =>
    a.country.localeCompare(b.country)
  );
  renderList(sortCountryArr);
});
btnSortGenre.addEventListener("click", () => {
  const sortGenreArr = singers.sort((a: Singer, b: Singer) =>
    a.genre.localeCompare(b.genre)
  );
  renderList(sortGenreArr);
});
btnSearch.addEventListener("click", () => {
  const filteredArr = singers.filter((obj) => {
    if (obj.name.toLowerCase().includes(inputText.value.toLowerCase())) {
      return obj;
    }
  });
  renderList(filteredArr);
});
