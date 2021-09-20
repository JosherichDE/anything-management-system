import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, Subscription } from 'rxjs';
import { LoadUniverseDialogComponent } from '../../shared/components/load-universe-dialog/load-universe-dialog.component';
import { Universe } from '../../shared/models/universe/universe.model';
import { UniverseService } from '../../shared/services/universe.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {

  universe?: Universe;
  universeServiceSub?: Subscription;

  constructor(private universeService: UniverseService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.universeServiceSub = this.universeService.getUniverse().subscribe(universe => {
      this.universe = universe
    });
  }

  saveUniverse() {
    this.universeService.saveUniverse();
  }

  openLoadUniverseDialog() {
    this.dialog.open(LoadUniverseDialogComponent);
  }
}
