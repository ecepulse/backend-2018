import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicQuestionComponent } from './dynamic-question.component';

describe('DynamicQuestionComponent', () => {
  let component: DynamicQuestionComponent;
  let fixture: ComponentFixture<DynamicQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicQuestionComponent ]
  ***REMOVED***)
    .compileComponents();
***REMOVED***));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
***REMOVED***);

  it('should create', () => {
    expect(component).toBeTruthy();
***REMOVED***);
});
