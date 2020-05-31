import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontTestComponent } from './font-test.component';

describe('FontTestComponent', () => {
  let component: FontTestComponent;
  let fixture: ComponentFixture<FontTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
