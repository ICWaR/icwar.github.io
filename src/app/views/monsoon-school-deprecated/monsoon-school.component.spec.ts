import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsoonSchoolComponent } from './monsoon-school.component';

describe('MonsoonSchoolComponent', () => {
  let component: MonsoonSchoolComponent;
  let fixture: ComponentFixture<MonsoonSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsoonSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsoonSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
