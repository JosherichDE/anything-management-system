import { Component, Input, OnInit } from '@angular/core';
import { ArtifactClass } from 'src/app/shared/models/artifact-class/artifact-class.model';
import { UniverseService } from '../../shared/services/universe.service';

@Component({
  selector: 'app-artifact-editor',
  templateUrl: './artifact-editor.component.html',
  styleUrls: ['./artifact-editor.component.less']
})
export class ArtifactEditorComponent implements OnInit {


  @Input()
  universalArtifact!: ArtifactClass;

  constructor(private universeService: UniverseService) { }

  ngOnInit(): void {
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  addPropertie() {
    this.universalArtifact.properties.push('');
  }

  deletePropertie(msg: string) {
    const index: number = this.universalArtifact.properties.indexOf(msg);
    if (index !== -1) {
      this.universalArtifact.properties.splice(index, 1);
    }
  }

  deleteArtifact() {
    this.universeService.deleteArtifactClass(this.universalArtifact);
  }

}
