class IntegrationBinding {
  get content() {
    return this._content;
  }

  set content(value) {
    this._content = value;
  }
  get header() {
    return this._header;
  }
  set header(value) {
    this._header = value;
  }
  constructor() {
    this._header = new IntegrationBindingHeader();
    this._content = new IntegrationBindingContent();
  }
}

class IntegrationBindingHeader {
  set type(value) {
    this._type = value;
  }

  set name(value) {
    this._name = value;
  }

  set category(value) {
    this._category = value;
  }

  set provider(value) {
    this._provider = value;
  }
  get type() {
    return this._type;
  }

  get name() {
    return this._name;
  }

  get category() {
    return this._category;
  }

  get provider() {
    return this._provider;
  }
  constructor() {
    this._type = "";
    this._name = "";
    this._category = "";
    this._provider = "";
  }
  isInclude(str) {
    if (this._type.includes(str)) {
      return true;
    }
    if (this._name.includes(str)) {
      return true;
    }
    if (this._category.includes(str)) {
      return true;
    }
    return this._provider.includes(str);
  }
}
class IntegrationBindingContent {
  get iconType() {
    return this._iconType;
  }

  set iconType(value) {
    this._iconType = value;
  }

  get bindingName() {
    return this._bindingName;
  }

  set bindingName(value) {
    this._bindingName = value;
  }

  get sourceSchema() {
    return this._sourceSchema;
  }

  set sourceSchema(value) {
    this._sourceSchema = value;
  }

  get sourceModel() {
    return this._sourceModel;
  }

  set sourceModel(value) {
    this._sourceModel = value;
  }

  get sourceValid() {
    return this._sourceValid;
  }

  set sourceValid(value) {
    this._sourceValid = value;
  }

  get sourceTitle() {
    return this._sourceTitle;
  }

  set sourceTitle(value) {
    this._sourceTitle = value;
  }

  get targetSchema() {
    return this._targetSchema;
  }

  set targetSchema(value) {
    this._targetSchema = value;
  }

  get targetModel() {
    return this._targetModel;
  }

  set targetModel(value) {
    this._targetModel = value;
  }

  get targetValid() {
    return this._targetValid;
  }

  set targetValid(value) {
    this._targetValid = value;
  }

  get targetTitle() {
    return this._targetTitle;
  }

  set targetTitle(value) {
    this._targetTitle = value;
  }
  constructor() {
    this._iconType = "";
    this._bindingName = "";

    this._sourceSchema = {};
    this._sourceModel = {};
    this._sourceValid = false;
    this._sourceTitle = "";

    this._targetSchema = {};
    this._targetModel = {};
    this._targetValid = false;
    this._targetTitle = "";
  }
}
export {
  IntegrationBinding,
  IntegrationBindingHeader,
  IntegrationBindingContent
};
