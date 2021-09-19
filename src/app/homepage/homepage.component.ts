import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadUniverseDialogComponent } from '../shared/components/load-universe-dialog/load-universe-dialog.component';
import { Universe } from '../shared/models/universe/universe.model';
import { UniverseService } from '../shared/services/universe.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {
  
  universe: Universe;

  constructor(private universeService: UniverseService,
    public dialog: MatDialog) {
      this.universe = new Universe();
  }

  ngOnInit(): void {
    this.universeService.getUniverse().subscribe(universe =>
      {
         this.universe = universe
        });
  }

  saveUniverse() {
    this.universeService.saveUniverse();
  }

  openLoadUniverseDialog() {
    const dialogRef = this.dialog.open(LoadUniverseDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      
      // The Observale is not triggered (ngOnInit), so we have to refresh manual :(
        // Use Subject !?
      this.universe = this.universeService.universe;
    });
  }
}
