describe("cleanAndReverseString", () => {
  it("should return '' if '' is given", () => {
    expect(cleanAndReverseString("")).toEqual("");
  });
  it("should return 'olleh' if hello is given", () => {
    expect(cleanAndReverseString("hello")).toEqual("olleh");
  });

  it('should return "olleh", if " hello " with spaces is given', () => {
    expect(cleanAndReverseString(" hello ")).toEqual("olleh");
  });

  it('should return "oleh", if ”h?el&o” is given', () => {
    expect(cleanAndReverseString("h?el&o")).toEqual("oleh");
  });
  it('should return "3olleh", if ”hello3” is given', () => {
    expect(cleanAndReverseString("hello3")).toEqual("3olleh");
  });
});

// ^==============================================

const cleanAndReverseString = (str: string): string => {
  const result = str
    .trim()
    .split("")
    .reverse()
    .join("")
    .replace(/[^a-zA-Z0-9\s]/g, ""); //Alle Sonderzeichen sollen vorher entfernt werden.
  return result;
};
