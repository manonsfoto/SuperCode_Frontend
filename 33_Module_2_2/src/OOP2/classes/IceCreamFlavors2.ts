class IceCreamFlavor2 {
  _name: string;
  _price: number;
  _isPopular: boolean;
  _description?: string;

  constructor(
    name: string = "",
    price: number = 0,
    isPopular: boolean = false,
    description?: string
  ) {
    this._name = name;
    this._price = price;
    this._isPopular = isPopular;
    this._description = description;
  }

  getTotalPrice(numberOfScoops: number): number {
    console.log(numberOfScoops * this._price);

    return numberOfScoops * this._price;
  }

  printInfo() {
    console.log(
      `Flavor ${this._name} ${
        this._isPopular ? "is popular" : "is not popular"
      } and costs ${this._price} Euro.`
    );
  }

  getLengthOfDescription() {
    this._description ? console.log(this._description.length) : console.log(0);
  }
}

export default IceCreamFlavor2;
