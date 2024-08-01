import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinIcwarComponent } from './join-icwar.component';

describe('JoinIcwarComponent', () => {
  let component: JoinIcwarComponent;
  let fixture: ComponentFixture<JoinIcwarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinIcwarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinIcwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
