import { ClusterBasicConfig } from "@/components/cluster/classes/ClusterBasicConfig";
import { ClusterAuthenticationConfig } from "@/components/cluster/classes/ClusterAuthenticationConfig";
import { ClusterAuthorizationConfig } from "@/components/cluster/classes/ClusterAuthorizationConfig";
import { ClusterGrpcInterfaceConfig } from "@/components/cluster/classes/ClusterGrpcInterfaceConfig";
import { ClusterRestInterfaceConfig } from "@/components/cluster/classes/ClusterRestInterfaceConfig";
import { ClusterApiInterfaceConfig } from "@/components/cluster/classes/ClusterApiInterfaceConfig";

class ClusterConfig {
  get restInterface() {
    return this._restInterface;
  }

  set restInterface(value) {
    this._restInterface = value;
  }

  get apiInterface() {
    return this._apiInterface;
  }

  set apiInterface(value) {
    this._apiInterface = value;
  }
  get grpcInterface() {
    return this._grpcInterface;
  }

  set grpcInterface(value) {
    this._grpcInterface = value;
  }
  get authorization() {
    return this._authorization;
  }

  set authorization(value) {
    this._authorization = value;
  }
  get authentication() {
    return this._authentication;
  }

  set authentication(value) {
    this._authentication = value;
  }
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
    this._authentication = new ClusterAuthenticationConfig();
    this._authorization = new ClusterAuthorizationConfig();
    this._grpcInterface = new ClusterGrpcInterfaceConfig();
    this._restInterface = new ClusterRestInterfaceConfig();
    this._apiInterface = new ClusterApiInterfaceConfig();
  }
}

export { ClusterConfig };
