import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadUniverseDialogComponent } from './load-universe-dialog/load-universe-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    LoadUniverseDialogComponent
  ],
  exports: [
    LoadUniverseDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class SharedModule { }
