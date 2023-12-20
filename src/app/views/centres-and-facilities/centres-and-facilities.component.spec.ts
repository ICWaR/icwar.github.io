import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentresAndFacilitiesComponent } from './centres-and-facilities.component';

describe('CentresAndFacilitiesComponent', () => {
  let component: CentresAndFacilitiesComponent;
  let fixture: ComponentFixture<CentresAndFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentresAndFacilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentresAndFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
