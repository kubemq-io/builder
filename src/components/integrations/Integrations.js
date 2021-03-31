//import lodashCollections from "lodash/collection";
import lodashString from "lodash/string";
import lodashObject from "lodash/object";

class Integrations {
  get connectors() {
    let data = [];
    this._connectors.forEach(value => {
      data.push(value);
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
      let con = new IntegrationsConnector()
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
class IntegrationsConnector {
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
class IntegrationsBinding {
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
    if (this.Type === "sources") {
      return `${this.SourceSide.Name}`;
    } else {
      return `${this.TargetSide.Name}`;
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
    this._id = makeid(16);
    this._type = "";
    this._bindingType = "";
    this._name = "";
    this._sourceSide = new IntegrationsBindingSide("Source", "Default", {});
    this._targetSide = new IntegrationsBindingSide("Target", "Default", {});
    this._middlewares = new IntegrationsBindingMiddlewares();
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
    this._sourceSide = new IntegrationsBindingSide(
      "Source",
      name,
      category,
      schema
    );
    return this;
  }

  SetTargetSide(name, category, schema) {
    this._targetSide = new IntegrationsBindingSide(
      "Target",
      name,
      category,
      schema
    );
    return this;
  }

  GetConfiguration() {
    return {
      id: this._id,
      name: this._name,
      properties: this._middlewares.getConfiguration(),
      source: this.SourceSide.GetSideConfiguration(),
      target: this.TargetSide.GetSideConfiguration()
    };
  }
}
class IntegrationsBindingSide {
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
  getTags() {
    const list = [this.Category];

    if (this._model.address) {
      list.push(this._model.address);
    }
    if (this._model.channel) {
      list.push(this._model.channel);
    }
    if (this._model.host) {
      list.push(this._model.host);
    }
    if (this._model.hosts) {
      list.push(this._model.hosts);
    }
    if (this._model.destination) {
      list.push(this._model.destination);
    }
    if (this._model.url) {
      list.push(this._model.url);
    }
    if (this._model.urls) {
      list.push(this._model.urls);
    }
    if (this._model.endpoint) {
      list.push(this._model.endpoint);
    }
    if (this._model.end_point) {
      list.push(this._model.end_point);
    }
    return list;
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

  GetSideConfiguration() {
    const sideKind = this._model.kind;
    const sideProperties = lodashObject.omit(this._model, [
      "kind",
      "setDefaults"
    ]);
    return {
      kind: sideKind,
      properties: sideProperties
    };
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
class IntegrationsBindingMiddlewares {
  hasData() {
    return (
      (this._logging.Model.logLevel !== "No Logging" &&
        this._logging.Model.logLevel !== undefined) ||
      this._retries.Model.mode === "enabled" ||
      this._rate.Model.mode === "enabled"
    );
  }

  get Logging() {
    return this._logging;
  }

  set Logging(value) {
    this._logging = value;
  }

  get Retries() {
    return this._retries;
  }

  set Retries(value) {
    this._retries = value;
  }

  get Rate() {
    return this._rate;
  }

  set Rate(value) {
    this._rate = value;
  }

  getConfiguration() {
    let config = {
      log_level: undefined,
      retry_attempts: undefined,
      retry_delay_milliseconds: undefined,
      retry_max_jitter_milliseconds: undefined,
      retry_delay_type: undefined,
      rate_per_second: undefined
    };
    switch (this._logging.Model.logLevel) {
      case "Debug Level":
        config.log_level = "debug";
        break;
      case "Info Level":
        config.log_level = "info";
        break;
      case "Error Level":
        config.log_level = "error";
        break;
    }

    if (this._retries.Model.mode === "enabled") {
      config.retry_attempts = this._retries.Model.attempts;
      config.retry_delay_milliseconds = this._retries.Model.delay;
      config.retry_delay_type = this._retries.Model.type;
      config.retry_max_jitter_milliseconds = this._retries.Model.jitter;
    }

    if (this._rate.Model.mode === "enabled") {
      config.rate_per_second = this._rate.Model.perSeconds;
    }

    return config;
  }

  constructor() {
    this._logging = integrationsLoggingModel;
    this._retries = integrationsRetriesModel;
    this._rate = integrationsRateLimiterModel;
  }
}

let integrationsLoggingModel = {
  Schema: {
    "x-class": "vjsf",
    required: ["logLevel"],
    properties: {
      logLevel: {
        type: "string",
        title: "Log Level",
        default: "No Logging",
        enum: ["No Logging", "Debug Level", "Info Level", "Error Level"]
      }
    }
  },
  HasData: function() {
    return (
      this.Model.logLevel !== "No Logging" && this.Model.logLevel !== undefined
    );
  },
  Options: {
    initialValidation: "all",
    idPrefix: "logging"
  },
  Model: {},
  IsValid: false
};
let integrationsRetriesModel = {
  Schema: {
    type: "object",
    title: "Select Retries Mode",
    "x-class": "vjsf",
    oneOf: [
      {
        title: "Disabled",
        properties: {
          mode: {
            type: "string",
            const: "disabled"
          }
        }
      },
      {
        title: "Enabled",
        properties: {
          mode: {
            type: "string",
            const: "enabled"
          },
          type: {
            type: "string",
            title: "Type",
            default: "fixed",
            enum: ["fixed", "back-off", "random"],
            "x-cols": "6",
            "x-class": "pr-2"
          },
          attempts: {
            type: "integer",
            title: "Max Attempts",
            default: 1,
            minimum: 1,
            "x-class": "pl-2",
            "x-cols": "6"
          },
          delay: {
            type: "integer",
            title: "Delay (Milliseconds)",
            default: 100,
            minimum: 100,
            "x-class": "pr-2",
            "x-cols": "6"
          },
          jitter: {
            type: "integer",
            title: "Jitter (Milliseconds)",
            default: 100,
            minimum: 100,
            "x-class": "pl-2",
            "x-cols": "6"
          }
        }
      }
    ]
  },
  Model: {
    mode: "disabled"
  },
  Options: {
    initialValidation: "all",
    idPrefix: "retries"
  },
  HasData: function() {
    return this.Model.mode !== "disabled";
  },
  IsValid: false
};
let integrationsRateLimiterModel = {
  Schema: {
    type: "object",
    title: "Select Rate Limiter Mode",
    "x-class": "vjsf",
    oneOf: [
      {
        title: "Disabled",
        properties: {
          mode: {
            type: "string",
            const: "disabled"
          }
        }
      },
      {
        title: "Enabled",
        properties: {
          mode: {
            type: "string",
            const: "enabled"
          },
          perSeconds: {
            type: "integer",
            title: "Rate Per Seconds",
            description: "Limit requests, 0 - unlimited",
            default: 0,
            minimum: 0,
            "x-cols": "6"
          }
        }
      }
    ]
  },
  Model: {
    mode: "disabled"
  },
  Options: {
    initialValidation: "all",
    idPrefix: "rate"
  },
  HasData: function() {
    return this.Model.mode !== "disabled";
  },
  IsValid: false
};
const makeid = function(length) {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
export { Integrations };
export { IntegrationsConnector };
export { IntegrationsBindingSide };
export { IntegrationsBinding };
export { IntegrationsBindingMiddlewares };
