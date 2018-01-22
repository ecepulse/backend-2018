import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsRegistrationComponent } from './workshops-registration.component';

describe('WorkshopsRegistrationComponent', () => {
  let component: WorkshopsRegistrationComponent;
  let fixture: ComponentFixture<WorkshopsRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopsRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
