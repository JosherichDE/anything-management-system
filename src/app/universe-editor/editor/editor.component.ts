import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { UniversalArtifact } from '../universal-artifact.model';
import { UniverseService } from '../universe.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {
  universeId: any;
  universeArtifacts?: UniversalArtifact[];

  constructor(private route: ActivatedRoute, private universeService: UniverseService) {
    this.universeId = this.route.paramMap
      .pipe(
        map((params: ParamMap) => params.get('universeId'))
      );
  }

  ngOnInit(): void {
    this.universeService.getUniverseArtifacts().subscribe(artifacts => this.universeArtifacts = artifacts);
  }

  addArtifact(): void {
    this.universeService.addArtifact();
  }
}
