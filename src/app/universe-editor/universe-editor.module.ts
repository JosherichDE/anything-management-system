import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniverseEditorRoutingModule } from './universe-editor-routing.module';
import { EditorComponent } from './editor/editor.component';
import { UniverseService } from './universe.service';
import { UniversalArtifactEditorComponent } from './universal-artifact-editor/universal-artifact-editor.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    EditorComponent,
    UniversalArtifactEditorComponent
  ],
  imports: [
    CommonModule,
    UniverseEditorRoutingModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class UniverseEditorModule { }
