import { v4 as uuid } from 'uuid';

export class ArtifactClass {
    identifier: string = uuid();
    type: string = '';
    properties: string[] = [];
}
