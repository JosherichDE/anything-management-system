import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniverseManagementRoutingModule } from './universe-management-routing.module';
import { ManagementComponent } from './management/management.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
  
    ManagementComponent
  ],
  imports: [
    CommonModule,
    UniverseManagementRoutingModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class UniverseManagementModule { }
