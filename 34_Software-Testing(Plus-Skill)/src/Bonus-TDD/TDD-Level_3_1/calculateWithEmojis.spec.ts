describe("calculateWithEmojis", () => {
  it("should return 5, if (2️⃣,➕,3️⃣) is given ", () => {
    const result = calculateWithEmojis("2️⃣", "➕", "3️⃣");
    expect(result).toBe(5);
  });
  it("should return 5, if (7️⃣,➖,2️⃣) is given ", () => {
    const result = calculateWithEmojis("7️⃣", "➖", "2️⃣");
    expect(result).toBe(5);
  });
  it("should return 75, if (7️⃣7️⃣,➖,2️⃣) is given ", () => {
    const result = calculateWithEmojis("7️⃣7️⃣", "➖", "2️⃣");
    expect(result).toBe(75);
  });
  it("should throw Error, if  (🤮,➕,3️⃣)  is given ", () => {
    expect(() => calculateWithEmojis("🤮", "➕", "3️⃣")).toThrow(
      "1. Parameter konnte nicht in eine Zahl umgewandelt werden."
    );
  });
  it("should throw Error, if  (7️⃣,➖, ⚠️)  is given ", () => {
    expect(() => calculateWithEmojis("7️⃣", "➖", "⚠️")).toThrow(
      "3. Parameter konnte nicht in eine Zahl umgewandelt werden."
    );
  });
  it("should throw Error, if  (7️⃣,😵‍💫,2️⃣)  is given ", () => {
    expect(() => calculateWithEmojis("7️⃣", "😵‍💫", "2️⃣")).toThrow(
      "2. Parameter konnte nicht in eine Zahl umgewandelt werden."
    );
  });
  it("should return 539, if (7️⃣7️⃣2️⃣,➖,2️⃣3️⃣3️⃣) is given  ", () => {
    const result = calculateWithEmojis("7️⃣7️⃣2️⃣", "➖", "2️⃣3️⃣3️⃣");
    expect(result).toBe(539);
  });
});

// ^==============================================

const convertEmojiToNumber = (emoji: string): number => {
  const emojiToNum = Number(
    [...emoji]
      .filter((elt) => {
        const eltToNumber = Number(elt);
        return !isNaN(eltToNumber);
      })
      .join("")
  );

  return emojiToNum;
};

const checkInvalidParameter = (emoji: string, index: number): void => {
  const invalidParam1 = [...emoji].filter((elt) => {
    const eltToNumber = Number(elt);
    return !isNaN(eltToNumber);
  });
  if (invalidParam1.length === 0) {
    throw new Error(
      `${index}. Parameter konnte nicht in eine Zahl umgewandelt werden.`
    );
  }
};

const calculateWithEmojis = (
  emoji1: string,
  operationEmoji: string,
  emoji2: string
): number => {
  checkInvalidParameter(emoji1, 1);
  checkInvalidParameter(emoji2, 3);

  const numEmoji1 = convertEmojiToNumber(emoji1);
  const numEmoji2 = convertEmojiToNumber(emoji2);

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
    default:
      throw new Error(
        `2. Parameter konnte nicht in eine Zahl umgewandelt werden.`
      );
  }
  return resultNum;
};
