import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadUniverseDialogComponent } from './load-universe-dialog.component';

describe('LoadUniverseDialogComponent', () => {
  let component: LoadUniverseDialogComponent;
  let fixture: ComponentFixture<LoadUniverseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadUniverseDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadUniverseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
