import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchNewComponent } from './research-new.component';

describe('ResearchNewComponent', () => {
  let component: ResearchNewComponent;
  let fixture: ComponentFixture<ResearchNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
