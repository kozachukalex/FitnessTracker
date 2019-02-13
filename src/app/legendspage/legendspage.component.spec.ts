import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendspageComponent } from './legendspage.component';

describe('LegendspageComponent', () => {
  let component: LegendspageComponent;
  let fixture: ComponentFixture<LegendspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
