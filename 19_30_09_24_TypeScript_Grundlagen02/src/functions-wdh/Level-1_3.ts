function showPersonInfo(name: string, city: string, age: number) {
  console.log(
    `Hallo, mein Name ist ${name}. Ich bin ${age.toFixed(
      0
    )} Jahre alt. Ich komme aus ${city}.`
  );
}

showPersonInfo("Minyeong", "Busan", 33.8);
showPersonInfo("Philip", "Freiburg", 34.2);
