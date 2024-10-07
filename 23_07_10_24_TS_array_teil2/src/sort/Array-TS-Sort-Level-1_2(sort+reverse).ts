let codingLanguages: string[] = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

function sortDescending(a: string[]): string[] {
  return console.log(a.sort().reverse())!;
}

sortDescending(codingLanguages);

let europeanCountries: string[] = [
  "France",
  "Germany",
  "Sweden",
  "Great Britain",
  "Czech Republic",
  "Switzerland",
];

sortDescending(europeanCountries);
