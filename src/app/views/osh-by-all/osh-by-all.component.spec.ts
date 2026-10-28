import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OshByAllComponent } from './osh-by-all.component';

describe('OshByAllComponent', () => {
  let component: OshByAllComponent;
  let fixture: ComponentFixture<OshByAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OshByAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OshByAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
