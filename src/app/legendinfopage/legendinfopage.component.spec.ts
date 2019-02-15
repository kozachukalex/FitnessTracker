import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendinfopageComponent } from './legendinfopage.component';

describe('LegendinfopageComponent', () => {
  let component: LegendinfopageComponent;
  let fixture: ComponentFixture<LegendinfopageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendinfopageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendinfopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
