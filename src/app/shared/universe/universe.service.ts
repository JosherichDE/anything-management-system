import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ARTIFACT_MOCKS } from '../artifact-class/artifact-class-mocks';
import { ArtifactClass } from '../artifact-class/artifact-class.model';
import { ArtifactInstance } from '../artifact-instance/artifact-instance.model';
import { Universe } from './universe.model';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {
  artifactClasses = ARTIFACT_MOCKS;
  artifactInstances : ArtifactInstance[] = [];
  constructor() {}

  public getUniverse(id: any) : Universe {
    let universe = new Universe();
    universe.id = id;
    universe.artifactClasses = ARTIFACT_MOCKS;
    
    return universe;
  }

  public getUniverseArtifactClasses(): Observable<ArtifactClass[]> {
    return of(this.artifactClasses);
  }

  public getArtifactInstances(artifactClass: ArtifactClass) : ArtifactInstance[] {
    return this.artifactInstances.filter(x => x.type == artifactClass);
  }

  public deleteArtifactClass(artifact: ArtifactClass) {
    this.artifactClasses.splice(this.artifactClasses.findIndex(item => item.identifier === artifact.identifier), 1);
  }

  addArtifactClass(): void {
    this.artifactClasses.push(new ArtifactClass());
  }

  addArtifactInstance(selectedArtifact: ArtifactClass) : void {
    this.artifactInstances?.push(new ArtifactInstance(selectedArtifact));
  }

  deleteArtifactInstance(instance: ArtifactInstance) {
      const index: number = this.artifactInstances.indexOf(instance);
      if (index !== -1) {
        this.artifactInstances.splice(index, 1);
      }
  }
}
