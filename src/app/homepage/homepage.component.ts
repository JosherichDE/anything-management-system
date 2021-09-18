import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadUniverseDialogComponent } from '../shared/load-universe-dialog/load-universe-dialog.component';
import { UniverseService } from '../shared/universe/universe.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {


 
  constructor(private universeService: UniverseService,
    public dialog: MatDialog) {

  }

  ngOnInit(): void {

  }

  saveUniverse() {
    this.universeService.saveUniverse();
  }

  openLoadUniverseDialog() {
    const dialogRef = this.dialog.open(LoadUniverseDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



  

}
