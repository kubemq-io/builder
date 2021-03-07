import lodashString from "lodash/string";
import { MiddlewaresConfig } from "@/components/integrations/middlewaresConfig";
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
    const sourceName = lodashString.upperFirst(this.SourceSide.Name);
    const targetName = lodashString.upperFirst(this.TargetSide.Name);
    this._name = `${sourceName}-${targetName}`;
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

  SetSourceSide(name, category, schema) {
    this._sourceSide = new BindingSide("Source", name, category, schema);
    return this;
  }

  SetTargetSide(name, category, schema) {
    this._targetSide = new BindingSide("Target", name, category, schema);
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
  get Category() {
    if (this._model.kind) {
      switch (this._model.kind) {
        case "kubemq.command":
          return "Command";
        case "kubemq.query":
          return "Query";
        case "kubemq.events":
          return "Events";
        case "kubemq.events-store":
          return "Events Store";
        case "kubemq.queue":
          return "Queue";
        case "kubemq.queue-stream":
          return "Queue Stream";
      }
    }
    return this._category;
  }

  set Category(value) {
    this._category = value;
  }
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
  constructor(side, name, category, schema) {
    this._name = name;
    this._title = `${name} ${side}`;
    this._initial = name.charAt(0).toUpperCase();
    this._schema = schema;
    this._model = {};
    this._isModelValid = false;
    this._category = category;
  }
}

export { BindingConfig, BindingSide };
