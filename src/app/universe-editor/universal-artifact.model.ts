import { v4 as uuid } from 'uuid';

export class UniversalArtifact {
    identifier: string = uuid();
    type: string = '';
    properties: string[] = [];
}
