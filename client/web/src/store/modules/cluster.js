const clusterState = {
  clusterConfig: {
    generalModel: {
      clusterName: "kubemq-cluster",
      clusterNamespace: "kubemq",
      clusterReplicas: 3,
      clusterMode: "Grouped",
      licenseKey: "key"
    },
    interfacesModel: {
      interfaceSchemaKey: "default",
      //interfaceSchemaKey: "interfaceSettings",
      grpc: "ClusterIP",
      rest: "ClusterIP",
      api: "ClusterIP"
    },
    imageModel: {
      imageSchemaKey: "default",
      //imageSchemaKey: "imageSettings",
      image: "docker.io/kubemq/kubemq:latest",
      pullPolicy: "Always"
    },
    volumeModel: {
      volumeSchemaKey: "noVolume",
      //volumeSchemaKey: "withVolume",
      size: 1,
      storageClass: "default"
    },
    tlsModel: {
      tlsSchemaKey: "disabled",
      //tlsSchemaKey: "tls",
      //tlsSchemaKey: "mtls",
      cert: "",
      key: "",
      ca: ""
    },
    authenticationModel: {
      authenticationSchemaKey: "disabled",
      //authenticationSchemaKey: "enabled",
      publicKeyType: "HS256",
      publicKey: ""
    },
    authorizationModel: {
      authorizationSchemaKey: "disabled",
      //authorizationSchemaKey: "withPolicy",
      //authorizationSchemaKey: "withUrl",
      policy: {
        rules: [
          {
            events: "Send Only",
            events_store: "Send Only",
            query: "Send Only",
            commands: "Send Only",
            queue: "Send Only",
            clientId: "asd",
            channel: "asd"
          }
        ]
      },
      fetchInterval: 3600,
      url: "http://localhost:50000"
    },
    healthModel: {
      healthSchemaKey: "disabled",
      //healthSchemaKey: "enabled",
      initialDelaySeconds: 10,
      periodSeconds: 10,
      timeoutSeconds: 5,
      successThreshold: 1,
      failureThreshold: 12
    },
    resourceModel: {
      limitsCpu: 0,
      requestCpu: 0,
      limitsMemory: 0,
      requestMemory: 0,
      limitsEphemeralStorage: 0,
      requestsEphemeralStorage: 0,
      //resourceSchemaKey: "enabled"
      resourceSchemaKey: "disabled"
    },
    nodeSelectorsModel: {
      items: { kv: [{ key: "sa", value: "asd" }] },
      // nodeSelectorsSchemaKey: "enabled"
      nodeSelectorsSchemaKey: "disabled"
    },
    storeModel: {
      storeSchemaKey: "default",
      //storeSchemaKey: "storeSettings",
      maxChannels: 0,
      maxSubscribers: 0,
      maxMessages: 0,
      maxChannelSize: 0,
      messagesRetentionMinutes: 1440,
      purgeInactiveMinutes: 1440
    },
    queueModel: {
      queueSchemaKey: "default",
      //      queueSchemaKey: "queueSettings",
      maxReceiveMessagesRequest: 1024,
      maxReQueues: 1024,
      maxExpirationSeconds: 43200,
      maxDelaySeconds: 43200,
      defaultWaitTimeoutSeconds: 1,
      maxWaitTimeoutSeconds: 3600,
      defaultVisibilitySeconds: 60,
      maxVisibilitySeconds: 43200
    },
    routingModel: {
      routingSchemaKey: "disabled",
      routes: { keyRoutes: [{ key: "a", route: "d" }] },
      // routingSchemaKey: "withRoutes"
      // routingSchemaKey: "withUrl",
      fetchInterval: 3600,
      url: "http://localhost:50000"
    }
  }
};
const getters = {
  // getGeneralModel: state => state.clusterConfig.generalModel,
  // getAuthenticationModel: state => state.clusterConfig.authenticationModel,
  configToShow: state => {
    return JSON.stringify(state.clusterConfig, null, "\t");
  }
};
const actions = {};
const mutations = {
  // setAuthenticationModel: (state, authenticationModel) => {
  //   //   state.clusterConfig.authenticationModel = authenticationModel;
  //   // }
};

export default {
  state: clusterState,
  getters,
  mutations,
  actions
};
