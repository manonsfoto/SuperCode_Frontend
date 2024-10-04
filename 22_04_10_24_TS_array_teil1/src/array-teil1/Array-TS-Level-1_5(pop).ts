const bucketList: string[] = ["Barcelona", "Taipei", "LA"];
const luckyNumbers: number[] = [200, 2, 22];
const favoritePeople: string[] = [
  "Conan O'Brien",
  "Giulia Becker",
  "Chris Sommer",
];

console.log(bucketList);
let lastValueBucketList: string = bucketList.pop() as string;
console.log("Entfernt:" + lastValueBucketList);
console.log(bucketList);

console.log(luckyNumbers);
let lastValueLuckyNumbers: number = luckyNumbers.pop() as number;
console.log("Entfernt:" + lastValueLuckyNumbers);
console.log(luckyNumbers);

console.log(favoritePeople);
let lastValueFavoritePeople: string = favoritePeople.pop()!;
console.log("Entfernt:" + lastValueFavoritePeople);
console.log(favoritePeople);
