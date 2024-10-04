const oldHollywoodActors: string[] = [
  "Marlon Brando",
  "Audrey Hepburn",
  "Elizabeth Taylor",
  "Cary Grant",
  "Paul Newman",
  "Doris Day",
];
console.log(oldHollywoodActors);

const actorsReference: string[] = oldHollywoodActors;

actorsReference.push("Marilyn Monroe");
console.log(actorsReference);
console.log(oldHollywoodActors);

const copyOldHollywoodActors1: string[] = oldHollywoodActors.concat();
copyOldHollywoodActors1.pop();
copyOldHollywoodActors1.pop();
copyOldHollywoodActors1.pop();

const copyOldHollywoodActors2: string[] = oldHollywoodActors.slice();
copyOldHollywoodActors2.shift();

const copyOldHollywoodActors3: string[] = [...oldHollywoodActors];
copyOldHollywoodActors3.pop();
copyOldHollywoodActors3.shift();
console.log("------------------------------------");

console.log(oldHollywoodActors);
console.log(copyOldHollywoodActors1);
console.log(copyOldHollywoodActors2);
console.log(copyOldHollywoodActors3);
