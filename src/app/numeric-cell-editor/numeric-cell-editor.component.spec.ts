import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNumericCellEditorComponent } from './numeric-cell-editor.component';

describe('NumericCellEditorComponent', () => {
  let component: CNumericCellEditorComponent;
  let fixture: ComponentFixture<CNumericCellEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CNumericCellEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CNumericCellEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
