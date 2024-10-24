import Actor from "./classes/Actor";
import Episode from "./classes/Episode";
import Series from "./classes/Series";

const series_1 = new Series(
  "WandaVision",
  "Wanda und Vision durchleben in einem Mix aus Zeitlinien Sitcoms in den 1950er bis -90er Jahren. Die beiden haben sich ein harmonisches Liebesleben aufgebaut, aber es gerät alles außer Kontrolle, als die Wahrheit allmählich aufgedeckt wird.",
  2021,
  2021,
  []
);

// ?=========================================================

const episode_1_S1 = new Episode(
  "Nicht umschalten!",
  50,
  "Wanda und Vision führen vor ihrem frischen Bekanntenkreis einen Zaubertrick auf. Während Vision jedoch Sicherheitsvorschläge bei der Nachbarschaftswache hat, verklebt er sich mit einem Kaugummi seine Systeme und wirkt dadurch beim Auftritt betrunken.",
  []
);
const episode_2_S1 = new Episode(
  "Jetzt in Farbe",
  40,
  "Die Schwangerschaft von Wanda entwickelt sich durch ihre Kräfte schneller als gedacht. Vision lässt aber nichts unversucht, um den behandelnden Arzt, der kurz vor der Abreise steht, noch pünktlich zur Geburt zu ihm nach Hause zu bringen.",
  []
);
series_1.addEpisode(episode_1_S1);
series_1.addEpisode(episode_2_S1);

// ?=========================================================

const actor_1 = new Actor("Elizabeth", "Olsen", "1989-02-23", "Female");
const actor_2 = new Actor("Paul", "Bettany", "1971-05-27", "Male");

episode_1_S1.addActor(actor_1);
episode_1_S1.addActor(actor_2);
episode_2_S1.addActor(actor_1);
episode_2_S1.addActor(actor_2);
// !=========================================================

const series_2 = new Series(
  "Stranger Things",
  "In einer Kleinstadt in Indiana verschwindet der 12-jährige Will Byers. Vor allem seine alleinerziehende Mutter macht sich Sorgen. Wills Freunde machen sich unterdessen auf die Suche nach ihm und kommen dabei noch anderen Geheimnissen auf die Spur.",
  2016,
  2025,
  []
);

// ?=========================================================

const episode_1_S2 = new Episode(
  "Kapitel eins:Suzie, hörst du mich?",
  55,
  "Dustin kehrt aus dem Sommercamp zurück, während Elf und Mike offiziell ein Paar sind. Außerdem arbeitet Steve in der Mall, während Nancy und Jonathan Sommerjobs bei der Lokalzeitung haben, bei der Nancy eine Story wegen verwesenden Ratten wittert.",
  []
);
const episode_2_S2 = new Episode(
  "Kapitel zwei:Ratten",
  45,
  "Billy bemerkt, dass mit ihm etwas nicht stimmen und Mike lügt Elf wegen Hopper an. Daher spricht sich Elf mit Max aus und macht Schluss mit Mike. Dustin empfängt über sein Radio einen geheimen Code und Nancy will mehr über die Ratten herausfinden.",
  []
);
series_2.addEpisode(episode_1_S2);
series_2.addEpisode(episode_2_S2);

// ?=========================================================
const actor_3 = new Actor("Millie", "Bobby Brown", "2004-02-19", "Female");
const actor_4 = new Actor("Finn", "Wolfhard", "2002-12-23", "Male");

episode_1_S2.addActor(actor_3);
episode_1_S2.addActor(actor_4);
episode_2_S2.addActor(actor_3);
episode_2_S2.addActor(actor_4);
// !=========================================================

const series_3 = new Series(
  "Black Mirror",
  "Die unabhängigen einzelnen Zukunftsvisionen erzählen von einem düsteren Leben der Menschheit im Technologiezeitalter. Die Abhängigkeit und die Prägung von moderner Technik sowie der negativen Auswirkungen durch sie stehen dabei im Fokus.",
  2011,
  2023,
  []
);

// ?=========================================================

const episode_1_S3 = new Episode(
  "San Junipero",
  40,
  "Als zwei Frauen im Jahr 1987 die Küstenstadt San Junipero besuchen, entwickeln die zwei extrem unterschiedlichen Charaktere, Yorkie und Kelly eine spezielle Verbindung zu einander. Diese scheint Zeit und Raum vollkommen zu trotzen",
  []
);
const episode_2_S3 = new Episode(
  "Männer aus Stahl",
  45,
  "In der Zukunft müssen Soldaten verängstigte Dorfbewohner beschützen, denn sie werden von bösen und verwilderten Mutanten bedroht. Einer dieser Soldaten hat während seines ersten Kampfes ein ziemlich merkwürdiges Erleb",
  []
);
series_3.addEpisode(episode_1_S3);
series_3.addEpisode(episode_2_S3);

// ?=========================================================
const actor_5 = new Actor("Alex", "Lawther", "1995-05-04", "Male");
const actor_6 = new Actor("Mackenzie", "Davis", "1987-04-01", "Female");

episode_1_S3.addActor(actor_5);
episode_1_S3.addActor(actor_6);
episode_2_S3.addActor(actor_5);
episode_2_S3.addActor(actor_6);

// !=========================================================
// !=========================================================

function printSeriesInfo(series: Series) {
  const actorArraysOfSeries = series._episodes.map((episode) => {
    return episode._actors;
  });

  const allActors: Actor[] = [];
  actorArraysOfSeries.forEach((actorArr) => {
    actorArr.forEach((actor) => {
      allActors.push(actor);
    });
  });

  const keineDoppeltenActorsArr: Actor[] = [];
  allActors.forEach((actor) => {
    if (!keineDoppeltenActorsArr.includes(actor)) {
      keineDoppeltenActorsArr.push(actor);
    }
  });

  const seriesInfo = `
  Title: ${series._title}
  Description: ${series._description}
  Start Year: ${series._startYear}
  End Year: ${series._endYear}
  Number of Episodes: ${series._episodes.length}

  Actors:${keineDoppeltenActorsArr
    .map((actor) => {
      return `- Name: ${actor._firstName} ${actor._lastName}
        - Birthday: ${actor._birthday}
        - Gender: ${actor._gender}
        `;
    })
    .join("")}
  `;
  console.log(seriesInfo);
}

printSeriesInfo(series_1);
printSeriesInfo(series_2);
printSeriesInfo(series_3);
