import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontConfigurationComponent } from './font-configuration.component';

describe('FontConfigurationComponent', () => {
  let component: FontConfigurationComponent;
  let fixture: ComponentFixture<FontConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
