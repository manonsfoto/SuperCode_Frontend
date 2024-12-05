import { factorial } from "./factorial";

describe("factorial", () => {
  it("should return 1 for an input of 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 for an input of 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should correctly calculate the factorial for small positive integers", () => {
    expect(factorial(4)).toBe(24);
  });

  it("should correctly calculate the factorial for larger positive integers", () => {
    expect(factorial(10)).toBe(3628800);
  });

  it("should throw an error for negative inputs", () => {
    const callFactorialWithNegative = () => factorial(-1);
    expect(callFactorialWithNegative).toThrow(
      "Input must be a non-negative integer"
    );
  });

  it("should handle non-integer inputs gracefully", () => {
    const callFactorialWithFloat = () => factorial(2.5);
    expect(callFactorialWithFloat).toThrow(
      "Input must be a non-negative integer"
    );
  });
});
