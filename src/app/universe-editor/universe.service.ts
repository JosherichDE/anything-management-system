import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ARTIFACTS } from './mock-universal-artifacts';
import { UniversalArtifact } from './universal-artifact.model';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {
  artifacts = ARTIFACTS;
  constructor() { }

  public getUniverseArtifacts(): Observable<UniversalArtifact[]> {
    return of(this.artifacts);
  }

  public deleteArtifact(artifact: UniversalArtifact) {
    this.artifacts.splice(this.artifacts.findIndex(item => item.identifier === artifact.identifier), 1);
  }

  addArtifact(): void {
    this.artifacts.push(new UniversalArtifact());
  }
}
