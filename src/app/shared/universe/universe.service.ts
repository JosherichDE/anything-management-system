import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ARTIFACT_MOCKS } from '../artifact-class/artifact-class-mocks';
import { ArtifactClass } from '../artifact-class/artifact-class.model';
import { ArtifactInstance } from '../artifact-instance/artifact-instance.model';
import { Universe } from './universe.model';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {
  artifactClasses = ARTIFACT_MOCKS;
  artifactInstances: ArtifactInstance[] = [];
  universe: Universe;

  constructor() {
    this.universe = new Universe();
    this.universe.name = "My Default Universe";
  }

  public getUniverse(): Observable<Universe> {
    return of(this.universe);
  }

  public getUniverseArtifactClasses(universeId: string): Observable<ArtifactClass[]> {
    if (this.universe.id != universeId) {
      console.log("oh no - id mismatch");
    }
    return of(this.artifactClasses);
  }

  public getArtifactInstances(artifactClassIdentifier: string): ArtifactInstance[] {
    return this.artifactInstances.filter(x => x.artifactTypeIdentifier == artifactClassIdentifier);
  }

  public searchArtifactInstances(artifactClass: ArtifactClass, query: string): ArtifactInstance[] {
    return this.getArtifactInstances(artifactClass.identifier).filter(x => x.propertieValuePairs.find(x => x.value.includes(query)) || x.identifier.includes(query));
  }

  public deleteArtifactClass(artifact: ArtifactClass) {
    this.artifactClasses.splice(this.artifactClasses.findIndex(item => item.identifier === artifact.identifier), 1);
  }

  addArtifactClass(): void {
    this.artifactClasses.push(new ArtifactClass());
  }

  addArtifactInstance(selectedArtifactClass: ArtifactClass): void {
    let newArtifactInstance = ArtifactInstance.Create(selectedArtifactClass);
    this.artifactInstances.push(newArtifactInstance);
  }

  deleteArtifactInstance(instance: ArtifactInstance) {
    const index: number = this.artifactInstances.indexOf(instance);
    if (index !== -1) {
      this.artifactInstances.splice(index, 1);
    }
  }

  saveUniverse() {
    let toSave = this.universe;
    toSave.artifactClasses = this.artifactClasses;
    toSave.artifactInstances = this.artifactInstances;

    const blob = new Blob([JSON.stringify(toSave)], { type: 'application/json' });
    FileSaver.saveAs(blob, toSave.id);
  }

  loadUniverse(fileContent: any) {
    const blobString: string = fileContent;
    let toLoad: Universe = JSON.parse(blobString);
    this.universe = toLoad;
    this.artifactClasses = toLoad.artifactClasses;
    this.artifactInstances = toLoad.artifactInstances;
  }
}
