import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsSeminarComponent } from './students-seminar.component';

describe('StudentsSeminarComponent', () => {
  let component: StudentsSeminarComponent;
  let fixture: ComponentFixture<StudentsSeminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsSeminarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsSeminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
