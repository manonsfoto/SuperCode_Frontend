const whereIsSusi = "Susi is back from codingschool";
console.log(whereIsSusi.substring(0, 4));
console.log(whereIsSusi.substring(5, 7));
console.log(whereIsSusi.substring(24));
console.log(
  whereIsSusi
    .substring(0, 4)
    .concat(" ", whereIsSusi.substring(5, 7), " ", whereIsSusi.substring(24))
);
