import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleListBookingComponent } from './single-list-booking.component';

describe('SingleListBookingComponent', () => {
  let component: SingleListBookingComponent;
  let fixture: ComponentFixture<SingleListBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleListBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleListBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
