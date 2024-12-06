describe("checkPalindrome", () => {
  it('should return true if "" is given', () => {
    const result = checkPalindrome("");
    expect(result).toBe(true);
  });
  it('should return true if "radar" is given', () => {
    const result = checkPalindrome("radar");
    expect(result).toBe(true);
  });
  it('should return true if "level" is given', () => {
    const result = checkPalindrome("level");
    expect(result).toBe(true);
  });

  it('should false if "hallo" is given', () => {
    expect(checkPalindrome("hallo")).toBe(false);
  });
});

// ^==============================================

const checkPalindrome = (str: string): boolean => {
  return str === str.split("").reverse().join("");
};
