import { Component, Input, OnInit } from '@angular/core';
import { UniversalArtifact } from '../universal-artifact.model';
import { UniverseService } from '../universe.service';

@Component({
  selector: 'app-universal-artifact-editor',
  templateUrl: './universal-artifact-editor.component.html',
  styleUrls: ['./universal-artifact-editor.component.less']
})
export class UniversalArtifactEditorComponent implements OnInit {


  @Input()
  universalArtifact!: UniversalArtifact;

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
    this.universeService.deleteArtifact(this.universalArtifact);
  }

}
