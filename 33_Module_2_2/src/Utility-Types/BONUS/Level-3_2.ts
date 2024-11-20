interface ITea {
  name: string;
  type: string;
  temperature: number;
  brewingTime: number;
}

type OmitTea = Omit<ITea, "temperature">;
type PickTea = Pick<ITea, "name" | "type">;
type RequiredTea = Required<ITea>;
type ReadonlyTea = Readonly<ITea>;

const omitTea: OmitTea = {
  name: "",
  type: "green",
  brewingTime: 3,
};
const pickTea: PickTea = {};
const requiredTea: RequiredTea = {};
const readonlyTea: ReadonlyTea = {};
