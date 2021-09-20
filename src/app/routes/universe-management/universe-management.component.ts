import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ArtifactClass } from 'src/app/shared/models/artifact-class/artifact-class.model';
import { UniverseService } from 'src/app/shared/services/universe.service';
import { ArtifactInstance } from 'src/app/shared/models/artifact-instance/artifact-instance.model';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Universe } from 'src/app/shared/models/universe/universe.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-universe-management',
  templateUrl: './universe-management.component.html',
  styleUrls: ['./universe-management.component.less']
})
export class ManagementComponent implements OnInit, OnDestroy {

  universeIdentifier: any;
  private routeSub?: Subscription;
  selectedArtifactClass?: ArtifactClass;
  selectedArtifactInstance?: ArtifactInstance;
  filteredArtifactInstances?: ArtifactInstance[];
  searchControl: FormControl = new FormControl();
  private debounce: number = 400;
  universe?: Universe;

  constructor(private route: ActivatedRoute, private universeService: UniverseService) {
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.universeIdentifier = params['universeId'];
    });

    this.universeService.getUniverse(this.universeIdentifier).subscribe(universe => {
      this.universe = universe;
    })

    this.universeService.getUniverseArtifactClasses(this.universeIdentifier).subscribe(
      artifacts => {
        this.selectedArtifactClass = artifacts[0];
        this.filteredArtifactInstances = this.universeService.searchArtifactInstances(this.selectedArtifactClass, "", 100);
      }
    );

    this.searchControl.valueChanges
    .pipe(debounceTime(this.debounce), distinctUntilChanged())
    .subscribe(query => {
      if (this.selectedArtifactClass) {
        this.filteredArtifactInstances = this.universeService.searchArtifactInstances(this.selectedArtifactClass, query, 100);
      }
    });
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
    if (this.filteredArtifactInstances && instance) {
      this.universeService.deleteArtifactInstance(instance);
      this.selectedArtifactInstance = undefined;
      this.refreshArtifactInstances();
    }
  }

  refreshArtifactInstances() {
    if (this.selectedArtifactClass) {
      this.filteredArtifactInstances = this.universeService.searchArtifactInstances(this.selectedArtifactClass, "", 100);
    }
  }
}
