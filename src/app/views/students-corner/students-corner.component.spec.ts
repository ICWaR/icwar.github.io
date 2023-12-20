import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCornerComponent } from './students-corner.component';

describe('StudentsCornerComponent', () => {
  let component: StudentsCornerComponent;
  let fixture: ComponentFixture<StudentsCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsCornerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
