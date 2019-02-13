import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendInfoComponent } from './legend-info.component';

describe('LegendInfoComponent', () => {
  let component: LegendInfoComponent;
  let fixture: ComponentFixture<LegendInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
