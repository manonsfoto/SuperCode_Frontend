// !============================================
// !=============== Level-1_4 ==================
// !============================================
type Pet = {
  tiertyp: string;
  namen: string[];
};

let unsereHaustiere: Pet[] = [
  {
    tiertyp: "Katze",
    namen: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    namen: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere[0].namen[1]);
console.log(unsereHaustiere[1].namen[2]);
console.log(unsereHaustiere[0].namen);
console.log(unsereHaustiere[1].namen);

unsereHaustiere[1].namen[2] = "Snoppy";
unsereHaustiere[0].namen[2] = "Pinky";
console.log(unsereHaustiere[0].namen);
console.log(unsereHaustiere[1].namen);

const hamster: Pet = { tiertyp: "Hamster", namen: ["haha", "hoho", "hihi"] };

unsereHaustiere.push(hamster);

console.log(unsereHaustiere);
// !============================================
// !=============== Level-1_5 ==================
// !============================================
console.log("----------------------------------");
type Lager = {
  schreibtisch: {
    schublade: string;
  };
  schrank: {
    "Obere Schublade": {
      Ordner1: string;
      Ordner2: string;
    };
    "Untere Schublade": string;
  };
};

let unserLager: Lager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schreibtisch.schublade);
console.log(unserLager.schrank["Untere Schublade"]);

// !============================================
// !=============== Level-1_6 ==================
// !============================================
console.log("----------------------------------");
type Musik = {
  kunstler: string;
  title: string;
  release_jahr: number;
  formate: string[];
  gold: boolean;
};

let meineTopVier: Musik[] = [
  {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

console.log(meineTopVier[0].kunstler);
console.log(meineTopVier[1].formate[3]);
console.log(meineTopVier[1].gold);
console.log(
  meineTopVier[2].release_jahr + " und " + meineTopVier[3].release_jahr
);
console.log(meineTopVier[3].formate[2]);
const rideText = meineTopVier[3].title;
console.log(rideText);
console.log(rideText.slice(rideText.indexOf("R"), rideText.indexOf(" the")));

const newMusik: Musik = {
  kunstler: "Aespa",
  title: "Super Nova",
  release_jahr: 2024,
  formate: ["Download", "CD"],
  gold: false,
};

meineTopVier.push(newMusik);
console.log(meineTopVier);

// !============================================
// !=============== Level-1_7 ==================
// !============================================
console.log("----------------------------------");

type Music = {
  artist: string;
  title: string;
  release_year: number;
  medium: string[];
  gold: boolean;
};

let myTopFour: Music[] = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

const output = document.querySelector("#output") as HTMLElement;
myTopFour.forEach((ojt) => {
  output.innerHTML += `<p>${ojt.artist}</p>
    <p>${ojt.title}</p>
    <p>${ojt.medium}</p><br>`;
});

// --bonus aufgabe
myTopFour.forEach((ojt) => {
  if (ojt.release_year < 1975) {
    console.log(ojt);
  }
});

// !============================================
// !=============== Level-1_8 ==================
// !============================================
console.log("----------------------------------");

type Address = {
  street: string;
  city: string;
  postalCode: string;
};

type Student = {
  name: string;
  age: number;
  coop: boolean;
  address: Address;
  emails: string[];
};

let studentData: Student[] = [
  {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
      street: "Don Valley Business Park",
      city: "Toronto",
      postalCode: "ONM3C3E5",
    },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"],
  },
  {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
      street: "34 Lawrence Ave",
      city: "Toronto",
      postalCode: "ONM3C0E5",
    },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"],
  },
];

console.log(studentData);

const outputfunction = (objName: Student[]) => {
  objName.map((elt: Student) => {
    console.log(elt.name);
    console.log(elt.coop);
    console.log(elt.emails);
  });
  const cities: string[] = objName.map((elt) => elt.address.city);
  console.log(cities);
};

outputfunction(studentData);
