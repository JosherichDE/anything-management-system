import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { Universe } from 'src/app/shared/universe/universe.model';
import { ArtifactClass } from '../../shared/artifact-class/artifact-class.model';
import { UniverseService } from '../../shared/universe/universe.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {
  routeSub: any;
  universeIdentifier: any;
  universeName: any;
  universeArtifacts?: ArtifactClass[];
  universe: Universe;

  constructor(private route: ActivatedRoute, private universeService: UniverseService) {
    this.universe = new Universe();
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.universeIdentifier = params['universeId'];
    });

    this.universeService.getUniverseArtifactClasses(this.universeIdentifier).subscribe(artifacts => this.universeArtifacts = artifacts);
    this.universeService.getUniverse().subscribe(universe => this.universe = universe);
  }

  addArtifact(): void {
    this.universeService.addArtifactClass();
  }
}
