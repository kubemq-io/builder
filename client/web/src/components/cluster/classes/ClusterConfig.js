import { ClusterBasicConfig } from "@/components/cluster/classes/ClusterBasicConfig";

class ClusterConfig {
  get name() {
    return `${this.basic.clusterName}/${this.basic.clusterNamespace}`;
  }
  get clusterName() {
    return this.basic.clusterName;
  }

  set clusterName(value) {
    this.basic.clusterName = value;
  }

  get basic() {
    return this._basic;
  }

  set basic(value) {
    this._basic = value;
  }
  constructor() {
    this._basic = new ClusterBasicConfig();
  }
}

export { ClusterConfig };
