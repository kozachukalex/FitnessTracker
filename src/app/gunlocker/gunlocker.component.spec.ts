import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GunlockerComponent } from './gunlocker.component';

describe('GunlockerComponent', () => {
  let component: GunlockerComponent;
  let fixture: ComponentFixture<GunlockerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GunlockerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GunlockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
