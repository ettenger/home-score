import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDailyComponent } from './dashboard-daily.component';

describe('DashboardDailyComponent', () => {
  let component: DashboardDailyComponent;
  let fixture: ComponentFixture<DashboardDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
