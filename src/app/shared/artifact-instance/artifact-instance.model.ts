import { v4 as uuid } from 'uuid';
import { ArtifactClass } from '../artifact-class/artifact-class.model';
import { PropertyValuePair } from '../property-value-pair/property-value-pair.model';

export class ArtifactInstance {
    identifier: string;
    artifactTypeIdentifier: string;
    propertieValuePairs: PropertyValuePair[];

    private constructor(artifactTypeIdentifier: string, propertieValuePairs: PropertyValuePair[]) {
        this.artifactTypeIdentifier = artifactTypeIdentifier;
        this.propertieValuePairs = propertieValuePairs
        this.identifier = uuid();
    }

    public static Create(artifactClass: ArtifactClass): ArtifactInstance {
        let generated: ArtifactInstance = new ArtifactInstance(artifactClass.identifier, []);

        artifactClass.properties.forEach(property => {
            generated.propertieValuePairs.push({ property: property, value: [] });
        });

        return generated;
    }

}
