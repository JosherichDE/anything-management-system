import { ArtifactClass } from "../artifact-class/artifact-class.model";
import { ArtifactInstance } from "../artifact-instance/artifact-instance.model";

export class Universe {
    id: any;
    artifactClasses: ArtifactClass[] = [];
    artifactInstances: ArtifactInstance[] = [];
}
