import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachernameComponent } from './teachername.component';

describe('TeachernameComponent', () => {
  let component: TeachernameComponent;
  let fixture: ComponentFixture<TeachernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
