import lodashCollection from "lodash/collection.js";
import lodashArray from "lodash/array.js";
class Integrations {
  get searchedBindings() {
    return this._searchedBindings;
  }

  set searchedBindings(value) {
    this._searchedBindings = value;
  }
  get availableBindings() {
    return this._availableBindings;
  }

  set availableBindings(value) {
    this._availableBindings = value;
  }

  get selectedBindings() {
    return this._selectedBindings;
  }

  set selectedBindings(value) {
    this._selectedBindings = value;
  }
  search(str) {
    if (str === ``) {
      this.searchedBindings = this.availableBindings;
    } else {
      this.searchedBindings = lodashCollection.filter(
        this.availableBindings,
        function(b) {
          return b.isInclude(str);
        }
      );
    }
  }
  add(binding) {
    this.selectedBindings.push(binding);
  }
  remove(bindingName) {
    this.selectedBindings = lodashArray.remove(this.selectedBindings, function(
      binding
    ) {
      return binding.content.bindingName === bindingName;
    });
  }
  constructor() {
    this._availableBindings = [];
    this._selectedBindings = [];
    this._searchedBindings = [];
  }
}

export { Integrations };
