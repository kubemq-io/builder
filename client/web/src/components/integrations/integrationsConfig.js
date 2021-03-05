//import lodashCollections from "lodash/collection";
class IntegrationsConfig {
  get connectors() {
    return this._connectors;
  }

  getKubeMQSide(type) {
    if (type === "sources") {
      return this._kubemqTargets;
    } else {
      return this._kubemqSources;
    }
  }
  constructor(data) {
    if (data.integrations) {
      this._integrations = data.integrations;
    } else {
      this._integrations = [];
    }
    if (data.kubemq_sources) {
      this._kubemqSources = data.kubemq_sources;
    } else {
      this._kubemqSources = {};
    }
    if (data.kubemq_targets) {
      this._kubemqTargets = data.kubemq_targets;
    } else {
      this._kubemqTargets = {};
    }
    this._connectors = [];
    this._integrations.forEach(value => {
      this._connectors.push(
        new Connector()
          .SetKind(value.kind)
          .SetType(value.type)
          .SetName(value.name)
          .SetCategory(value.category)
          .SetProvider(value.provider)
          .SetSchema(value.schema)
      );
    });
  }
}

class Connector {
  get category() {
    return this._category;
  }

  SetCategory(value) {
    this._category = value;
    return this;
  }

  get provider() {
    return this._provider;
  }

  SetProvider(value) {
    this._provider = value;
    return this;
  }
  SetKind(value) {
    this._kind = value;
    return this;
  }

  SetName(value) {
    this._name = value;
    return this;
  }

  SetSchema(value) {
    this._schema = value;
    return this;
  }

  SetType(value) {
    this._type = value;
    return this;
  }
  get kind() {
    return this._kind;
  }

  get name() {
    return this._name;
  }

  get schema() {
    return this._schema;
  }

  get type() {
    return this._type;
  }
  constructor() {
    this._category = "";
    this._provider = "";
    this._kind = "";
    this._name = "";
    this._schema = {};
    this._type = "";
  }
}
export { IntegrationsConfig, Connector };
