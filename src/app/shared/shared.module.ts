import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadUniverseDialogComponent } from './components/load-universe-dialog/load-universe-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UniverseService } from './services/universe.service';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    LoadUniverseDialogComponent,
    HeaderComponent,
    NavigationComponent
  ],
  exports: [
    LoadUniverseDialogComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule
  ],
  providers: [
    UniverseService
  ]
})
export class SharedModule { }
