import { areAnagrams } from "./anagrams";

describe("anagrams", () => {
  it("should return true for simgle anagrams", () => {
    const result = areAnagrams("Elvis", "Lives");
    expect(result).toBe(true);
  });
  it("should return false for strings that are not anagrams", () => {
    const result = areAnagrams("Minyeong", "Philip");
    expect(result).toBe(false);
  });
  it("should return true for anagrams with different cases", () => {
    const result = areAnagrams("Listen", "SILEnt");
    expect(result).toBe(true);
  });
  it("should return true for anagrams with spaces", () => {
    const result = areAnagrams("Done", "O end");
    expect(result).toBe(true);
  });
  it("should return true for empty strings", () => {
    const result = areAnagrams("", "");
    expect(result).toBe(true);
  });
  it("should return false if only one string is empty", () => {
    const result = areAnagrams("abc", "");
    expect(result).toBe(false);
  });
  it("should return false for strings with special characters", () => {
    const result = areAnagrams("Espaniol", "Ole, Spain!");
    expect(result).toBe(false);
  });
  it("should return true for strings with numbers", () => {
    const result = areAnagrams("12345", "23145");
    expect(result).toBe(true);
  });
});
