import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsHomeComponent } from './hs-home.component';

describe('HsHomeComponent', () => {
  let component: HsHomeComponent;
  let fixture: ComponentFixture<HsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
