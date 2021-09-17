import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { ArtifactClass } from '../../shared/artifact-class/artifact-class.model';
import { UniverseService } from '../../shared/universe/universe.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {
  universeId: any;
  universeArtifacts?: ArtifactClass[];

  constructor(private route: ActivatedRoute, private universeService: UniverseService) {
    this.universeId = this.route.paramMap
      .pipe(
        map((params: ParamMap) => params.get('universeId'))
      );
  }

  ngOnInit(): void {
    this.universeService.getUniverseArtifactClasses().subscribe(artifacts => this.universeArtifacts = artifacts);
  }

  addArtifact(): void {
    this.universeService.addArtifactClass();
  }
}
