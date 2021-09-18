import { ArtifactClass } from "../artifact-class/artifact-class.model";
import { ArtifactInstance } from "../artifact-instance/artifact-instance.model";
import { v4 as uuid } from 'uuid';

export class Universe {
    id: string = uuid();
    artifactClasses: ArtifactClass[] = [];
    artifactInstances: ArtifactInstance[] = [];
    name: string = "Default Universe";
}
