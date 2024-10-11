const getNumberOfVowels = (text: string) => {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (const singleLetter of text) {
    if (vowels.includes(singleLetter)) {
      count++;
    }
  }
  return console.log(count);
};

getNumberOfVowels("halloooo");
getNumberOfVowels("minyeong");
