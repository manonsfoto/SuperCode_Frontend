type BasicColors = "RED" | "BLUE" | "GREEN" | "YELLOW" | "BLACK" | "WHITE";
type RealColors = Exclude<BasicColors, "BLACK" | "WHITE">;

function showColors(param: RealColors) {
  console.log(param);
}

// showColors("BLACK");
showColors("YELLOW");
