import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsRegistrationComponent } from './hs-registration.component';

describe('HsRegistrationComponent', () => {
  let component: HsRegistrationComponent;
  let fixture: ComponentFixture<HsRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
