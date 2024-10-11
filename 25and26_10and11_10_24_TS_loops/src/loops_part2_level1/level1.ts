// ===================================
// ============ Level 1_3 ============
// ===================================
let counter = 0;
while (counter < 10) {
  console.log("Hallo World " + counter);
  counter++;
}

console.log("=========================");

// ===================================
// ============ Level 1_7 ============
// ===================================
const output = document.querySelector("#output") as HTMLElement;

let counter2: number = 1;
do {
  output.innerHTML += `The number is ${counter2}<br>`;
  counter2++;
} while (counter2 < 6);
