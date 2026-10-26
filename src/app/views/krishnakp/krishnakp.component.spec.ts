import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrishnakpComponent } from './krishnakp.component';

describe('KrishnakpComponent', () => {
  let component: KrishnakpComponent;
  let fixture: ComponentFixture<KrishnakpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrishnakpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KrishnakpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
