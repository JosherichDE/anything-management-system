import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Universe } from 'src/app/shared/models/universe/universe.model';
import { ArtifactClass } from 'src/app/shared/models/artifact-class/artifact-class.model';
import { UniverseService } from 'src/app/shared/services/universe.service';

@Component({
  selector: 'app-universe-editor',
  templateUrl: './universe-editor.component.html',
  styleUrls: ['./universe-editor.component.less']
})
export class EditorComponent implements OnInit {
  routeSub: any;
  universeIdentifier: any;
  universeName: any;
  universeArtifacts?: ArtifactClass[];
  universe?: Universe;
  universeNameControl: FormControl = new FormControl();

  constructor(private route: ActivatedRoute, private universeService: UniverseService) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.universeIdentifier = params['universeId'];
    });

    this.universeService.getUniverseArtifactClasses(this.universeIdentifier).subscribe(artifacts => this.universeArtifacts = artifacts);
    this.universeService.getUniverse().subscribe(universe => this.universe = universe);

    this.universeNameControl.valueChanges.subscribe(x => {
      if (this.universe) {
        this.universe.name = x;
      }
    });
  }

  addArtifact(): void {
    this.universeService.addArtifactClass();
  }
}
