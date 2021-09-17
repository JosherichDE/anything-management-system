import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { ArtifactClass } from 'src/app/shared/artifact-class/artifact-class.model';
import { UniverseService } from 'src/app/shared/universe/universe.service';
import { ArtifactInstance } from '../../shared/artifact-instance/artifact-instance.model';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.less']
})
export class ManagementComponent implements OnInit {

  universeId: any;
  universeArtifactClasses?: ArtifactClass[];
  selectedArtifactClass?: ArtifactClass;
  selectedArtifactInstance?: ArtifactInstance;
  artifactInstances?: ArtifactInstance[];

  constructor(private route: ActivatedRoute, private universeService: UniverseService) {
    this.universeId = this.route.paramMap
      .pipe(
        map((params: ParamMap) => params.get('universeId'))
      );
  }

  ngOnInit(): void {
    this.universeService.getUniverseArtifactClasses().subscribe(
      artifacts => {
        this.universeArtifactClasses = artifacts;
        this.selectedArtifactClass = this.universeArtifactClasses[0];
        this.artifactInstances = this.universeService.getArtifactInstances(this.selectedArtifactClass);
      }
    );
  }

  onArtifactTypeSelection(e: any) {
    this.refreshArtifactInstances();
  }

  onArtifactInstanceSelection(e: any, v: any) {
    this.selectedArtifactInstance = v.selected[0]?.value;
  }

  addArtifactInstance() {
    if (this.selectedArtifactClass) {
      this.universeService.addArtifactInstance(this.selectedArtifactClass);
      this.refreshArtifactInstances();
    }
  }

  deleteArtifactInstance(instance?: ArtifactInstance) {
    if (this.artifactInstances && instance) {
      this.universeService.deleteArtifactInstance(instance);
      this.selectedArtifactInstance = undefined;
      this.refreshArtifactInstances();
    }
  }

  refreshArtifactInstances() {
    if (this.selectedArtifactClass) {
      this.artifactInstances = this.universeService.getArtifactInstances(this.selectedArtifactClass);
    }
  }
}
