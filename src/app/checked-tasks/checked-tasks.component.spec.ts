import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedTasksComponent } from './checked-tasks.component';

describe('CheckedTasksComponent', () => {
  let component: CheckedTasksComponent;
  let fixture: ComponentFixture<CheckedTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckedTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
