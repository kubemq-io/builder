import { ClusterConfigItem } from "@/components/cluster/classes/ClusterConfigItem";

class ClusterImageConfig extends ClusterConfigItem {
  getHasConfigured() {
    return (
      this.model.image !== "docker.io/kubemq/kubemq:latest" ||
      this.model.pullPolicy !== "Always"
    );
  }
  get tags() {
    if (this.getHasConfigured()) {
      return ["Image"];
    }
    return [];
  }

  constructor() {
    super()
      .setName("Image")
      .setSchema(clusterImageSchema)
      .setModel(clusterImageModel)
      .setOptions(clusterImageOptions);
  }
}
const clusterImageOptions = {
  initialValidation: "all",
  idPrefix: "image"
};
const defaultImage = "docker.io/kubemq/kubemq:latest";
const defaultPullPolicy = "Always";

const clusterImageModel = {
  image: defaultImage,
  pullPolicy: defaultPullPolicy
};
const clusterImageSchema = {
  type: "object",
  "x-class": "vjsf",
  required: ["image", "pullPolicy"],
  properties: {
    image: {
      type: "string",
      title: "Image Repository",
      defaultImage: '"docker.io/kubemq/kubemq:latest"'
    },
    pullPolicy: {
      type: "string",
      title: "Image Pull Policy",
      enum: ["Always", "IfNotPresent", "Never"]
    }
  }
};
export { ClusterImageConfig };
