function reverse(a: string): string {
  return console.log(a.split("").reverse().join(""))!;
}

reverse("Minyeong");
reverse("Sergio");
reverse("Hannah");
reverse("Regallager");
reverse("Reliefpfeiler");
reverse("Rentner");
reverse("Ella mag alle Bohnen");
reverse("han nesaH has ennaH");

function reverseWord(a: string): string {
  const ConvertArr: string[] = a.split(" ");
  const ConvertMap: string[] = ConvertArr.map((b) => {
    return b.split("").reverse().join("");
  });
  return console.log(ConvertMap.join(" "))!;
}

reverseWord("Ella mag alle Bohnen");
reverseWord("han nesaH has ennaH");
