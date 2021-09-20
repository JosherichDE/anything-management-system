import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './universe-editor.component';

const routes: Routes = [
  { path: 'universe-editor/:universeId', component: EditorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniverseEditorRoutingModule { }
