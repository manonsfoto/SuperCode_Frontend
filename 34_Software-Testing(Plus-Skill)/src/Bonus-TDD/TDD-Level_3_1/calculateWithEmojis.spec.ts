describe("calculateWithEmojis", () => {
  it("should return 5, if (2️⃣,➕,3️⃣) is given ", () => {
    const result = calculateWithEmojis("2️⃣", "➕", "3️⃣");
    expect(result).toBe(5);
  });
  it("should return 5, if (7️⃣,➖,2️⃣) is given ", () => {
    const result = calculateWithEmojis("7️⃣", "➖", "2️⃣");
    expect(result).toBe(5);
  });
  it("should return 75, if ((7️⃣7️⃣,➖,2️⃣)) is given ", () => {
    const result = calculateWithEmojis("7️⃣7️⃣", "➖", "2️⃣");
    expect(result).toBe(75);
  });
});

// ^==============================================

const calculateWithEmojis = (
  emoji1: string,
  operationEmoji: string,
  emoji2: string
): number => {
  const numEmoji1 = Number(emojiNumberList[emoji1]);
  const numEmoji2 = Number(emojiNumberList[emoji2]);
  let resultNum: number = 0;
  switch (operationEmoji) {
    case "➕":
      resultNum = numEmoji1 + numEmoji2;
      break;
    case "➖":
      resultNum = numEmoji1 - numEmoji2;
      break;
    case "✖️":
      resultNum = numEmoji1 * numEmoji2;
      break;
    case "➗":
      resultNum = numEmoji1 / numEmoji2;
      break;
  }
  return resultNum;
};

const emojiNumberList: Record<string, string> = {
  "0️⃣": "0",
  "1️⃣": "1",
  "2️⃣": "2",
  "3️⃣": "3",
  "4️⃣": "4",
  "5️⃣": "5",
  "6️⃣": "6",
  "7️⃣": "7",
  "8️⃣": "8",
  "9️⃣": "9",
};
