import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEnterComponent } from './app-enter.component';

describe('AppEnterComponent', () => {
  let component: AppEnterComponent;
  let fixture: ComponentFixture<AppEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
