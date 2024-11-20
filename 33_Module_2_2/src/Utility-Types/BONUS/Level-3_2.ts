interface ITea {
  name: string;
  type: string;
  temperature: number;
  brewingTime: number;
}

function prepareTea(tea: ITea): void {
  if (!tea.name || !tea.brewingTime) {
    console.error(
      "Error: 'name' and 'brewingTime' are required to prepare tea."
    );
    return;
  }
  console.log(`Preparing ${tea.name} - will be ready in ${tea.brewingTime}`);
}
type OmitTea = Omit<ITea, "temperature">;
type PickTea = Pick<ITea, "name" | "brewingTime">;
type RequiredTea = Required<ITea>;
type ReadonlyTea = Readonly<ITea>;

const omitTea: OmitTea = {
  name: "Chamomile",
  type: "No Caffeine",
  brewingTime: 3.5,
};
const pickTea: PickTea = {
  name: "Oolong",
  brewingTime: 2,
};
const requiredTea: RequiredTea = {
  name: "Peppermint",
  type: "No Caffeine",
  temperature: 60,
  brewingTime: 3,
};
const readonlyTea: ReadonlyTea = {
  name: "Sencha",
  type: "Caffeine",
  temperature: 50,
  brewingTime: 4,
};

// prepareTea(omitTea);
// prepareTea(pickTea);
prepareTea(requiredTea);
prepareTea(readonlyTea);
type TeaType =
  | "Green"
  | "Black"
  | "Rooibos"
  | "Peppermint"
  | "Oolong"
  | "Sencha"
  | "Chamomile";

type TeaTypeCaffeine = Exclude<TeaType, "Rooibos" | "Peppermint" | "Chamomile">;
type TeaTypeNoCaffeine = Exclude<
  TeaType,
  "Green" | "Black" | "Oolong" | "Sencha"
>;
class Tea implements ITea {
  name: string;
  type: TeaType;
  temperature: number;
  brewingTime: number;

  constructor(
    name: string,
    type: TeaType,
    temperature: number,
    brewingTime: number
  ) {
    this.name = name;
    this.type = type;
    this.temperature = temperature;
    this.brewingTime = brewingTime;
  }
}

class CaffeineTea extends Tea {
  type: TeaTypeCaffeine;

  constructor(
    name: string,
    type: TeaTypeCaffeine,
    temperature: number,
    brewingTime: number
  ) {
    super(name, type, temperature, brewingTime);
    this.type = type;
  }
}

const peppermintTea = new Tea("Peppermint", "Peppermint", 80, 2);
const blackTea = new CaffeineTea("Black tea", "Black", 70, 3);

console.log(peppermintTea);
console.log(blackTea);
