import { emojiList } from "./emojiList";
describe("replaceWithEmoji", () => {
  it("should return '',if '' is given ", () => {
    const result = replaceWithEmoji("");
    expect(result).toEqual("");
  });
  it("should return 'I ❤️ 🍕',if 'I love pizza' is given ", () => {
    const result = replaceWithEmoji("I love pizza");
    expect(result).toEqual("I ❤️ 🍕");
  });
  it("should return '🐱 are 🥰!',if 'Cats are great!' is given ", () => {
    const result = replaceWithEmoji("Cats are great !");
    expect(result).toEqual("🐱 are 🥰 !");
  });

  it("should handle case insensitivity", () => {
    expect(replaceWithEmoji("I Love pizza")).toEqual("I ❤️ 🍕");
  });
  it("should handle complicated sentence", () => {
    expect(
      replaceWithEmoji(
        "I'm reading a book having a coffee and a piece of cake. I am happy"
      )
    ).toEqual("I'm reading a 📖 having a ☕ and a piece of 🍰. I am 😊");
  });
});

// ^==============================================

const replaceWithEmoji = (str: string): string => {
  const resultString: string = str
    .split(" ")
    .map((word) => {
      const trimmedWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
      const emoji = emojiList[trimmedWord];
      return emoji ? emoji + word.slice(trimmedWord.length) : word;
    })
    .join(" ");
  return resultString;
};
