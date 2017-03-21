import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugtoolComponent } from './debugtool.component';

describe('DebugtoolComponent', () => {
  let component: DebugtoolComponent;
  let fixture: ComponentFixture<DebugtoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugtoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugtoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
