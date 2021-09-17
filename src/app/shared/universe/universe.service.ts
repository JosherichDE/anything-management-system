import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ARTIFACT_MOCKS } from '../artifact-class/artifact-class-mocks';
import { ArtifactClass } from '../artifact-class/artifact-class.model';
import { ArtifactInstance } from '../artifact-instance/artifact-instance.model';
import { Universe } from './universe.model';
import * as FileSaver from 'file-saver';
import { JsonpClientBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {
  artifactClasses = ARTIFACT_MOCKS;
  artifactInstances : ArtifactInstance[] = [];
  constructor() {}

  public getUniverseArtifactClasses(): Observable<ArtifactClass[]> {
    return of(this.artifactClasses);
  }

  public getArtifactInstances(artifactClassIdentifier: string) : ArtifactInstance[] {
    return this.artifactInstances.filter(x => x.type?.identifier == artifactClassIdentifier);
  }

  public searchArtifactInstances(artifactClass: ArtifactClass, query: string) : ArtifactInstance[] {
    return this.getArtifactInstances(artifactClass.identifier).filter(x => x.propertieValueMatrix.find(x => x.value.includes(query)) || x.identifier.includes(query));
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

  saveUniverse() {
    let toSave = new Universe();
    toSave.artifactClasses = this.artifactClasses;
    toSave.artifactInstances = this.artifactInstances;
    toSave.id = "ff";

    const blob = new Blob([JSON.stringify(toSave)], {type : 'application/json'});
    FileSaver.saveAs(blob, toSave.id);
  }

  loadUniverse(fileContent: any) {
    const blobString: string = fileContent;
    let toLoad: Universe = JSON.parse(blobString);
    this.artifactClasses = toLoad.artifactClasses;
    this.artifactInstances = toLoad.artifactInstances;

  }
}
