// ^================================================================
// ^================ Utility-Types-TS-Level-1_1 ====================
// ^================================================================

interface IBook {
  author: string;
  name: string;
  publishingYear: string;
  shortDescription?: string;
  numberOfPages: number;
}

type PartialBook = Partial<IBook>;

const partialBook: PartialBook = {
  author: "Seth Godin",
  name: "Purple Cow: Transform Your Business by Being Remarkable  ",
};

interface IPartialBook extends Partial<IBook> {}

const partialBook2: IPartialBook = {
  name: "Stick",
};

// ^================================================================
// ^================ Utility-Types-TS-Level-1_2 ====================
// ^================================================================

type BasicBook = Omit<IBook, "publishingYear" | "shortDescription">;

const basicBook: BasicBook = {
  author: "Walter Isaacson ",
  name: "Elon Musk",
  numberOfPages: 688,
};

interface IBasicBook
  extends Omit<IBook, "publishingYear" | "shortDescription"> {}

const basicBook2: IBasicBook = {
  author: "Walter Isaacson ",
  name: "Elon Musk",
  numberOfPages: 688,
};

// ^================================================================
// ^================ Utility-Types-TS-Level-1_3 ====================
// ^================================================================

type BookDescription = Pick<IBook, "name" | "shortDescription">;
const bookDescription: BookDescription = {
  name: "Stick",
};

interface IBookDescription extends Pick<IBook, "name" | "shortDescription"> {}
const bookDescription2: IBookDescription = {
  name: "Stick",
};

// ^================================================================
// ^================ Utility-Types-TS-Level-1_4 ====================
// ^================================================================
type RequiredBook = Required<IBook>;
const requiredBook: RequiredBook = {
  author: "Walter Isaacson ",
  name: "Elon Musk",
  publishingYear: "2023",
  shortDescription:
    "Aus dem Englischen übersetzt-Elon Musk ist eine autorisierte Biografie des amerikanischen Wirtschaftsmagnaten und SpaceX/Tesla-CEO Elon Musk.",
  numberOfPages: 688,
};

interface IRequiredBook extends Required<IBook> {}
const requiredBook2: IRequiredBook = {
  author: "Walter Isaacson ",
  name: "Elon Musk",
  publishingYear: "2023",
  shortDescription:
    "Aus dem Englischen übersetzt-Elon Musk ist eine autorisierte Biografie des amerikanischen Wirtschaftsmagnaten und SpaceX/Tesla-CEO Elon Musk.",
  numberOfPages: 688,
};

// ^================================================================
// ^================ Utility-Types-TS-Level-1_5 ====================
// ^================================================================
type ReadOnlyBook = Readonly<IBook>;
const readonlyBook: ReadOnlyBook = {
  author: "Walter Isaacson ",
  name: "Elon Musk",
  publishingYear: "2023",
  numberOfPages: 688,
};

// readonlyBook.name="hahaha"
interface IReadOnlyBook extends Readonly<IBook> {}
const readonlyBook2: IReadOnlyBook = {
  author: "Walter Isaacson ",
  name: "Elon Musk",
  publishingYear: "2023",
  numberOfPages: 688,
};
// readonlyBook2.publishingYear="1990"

// ^================================================================
// ^================ Utility-Types-TS-Level-1_7 ====================
// ^================================================================
interface IDonkey {
  name: string;
  age: number;
  fluffyness: number;
  favoriteFood: string;
}
enum Donkey {
  Daisy,
  Gus,
  Rosie,
  Coco,
  Jasper,
}

type TDonkey = Record<Donkey, IDonkey>;

const donkeys: TDonkey = {
  0: {
    name: "Daisy",
    age: 2,
    fluffyness: 1,
    favoriteFood: "carrot",
  },
  1: {
    name: "Gus",
    age: 1,
    fluffyness: 3,
    favoriteFood: "cabbage",
  },
  2: {
    name: "Rosie",
    age: 4,
    fluffyness: 4,
    favoriteFood: "cucumber",
  },
  3: {
    name: "Coco",
    age: 2,
    fluffyness: 4,
    favoriteFood: "apple",
  },
  4: {
    name: "Jasper",
    age: 5,
    fluffyness: 5,
    favoriteFood: "hay",
  },
};

console.log(donkeys);
console.log(Donkey.Daisy);
