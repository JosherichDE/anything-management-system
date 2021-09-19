import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { ArtifactClass } from 'src/app/shared/models/artifact-class/artifact-class.model';
import { UniverseService } from 'src/app/shared/services/universe.service';
import { ArtifactInstance } from '../../shared/models/artifact-instance/artifact-instance.model';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.less']
})
export class ManagementComponent implements OnInit {

  universeIdentifier: any;
  routeSub: any;
  universeArtifactClasses?: ArtifactClass[];
  selectedArtifactClass?: ArtifactClass;
  selectedArtifactInstance?: ArtifactInstance;
  artifactInstances?: ArtifactInstance[];
  searchControl: FormControl = new FormControl();
  private debounce: number = 400;

  constructor(private route: ActivatedRoute, private universeService: UniverseService) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.universeIdentifier = params['universeId'];
    });

    this.searchControl.valueChanges
      .pipe(debounceTime(this.debounce), distinctUntilChanged())
      .subscribe(query => {
        if (this.selectedArtifactClass) {
          this.artifactInstances = this.universeService.searchArtifactInstances(this.selectedArtifactClass, query);
        }
      });


    this.universeService.getUniverseArtifactClasses(this.universeIdentifier).subscribe(
      artifacts => {
        this.universeArtifactClasses = artifacts;
        this.selectedArtifactClass = this.universeArtifactClasses[0];
        this.artifactInstances = this.universeService.getArtifactInstances(this.selectedArtifactClass.identifier);
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
      this.artifactInstances = this.universeService.getArtifactInstances(this.selectedArtifactClass.identifier);
    }
  }
}
