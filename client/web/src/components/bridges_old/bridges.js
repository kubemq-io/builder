import lodashCollection from "lodash/collection.js";
class BridgesBindingsConfig {
  constructor() {
    this.bindings = [];
  }
  addBinding(binding) {
    const exist = lodashCollection.find(this.Bindings, function(b) {
      return b.name === binding.name;
    });
    if (exist) {
      return { err: "binding already exists" };
    }
    this.bindings.push(binding);
    return { err: null };
  }
  getBinding(bindingName) {
    const binding = lodashCollection.find(this.Bindings, function(b) {
      return b.name === bindingName;
    });
    if (binding) {
      return { binding: binding, err: null };
    }
    return { binding: null, err: `binding ${bindingName} not found` };
  }

  get Bindings() {
    return this.bindings;
  }

  set Bindings(value) {
    this.bindings = value;
  }
}

class BridgesBinding {
  constructor(name) {
    this.name = name;
    this.sources = new BridgesBindingData("");
    this.targets = new BridgesBindingData("");
  }
  get Sources() {
    return this.sources;
  }
  set Sources(value) {
    this.sources = value;
  }
  get Targets() {
    return this.targets;
  }
  set Targets(value) {
    this.targets = value;
  }
}

class BridgesBindingData {
  constructor(kind) {
    this.kind = kind;
    this.connections = [];
  }

  get Kind() {
    return this.kind;
  }

  set Kind(value) {
    this.kind = value;
  }
  get Connections() {
    return this.connections;
  }

  set Connections(value) {
    this.connections = value;
  }
  addConnection(connection) {
    this.connections.push(connection);
  }
  addConnections(connections) {
    this.connections.push(...connections);
  }
}
export { BridgesBindingsConfig, BridgesBinding, BridgesBindingData };
