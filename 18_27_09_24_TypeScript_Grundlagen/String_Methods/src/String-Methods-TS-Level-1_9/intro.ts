const infoAboutSam = "Sam is going to codingschool";
const susi = "Susi";
const and = "and";
const movie = "the movie theater";

console.log(infoAboutSam.concat(" ", and, " ", movie));
console.log(infoAboutSam.slice(0, 16).concat(movie.slice(4)));
console.log(
  susi.concat(
    " ",
    and,
    " ",
    infoAboutSam.replace("is", "are").replace("codingschool", "school")
  )
);
console.log(
  susi.concat(
    " ",
    and,
    " ",
    infoAboutSam.replace("is", "are").replace("codingschool", "the gym"),
    " ",
    and,
    " ",
    movie
  )
);
console.log(
  infoAboutSam.replace("Sam", susi).replace("codingschool", "school"),
  and,
  movie
);
