const schoolGrade: number = Math.ceil(Math.random() * 10);

console.log("Schoold Grade: " + schoolGrade);

switch (schoolGrade) {
  case 1:
    console.log("sehr gut");
    break;
  case 2:
    console.log("gut");
    break;
  case 3:
    console.log("befriedigend");
    break;
  case 4:
    console.log("ausreichend");
    break;
  case 5:
    console.log("mangelhaft");
    break;
  case 6:
    console.log("ungenügend");
    break;
  default:
    console.log("Das ist keine gültige Schulnote.");
}
