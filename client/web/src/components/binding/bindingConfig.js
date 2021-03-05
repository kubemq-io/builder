import lodashString from "lodash/string";
import { MiddlewaresConfig } from "@/components/binding/middlewaresConfig";
import lodashObject from "lodash/object";
class BindingConfig {
  get Middlewares() {
    return this._middlewares;
  }

  set Middlewares(value) {
    this._middlewares = value;
  }
  get BindingType() {
    return this._bindingType;
  }
  get Type() {
    return this._type;
  }
  get Title() {
    switch (this.BindingType) {
      case "integrations":
        return `${lodashString.upperFirst(this.Mode)} ${
          this.SourceSide.Name
        } - ${this.TargetSide.Name} Integration`;
      default:
        return `${lodashString.upperFirst(this.Mode)} KubeMQ Bridging`;
    }
  }
  get Name() {
    if (this._name !== "") {
      return this._name;
    }
    this._name = `${this.SourceSide.Name}-${this.TargetSide.Name}`.toLowerCase();
    return this._name;
  }
  set Name(value) {
    this._name = value;
  }
  get SourceSide() {
    return this._sourceSide;
  }
  get TargetSide() {
    return this._targetSide;
  }
  constructor() {
    this._type = "";
    this._bindingType = "";
    this._name = "";
    this._sourceSide = new BindingSide("Source", "Default", {});
    this._targetSide = new BindingSide("Target", "Default", {});
    this._middlewares = new MiddlewaresConfig();
  }

  SetType(value) {
    this._type = value;
    return this;
  }

  SetBindingType(value) {
    this._bindingType = value;
    return this;
  }

  SetSourceSide(name, schema) {
    this._sourceSide = new BindingSide("Source", name, schema);
    return this;
  }

  SetTargetSide(name, schema) {
    this._targetSide = new BindingSide("Target", name, schema);
    return this;
  }
  GetConfiguration() {
    switch (this.BindingType) {
      case "integrations":
        return {
          name: this._name,
          properties: this._middlewares.GetConfiguration(),
          source: this.SourceSide.GetSideConfiguration(false),
          target: this.TargetSide.GetSideConfiguration(false)
        };
      default:
        return {
          name: this._name,
          properties: this._middlewares.GetConfiguration(),
          sources: this.SourceSide.GetSideConfiguration(true),
          targets: this.TargetSide.GetSideConfiguration(true)
        };
    }
  }
}

class BindingSide {
  get Name() {
    return this._name;
  }
  set Name(value) {
    this._name = value;
  }
  get Title() {
    return this._title;
  }
  get Initial() {
    return this._initial;
  }
  get Model() {
    return this._model;
  }
  set Model(value) {
    this._model = value;
  }
  get IsModelValid() {
    return this._isModelValid;
  }
  set IsModelValid(value) {
    this._isModelValid = value;
  }
  get Schema() {
    return this._schema;
  }
  GetSideConfiguration(isBridges) {
    const sideKind = this._model.kind;
    const sideProperties = lodashObject.omit(this._model, [
      "kind",
      "setDefaults"
    ]);
    if (isBridges) {
      return {
        kind: sideKind,
        connections: sideProperties
      };
    } else {
      return {
        kind: sideKind,
        properties: sideProperties
      };
    }
  }
  constructor(side, name, schema) {
    this._name = name;
    this._title = `${name} ${side}`;
    this._initial = name.charAt(0).toUpperCase();
    this._schema = schema;
    this._model = {};
    this._isModelValid = false;
  }
}
export { BindingConfig, BindingSide };
