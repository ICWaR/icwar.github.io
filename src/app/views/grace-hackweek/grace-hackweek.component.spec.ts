import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GRACEHackweekComponent } from './grace-hackweek.component';

describe('GRACEHackweekComponent', () => {
  let component: GRACEHackweekComponent;
  let fixture: ComponentFixture<GRACEHackweekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GRACEHackweekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GRACEHackweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
