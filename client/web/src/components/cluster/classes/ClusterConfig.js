import { ClusterAuthenticationConfig } from "@/components/cluster/classes/ClusterAuthenticationConfig";
import { ClusterAuthorizationConfig } from "@/components/cluster/classes/ClusterAuthorizationConfig";
import { ClusterGrpcInterfaceConfig } from "@/components/cluster/classes/ClusterGrpcInterfaceConfig";
import { ClusterRestInterfaceConfig } from "@/components/cluster/classes/ClusterRestInterfaceConfig";
import { ClusterApiInterfaceConfig } from "@/components/cluster/classes/ClusterApiInterfaceConfig";
import { ClusterImageConfig } from "@/components/cluster/classes/ClusterImageConfig";
import { ClusterVolumeConfig } from "@/components/cluster/classes/ClusterVolumeConfig";
import { ClusterHealthConfig } from "@/components/cluster/classes/ClusterHealthConfig";
import { ClusterResourcesConfig } from "@/components/cluster/classes/ClusterResourcesConfig";
import { ClusterSecurityConfig } from "@/components/cluster/classes/ClusterSecurityConfig";
import { ClusterNodesConfig } from "@/components/cluster/classes/ClusterNodesConfig";
import { ClusterRoutingConfig } from "@/components/cluster/classes/ClusterRoutingConfig";
import { ClusterStoreConfig } from "@/components/cluster/classes/ClusterStoreConfig";
import { ClusterQueuesConfig } from "@/components/cluster/classes/ClusterQueuesConfig";
import { ClusterBasicMetadataConfig } from "@/components/cluster/classes/ClusterBasicMetadataConfig";
import { ClusterBasicSpecConfig } from "@/components/cluster/classes/ClusterBasicSpecConfig";

class ClusterConfig {
  get basicSpec() {
    return this._basicSpec;
  }

  set basicSpec(value) {
    this._basicSpec = value;
  }
  get basicMetadata() {
    return this._basicMetadata;
  }

  set basicMetadata(value) {
    this._basicMetadata = value;
  }
  get store() {
    return this._store;
  }

  set store(value) {
    this._store = value;
  }

  get queues() {
    return this._queues;
  }

  set queues(value) {
    this._queues = value;
  }
  get routing() {
    return this._routing;
  }

  set routing(value) {
    this._routing = value;
  }
  get nodes() {
    return this._nodes;
  }

  set nodes(value) {
    this._nodes = value;
  }
  get security() {
    return this._security;
  }

  set security(value) {
    this._security = value;
  }
  get health() {
    return this._health;
  }

  set health(value) {
    this._health = value;
  }

  get resources() {
    return this._resources;
  }

  set resources(value) {
    this._resources = value;
  }
  get image() {
    return this._image;
  }

  set image(value) {
    this._image = value;
  }

  get volume() {
    return this._volume;
  }

  set volume(value) {
    this._volume = value;
  }
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
    return `${this.basicMetadata.clusterName}/${this.basicMetadata.clusterNamespace}`;
  }
  get clusterName() {
    return this.basicMetadata.clusterName;
  }
  set clusterName(value) {
    this.basicMetadata.clusterName = value;
  }
  get clusterNamespace() {
    return this.basicMetadata.clusterNamespace;
  }
  set clusterNamespace(value) {
    this.basicMetadata.clusterNamespace = value;
  }
  get basic() {
    return this._basic;
  }
  hasEdits() {
    return (
      this._authentication.getHasConfigured() ||
      this._authorization.getHasConfigured() ||
      this._routing.getHasConfigured() ||
      this._grpcInterface.getHasConfigured() ||
      this._restInterface.getHasConfigured() ||
      this._apiInterface.getHasConfigured() ||
      this._security.getHasConfigured() ||
      this._image.getHasConfigured() ||
      this._volume.getHasConfigured() ||
      this._health.getHasConfigured() ||
      this._resources.getHasConfigured() ||
      this._nodes.getHasConfigured() ||
      this._store.getHasConfigured() ||
      this._queues.getHasConfigured()
    );
  }
  tags() {
    let list = [];

    list.push(...this._grpcInterface.tags);
    list.push(...this._restInterface.tags);
    list.push(...this._apiInterface.tags);
    list.push(...this._authentication.tags);
    list.push(...this._authorization.tags);
    list.push(...this._authentication.tags);
    list.push(...this._volume.tags);
    list.push(...this._security.tags);
    list.push(...this._resources.tags);
    list.push(...this._health.tags);
    return list;
  }
  configIsValid() {
    return (
      this._basicMetadata &&
      this._authentication.isValid &&
      this._authorization.isValid &&
      this._routing.isValid &&
      this._grpcInterface.isValid &&
      this._restInterface.isValid &&
      this._apiInterface.isValid &&
      this._security.isValid &&
      this._image.isValid &&
      this._volume.isValid &&
      this._health.isValid &&
      this._resources.isValid &&
      this._nodes.isValid &&
      this._store.isValid &&
      this._queues.isValid
    );
  }
  set basic(value) {
    this._basic = value;
  }
  constructor() {
    this._basicMetadata = new ClusterBasicMetadataConfig();
    this._basicSpec = new ClusterBasicSpecConfig();
    this._authentication = new ClusterAuthenticationConfig();
    this._authorization = new ClusterAuthorizationConfig();
    this._routing = new ClusterRoutingConfig();
    this._grpcInterface = new ClusterGrpcInterfaceConfig();
    this._restInterface = new ClusterRestInterfaceConfig();
    this._apiInterface = new ClusterApiInterfaceConfig();
    this._security = new ClusterSecurityConfig();
    this._image = new ClusterImageConfig();
    this._volume = new ClusterVolumeConfig();
    this._health = new ClusterHealthConfig();
    this._resources = new ClusterResourcesConfig();
    this._nodes = new ClusterNodesConfig();
    this._store = new ClusterStoreConfig();
    this._queues = new ClusterQueuesConfig();
  }
}

export { ClusterConfig };
