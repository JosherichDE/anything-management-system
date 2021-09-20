import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './universe-management.component';

const routes: Routes = [
  { path: 'universe-management/:universeId', component: ManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniverseManagementRoutingModule { }
