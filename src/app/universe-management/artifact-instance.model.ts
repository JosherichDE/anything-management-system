import { v4 as uuid } from 'uuid';
import { UniversalArtifact } from '../universe-editor/universal-artifact.model';
import { PropertyValue } from './property-value.model';

export class ArtifactInstance {
    identifier: string = uuid();
    type?: UniversalArtifact;
    propertieValueMatrix: PropertyValue[];

    constructor(type: UniversalArtifact){
        this.type = type;
        this.propertieValueMatrix = [];
        this.type.properties.forEach(property => {
            this.propertieValueMatrix.push({ property: property,value :[]});
        });
        
    }
}
