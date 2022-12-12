import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTimetableComponent } from './staff-timetable.component';

describe('StaffTimetableComponent', () => {
  let component: StaffTimetableComponent;
  let fixture: ComponentFixture<StaffTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffTimetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
