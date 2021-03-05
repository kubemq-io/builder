class MiddlewaresConfig {
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
  GetConfiguration() {
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
    this._logging = loggingModel;
    this._retries = retriesModel;
    this._rate = rateLimiterModel;
  }
}
let loggingModel = {
  Schema: {
    properties: {
      required: ["logLevel"],
      logLevel: {
        type: "string",
        title: "Log Level",
        default: "No Logging",
        enum: ["No Logging", "Debug Level", "Info Level", "Error Level"]
      }
    }
  },
  Model: {},
  IsValid: false
};
let retriesModel = {
  Schema: {
    type: "object",
    title: "Select Retries Mode",
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
            default: "Fixed",
            enum: ["Fixed", "Back-Off", "Random"],
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
  IsValid: false
};
let rateLimiterModel = {
  Schema: {
    type: "object",
    title: "Select Rate Limiter Mode",
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
  IsValid: false
};

export { MiddlewaresConfig };
