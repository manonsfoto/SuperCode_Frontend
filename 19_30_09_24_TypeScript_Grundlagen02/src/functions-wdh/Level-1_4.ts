function showHero(heroName: string, heroPower: string, heroEnemy: String) {
  let nameOutput = "Mein:e Lieblingsheld:in ist: " + heroName;
  let powerOutput = "Er/sie hat die Fähigkeit: " + heroPower;
  let enemyOutput = "Sein/ihr größte/r Gegner:in ist: " + heroEnemy;
  console.log(nameOutput + " " + powerOutput + " " + enemyOutput);
}

showHero("Groot", "Regeneration und Wiederherstellung", "Thanos");
