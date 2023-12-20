import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarsAndPublicationsComponent } from './seminars-and-publications.component';

describe('SeminarsAndPublicationsComponent', () => {
  let component: SeminarsAndPublicationsComponent;
  let fixture: ComponentFixture<SeminarsAndPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminarsAndPublicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeminarsAndPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
