import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingFormsComponent } from './billing-forms.component';

describe('BillingFormsComponent', () => {
  let component: BillingFormsComponent;
  let fixture: ComponentFixture<BillingFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
