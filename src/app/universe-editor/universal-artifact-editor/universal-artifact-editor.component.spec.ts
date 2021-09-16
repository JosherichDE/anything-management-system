import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalArtifactEditorComponent } from './universal-artifact-editor.component';

describe('UniversalArtifactEditorComponent', () => {
  let component: UniversalArtifactEditorComponent;
  let fixture: ComponentFixture<UniversalArtifactEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniversalArtifactEditorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalArtifactEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
