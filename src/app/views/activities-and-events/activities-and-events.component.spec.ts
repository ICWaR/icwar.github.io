import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesAndEventsComponent } from './activities-and-events.component';

describe('ActivitiesAndEventsComponent', () => {
  let component: ActivitiesAndEventsComponent;
  let fixture: ComponentFixture<ActivitiesAndEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesAndEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesAndEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
