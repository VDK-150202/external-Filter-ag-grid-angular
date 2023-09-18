import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CIconRendererComponent } from './icon-renderer.component';

describe('IconRendererComponent', () => {
  let component: CIconRendererComponent;
  let fixture: ComponentFixture<CIconRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CIconRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CIconRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
