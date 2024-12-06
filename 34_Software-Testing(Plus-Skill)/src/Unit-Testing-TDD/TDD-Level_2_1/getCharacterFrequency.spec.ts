describe("getCharacterFrequency", () => {
  it("should return {}, if  '' is given", () => {
    expect(getCharacterFrequency("")).toEqual({});
  });
  it("should return {a: 2, b: 1}, if  'aab' is given", () => {
    expect(getCharacterFrequency("aab")).toEqual({ a: 2, b: 1 });
  });
  it("should return {a: 2, b: 1}, if  'Aab' is given", () => {
    expect(getCharacterFrequency("Aab")).toEqual({ a: 2, b: 1 });
  });

  it("should handle strings with unique characters", () => {
    const result = getCharacterFrequency("abc");
    expect(result).toEqual({ a: 1, b: 1, c: 1 });
  });
  it("should handle strings with repeated characters", () => {
    const result = getCharacterFrequency("aaabbb");
    expect(result).toEqual({ a: 3, b: 3 });
  });
});

// ^==============================================

const getCharacterFrequency = (str: string): Record<string, number> => {
  const resultArr: Record<string, number> = {};
  const trimmedStr: string = str.trim().toLowerCase();

  for (const char of trimmedStr) {
    resultArr[char] = (resultArr[char] || 0) + 1;
  }

  return resultArr;
};
