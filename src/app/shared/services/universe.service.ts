import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { ARTIFACT_MOCKS } from '../models/artifact-class/artifact-class-mocks';
import { ArtifactClass } from '../models/artifact-class/artifact-class.model';
import { ArtifactInstance } from '../models/artifact-instance/artifact-instance.model';
import { Universe } from '../models/universe/universe.model';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {
  private universe: Universe;
  private universeSubject: BehaviorSubject<Universe>;

  constructor() {
    this.universe = this.MockUniverse();
    this.universeSubject = new BehaviorSubject(this.universe);
  }

  private MockUniverse(universeIdentfier?: string) : Universe {
    let mockUniverse = new Universe();
    mockUniverse.name = "My Default Universe";
    mockUniverse.artifactClasses = ARTIFACT_MOCKS;
    mockUniverse.artifactInstances = [];

    if(universeIdentfier) {
      mockUniverse.id = universeIdentfier;
    }

    return mockUniverse;
  }

  setUniverse(universe: Universe) {
    this.universe = universe;
    this.universeSubject?.next(this.universe);
  }

  public getUniverse(universeIdentifier?: string): BehaviorSubject<Universe> {
    if(universeIdentifier && this.universe.id != universeIdentifier) {
      let universe = this.MockUniverse(universeIdentifier);
      this.setUniverse(universe);
    }

    return this.universeSubject;
  }

  public getUniverseArtifactClasses(universeId: string): Observable<ArtifactClass[]> {
    if (this.universe.id != universeId) {
      console.log("oh no - id mismatch");
    }
    return of(this.universe.artifactClasses);
  }

  public getArtifactInstances(artifactClassIdentifier: string): ArtifactInstance[] {
    return this.universe.artifactInstances.filter(x => x.artifactTypeIdentifier == artifactClassIdentifier);
  }

  public searchArtifactInstances(artifactClass: ArtifactClass, query: string): ArtifactInstance[] {
    return this.getArtifactInstances(artifactClass.identifier).filter(x => x.propertieValuePairs.find(x => x.value.includes(query)) || x.identifier.includes(query));
  }

  public deleteArtifactClass(artifact: ArtifactClass) {
    this.universe.artifactClasses.splice(this.universe.artifactClasses.findIndex(item => item.identifier === artifact.identifier), 1);
  }

  addArtifactClass(): void {
    this.universe.artifactClasses.push(new ArtifactClass());
  }

  addArtifactInstance(selectedArtifactClass: ArtifactClass): void {
    let newArtifactInstance = ArtifactInstance.Create(selectedArtifactClass);
    this.universe.artifactInstances.push(newArtifactInstance);
  }

  deleteArtifactInstance(instance: ArtifactInstance) {
    const index: number = this.universe.artifactInstances.indexOf(instance);
    if (index !== -1) {
      this.universe.artifactInstances.splice(index, 1);
    }
  }

  saveUniverse() {
    let toSave = this.universe;
    toSave.artifactClasses = this.universe.artifactClasses;
    toSave.artifactInstances = this.universe.artifactInstances;

    const blob = new Blob([JSON.stringify(toSave)], { type: 'application/json' });
    FileSaver.saveAs(blob, toSave.id);
  }

  loadUniverse(fileContent: any) {
    const blobString: string = fileContent;
    let toLoad: Universe = JSON.parse(blobString);
    this.universe = toLoad;
    this.universe.artifactClasses = toLoad.artifactClasses;
    this.universe.artifactInstances = toLoad.artifactInstances;
    this.universeSubject.next(this.universe);
  }
}
