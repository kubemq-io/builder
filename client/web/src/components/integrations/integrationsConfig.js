//import lodashCollections from "lodash/collection";
class IntegrationsConfig {
  get connectors() {
    let data = [];
    this._connectors.forEach(value => {
      data.push(value);
      // data.push({
      //   divider: true,
      //   inset: true
      // });
    });
    return data;
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
      let con = new Connector()
        .SetKind(value.kind)
        .SetType(value.type)
        .SetName(value.name)
        .SetCategory(value.category)
        .SetProvider(value.provider)
        .SetSchema(value.schema);

      con.AddTag(value.category);
      con.AddTag(...(Array.isArray(value.tags) ? value.tags : [value.tags]));
      this._connectors.push(con);
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

  AddTag(...values) {
    values.forEach(value => {
      if (value) {
        this._tags.push(value.toLowerCase());
      }
    });
    return this;
  }

  get tags() {
    return this._tags;
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
  get title() {
    switch (this._provider.toLowerCase()) {
      case "gcp":
        return `${this._name} (GCP)`;
      case "aws":
        return `${this._name} (AWS)`;
      case "azure":
        return `${this._name} (Azure)`;
    }
    return this._name;
  }
  constructor() {
    this._category = "";
    this._provider = "";
    this._kind = "";
    this._name = "";
    this._schema = {};
    this._type = "";
    this._tags = [];
  }
  getInitial() {
    return this._name.charAt(0).toUpperCase();
  }
}
export { IntegrationsConfig, Connector };
