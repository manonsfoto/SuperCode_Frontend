export function evenOdd(n: number) {
  const result: string[] = [];
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result.push("Even");
    } else {
      result.push("Odd");
    }
  }
  return result;
}
