import IShape from "../contracts/IShape";

class Rectangle implements IShape {
  _name: string;
  _color: string;
  _width: number;
  _height: number;
  _isRound: boolean = false;

  constructor(name: string, color: string, width: number, height: number) {
    this._name = name;
    this._color = color;
    this._width = width;
    this._height = height;
  }

  public draw(): void {
    console.log("drawing rectangle");
  }
}

export default Rectangle;
