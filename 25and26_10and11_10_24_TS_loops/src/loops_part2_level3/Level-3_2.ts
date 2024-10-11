let numbers: number[] = [5, 22, 15, 100, 55];
const result = document.querySelector("#result") as HTMLElement;

for (const Num of numbers) {
  for (let i: number = 2; i < Num; i++) {
    if (Num % i === 0 && Num !== i) {
      result.innerHTML += `<p>${Num} is devidable by ${i}. The result is: ${
        Num / i
      }</p>`;
    }
  }
}
