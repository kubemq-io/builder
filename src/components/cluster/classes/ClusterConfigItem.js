class ClusterConfigItem {
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get model() {
    return this._model;
  }

  set model(value) {
    this._model = value;
  }

  get schema() {
    return this._schema;
  }

  set schema(value) {
    this._schema = value;
  }

  get options() {
    return this._options;
  }

  set options(value) {
    this._options = value;
  }

  get isValid() {
    return this._isValid;
  }

  set isValid(value) {
    this._isValid = value;
  }

  setName(value) {
    this._name = value;
    return this;
  }
  setModel(value) {
    this._model = value;
    return this;
  }
  setSchema(value) {
    this._schema = value;
    return this;
  }

  setOptions(value) {
    this._options = value;
    return this;
  }
  setIsValid(value) {
    this._isValid = value;
    return this;
  }

  constructor() {
    this._name = "";
    this._model = {};
    this._schema = {};
    this._options = {};
    this._isValid = true;
  }
}

export { ClusterConfigItem };
