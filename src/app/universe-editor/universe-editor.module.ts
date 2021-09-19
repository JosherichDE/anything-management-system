import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniverseEditorRoutingModule } from './universe-editor-routing.module';
import { EditorComponent } from './editor/editor.component';
import { ArtifactEditorComponent } from './artifact-editor/artifact-editor.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    EditorComponent,
    ArtifactEditorComponent
  ],
  imports: [
    CommonModule,
    UniverseEditorRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class UniverseEditorModule { }
