import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTaskTypeFilterComponent } from './task-type-filter.component';

describe('CheckboxComponent', () => {
  let component: CTaskTypeFilterComponent;
  let fixture: ComponentFixture<CTaskTypeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTaskTypeFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTaskTypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
