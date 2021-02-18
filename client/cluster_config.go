package main

type ClusterConfig struct {
	GeneralModel struct {
		ClusterName      string `json:"clusterName"`
		ClusterNamespace string `json:"clusterNamespace"`
		ClusterReplicas  int    `json:"clusterReplicas"`
		ClusterMode      string `json:"clusterMode"`
		LicenseKey       string `json:"licenseKey"`
	} `json:"generalModel"`
	InterfacesModel struct {
		InterfaceSchemaKey string `json:"interfaceSchemaKey"`
		Grpc               string `json:"grpc"`
		Rest               string `json:"rest"`
		API                string `json:"api"`
	} `json:"interfacesModel"`
	ImageModel struct {
		ImageSchemaKey string `json:"imageSchemaKey"`
		Image          string `json:"image"`
		PullPolicy     string `json:"pullPolicy"`
	} `json:"imageModel"`
	VolumeModel struct {
		VolumeSchemaKey string `json:"volumeSchemaKey"`
		Size            int    `json:"size"`
		StorageClass    string `json:"storageClass"`
	} `json:"volumeModel"`
	TLSModel struct {
		TLSSchemaKey string `json:"tlsSchemaKey"`
		Cert         string `json:"cert"`
		Key          string `json:"key"`
		Ca           string `json:"ca"`
	} `json:"tlsModel"`
	AuthenticationModel struct {
		AuthenticationSchemaKey string `json:"authenticationSchemaKey"`
		PublicKeyType           string `json:"publicKeyType"`
		PublicKey               string `json:"publicKey"`
	} `json:"authenticationModel"`
	AuthorizationModel struct {
		AuthorizationSchemaKey string `json:"authorizationSchemaKey"`
		Policy                 struct {
			Rules []struct {
				Events      string `json:"events"`
				EventsStore string `json:"events_store"`
				Query       string `json:"query"`
				Commands    string `json:"commands"`
				Queue       string `json:"queue"`
				ClientID    string `json:"clientId"`
				Channel     string `json:"channel"`
			} `json:"rules"`
		} `json:"policy"`
		FetchInterval int    `json:"fetchInterval"`
		URL           string `json:"url"`
	} `json:"authorizationModel"`
	HealthModel struct {
		HealthSchemaKey     string `json:"healthSchemaKey"`
		InitialDelaySeconds int    `json:"initialDelaySeconds"`
		PeriodSeconds       int    `json:"periodSeconds"`
		TimeoutSeconds      int    `json:"timeoutSeconds"`
		SuccessThreshold    int    `json:"successThreshold"`
		FailureThreshold    int    `json:"failureThreshold"`
	} `json:"healthModel"`
	ResourceModel struct {
		LimitsCPU                int    `json:"limitsCpu"`
		RequestCPU               int    `json:"requestCpu"`
		LimitsMemory             int    `json:"limitsMemory"`
		RequestMemory            int    `json:"requestMemory"`
		LimitsEphemeralStorage   int    `json:"limitsEphemeralStorage"`
		RequestsEphemeralStorage int    `json:"requestsEphemeralStorage"`
		ResourceSchemaKey        string `json:"resourceSchemaKey"`
	} `json:"resourceModel"`
	NodeSelectorsModel struct {
		Items struct {
			Kv []struct {
				Key   string `json:"key"`
				Value string `json:"value"`
			} `json:"kv"`
		} `json:"items"`
		NodeSelectorsSchemaKey string `json:"nodeSelectorsSchemaKey"`
	} `json:"nodeSelectorsModel"`
	StoreModel struct {
		StoreSchemaKey           string `json:"storeSchemaKey"`
		MaxChannels              int    `json:"maxChannels"`
		MaxSubscribers           int    `json:"maxSubscribers"`
		MaxMessages              int    `json:"maxMessages"`
		MaxChannelSize           int    `json:"maxChannelSize"`
		MessagesRetentionMinutes int    `json:"messagesRetentionMinutes"`
		PurgeInactiveMinutes     int    `json:"purgeInactiveMinutes"`
	} `json:"storeModel"`
	QueueModel struct {
		QueueSchemaKey            string `json:"queueSchemaKey"`
		MaxReceiveMessagesRequest int    `json:"maxReceiveMessagesRequest"`
		MaxReQueues               int    `json:"maxReQueues"`
		MaxExpirationSeconds      int    `json:"maxExpirationSeconds"`
		MaxDelaySeconds           int    `json:"maxDelaySeconds"`
		DefaultWaitTimeoutSeconds int    `json:"defaultWaitTimeoutSeconds"`
		MaxWaitTimeoutSeconds     int    `json:"maxWaitTimeoutSeconds"`
		DefaultVisibilitySeconds  int    `json:"defaultVisibilitySeconds"`
		MaxVisibilitySeconds      int    `json:"maxVisibilitySeconds"`
	} `json:"queueModel"`
	RoutingModel struct {
		RoutingSchemaKey string `json:"routingSchemaKey"`
		Routes           struct {
			KeyRoutes []struct {
				Key   string `json:"key"`
				Route string `json:"route"`
			} `json:"keyRoutes"`
		} `json:"routes"`
		FetchInterval int    `json:"fetchInterval"`
		URL           string `json:"url"`
	} `json:"routingModel"`
}
