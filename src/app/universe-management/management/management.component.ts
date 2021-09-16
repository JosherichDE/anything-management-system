import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { UniversalArtifact } from 'src/app/universe-editor/universal-artifact.model';
import { UniverseService } from 'src/app/universe-editor/universe.service';
import { ArtifactInstance } from '../artifact-instance.model';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.less']
})
export class ManagementComponent implements OnInit {

  universeId: any;
  universeArtifacts?: UniversalArtifact[];
  selectedArtifact?: any;
  selectedArtifactInstance?: ArtifactInstance;
  artifactInstances?: any[];

  constructor(private route: ActivatedRoute, private universeService: UniverseService) {
    this.universeId = this.route.paramMap
      .pipe(
        map((params: ParamMap) => params.get('universeId'))
      );
  }

  ngOnInit(): void {
    this.universeService.getUniverseArtifacts().subscribe(
      artifacts => {
        this.universeArtifacts = artifacts;
        this.selectedArtifact = this.universeArtifacts[0];
        this.artifactInstances = [new ArtifactInstance(this.selectedArtifact)];
      }
    );
  }

  onArtifactTypeSelection(e: any) {
    this.artifactInstances = [new ArtifactInstance(this.selectedArtifact), new ArtifactInstance(this.selectedArtifact)];
  }

  onArtifactInstanceSelection(e: any, v: any) {
    this.selectedArtifactInstance = v.selected[0]?.value;
  }

  addArtifactInstance() {
    this.artifactInstances?.push(new ArtifactInstance(this.selectedArtifact));
  }

  deleteArtifactInstance(instance?: ArtifactInstance) {
    if (this.artifactInstances && instance) {
      const index: number = this.artifactInstances.indexOf(instance);
      if (index !== -1) {
        this.artifactInstances.splice(index, 1);
        this.selectedArtifactInstance = undefined;
      }
    }

  }

}
