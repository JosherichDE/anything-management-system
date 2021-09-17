import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactEditorComponent } from './artifact-editor.component';

describe('UniversalArtifactEditorComponent', () => {
  let component: ArtifactEditorComponent;
  let fixture: ComponentFixture<ArtifactEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtifactEditorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtifactEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
