class Intgeration {
  constructor() {
    this._title = "";
    this._type = "";
    this._name = "";
    this._sourceSide = Object;
    this._targetSide = Object;
  }
}

class IntegrationSide {
  get iconLetter() {
    return this._iconLetter;
  }
  set iconLetter(value) {
    this._iconLetter = value;
  }
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }
  get kind() {
    return this._kind;
  }
  set kind(value) {
    this._kind = value;
  }
  get schema() {
    return this._schema;
  }
  set schema(value) {
    this._schema = value;
  }
  get model() {
    return this._model;
  }
  set model(value) {
    this._model = value;
  }
  constructor() {
    this._iconLetter = "";
    this._title = "";
    this._kind = "";
    this._schema = {};
    this._model = {};
  }
  toBinding() {}
}
export { Intgeration, IntegrationSide };
