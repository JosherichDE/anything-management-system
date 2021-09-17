import { v4 as uuid } from 'uuid';
import { ArtifactClass } from '../artifact-class/artifact-class.model';
import { PropertyValuePair } from '../property-value-pair/property-value-pair.model';

export class ArtifactInstance {
    identifier: string = uuid();
    type?: ArtifactClass;
    propertieValueMatrix: PropertyValuePair[];

    constructor(type: ArtifactClass){
        this.type = type;
        this.propertieValueMatrix = [];
        this.type.properties.forEach(property => {
            this.propertieValueMatrix.push({ property: property,value :[]});
        });
        
    }
}
