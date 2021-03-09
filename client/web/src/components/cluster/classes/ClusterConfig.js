import { ClusterBaseConfig } from "@/components/cluster/classes/ClusterBaseConfig";

class ClusterConfig {
  get name() {
    return `${this.base.clusterName}/${this.base.clusterNamespace}`;
  }
  get clusterName() {
    return this.base.clusterName;
  }

  set clusterName(value) {
    this.base.clusterName = value;
  }

  get base() {
    return this._base;
  }

  set base(value) {
    this._base = value;
  }
  constructor() {
    this._base = new ClusterBaseConfig();
  }
}

export { ClusterConfig };
