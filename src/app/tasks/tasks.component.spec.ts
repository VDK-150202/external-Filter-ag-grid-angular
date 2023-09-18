  import { ComponentFixture, TestBed } from '@angular/core/testing';

  import { CTasksComponent } from './tasks.component';

  describe('TasksComponent', () => {
    let component: CTasksComponent;
    let fixture: ComponentFixture<CTasksComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ CTasksComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(CTasksComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
