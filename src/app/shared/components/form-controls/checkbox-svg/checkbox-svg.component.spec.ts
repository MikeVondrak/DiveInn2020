import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxSvgComponent } from './checkbox-svg.component';

describe('CheckboxSvgComponent', () => {
  let component: CheckboxSvgComponent;
  let fixture: ComponentFixture<CheckboxSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
