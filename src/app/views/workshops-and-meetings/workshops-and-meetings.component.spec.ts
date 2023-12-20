import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsAndMeetingsComponent } from './workshops-and-meetings.component';

describe('WorkshopsAndMeetingsComponent', () => {
  let component: WorkshopsAndMeetingsComponent;
  let fixture: ComponentFixture<WorkshopsAndMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopsAndMeetingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopsAndMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
