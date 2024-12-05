import { evenOdd } from "./evenOdd";

describe("evenOdd", () => {
  it("should return an empty array for n = 0", () => {
    expect(evenOdd(0)).toEqual([]);
  });

  it('should return ["Odd"] for n = 1', () => {
    expect(evenOdd(1)).toEqual(["Odd"]);
  });

  it('should return ["Odd", "Even"] for n = 2', () => {
    expect(evenOdd(2)).toEqual(["Odd", "Even"]);
  });

  it("should correctly handle a small range (n = 5)", () => {
    expect(evenOdd(5)).toEqual(["Odd", "Even", "Odd", "Even", "Odd"]);
  });

  it("should correctly handle a larger range (n = 10)", () => {
    expect(evenOdd(10)).toEqual([
      "Odd",
      "Even",
      "Odd",
      "Even",
      "Odd",
      "Even",
      "Odd",
      "Even",
      "Odd",
      "Even",
    ]);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => evenOdd(-1)).toThrow();
  });

  it("should throw an error for non-integer inputs", () => {
    expect(() => evenOdd(3.5)).toThrow();
  });
});
