const whereIsSam = "Sam is going to school";

console.log(whereIsSam.toUpperCase());
console.log(whereIsSam.toLowerCase());

console.log(
  whereIsSam
    .toUpperCase()
    .replace(
      whereIsSam.substring(4, 15).toUpperCase(),
      whereIsSam.substring(4, 15)
    )
);
console.log(
  whereIsSam.replace(
    whereIsSam.substring(4, 15),
    whereIsSam.substring(4, 15).toUpperCase()
  )
);

console.log(
  whereIsSam
    .slice(0, 15)
    .replace(whereIsSam.charAt(4), whereIsSam.charAt(4).toUpperCase())
    .replace(whereIsSam.charAt(7), whereIsSam.charAt(7).toUpperCase())
    .replace(whereIsSam.charAt(13), whereIsSam.charAt(13).toUpperCase()) +
    whereIsSam
      .slice(15)
      .replace(
        whereIsSam.slice(16).charAt(0),
        whereIsSam.slice(16).charAt(0).toUpperCase()
      )
);
