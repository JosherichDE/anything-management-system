import { Component, OnInit } from '@angular/core';
import { UniverseService } from '../../services/universe.service';

@Component({
  selector: 'app-load-universe-dialog',
  templateUrl: './load-universe-dialog.component.html',
  styleUrls: ['./load-universe-dialog.component.less']
})
export class LoadUniverseDialogComponent implements OnInit {
  file: any;
  fileContent: any;
  constructor(private universeService: UniverseService,) { }

  ngOnInit(): void {
  }

  fileChanged(e: any) {
    this.file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.fileContent = fileReader.result;
    }

    fileReader.readAsText(this.file);
  }

  loadUniverse(): void {
    if (this.fileContent) {
      this.universeService.loadUniverse(this.fileContent);
    }
  }
}
