const favoritePeople: string[] = [
  "Conan O'Brien",
  "Giulia Becker",
  "Chris Sommer",
];
console.log(favoritePeople);
let firstPerson: string = favoritePeople.shift()!;
console.log("Entfernt:" + firstPerson);
console.log(favoritePeople);
