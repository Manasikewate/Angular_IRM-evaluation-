import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerEmailCompaignComponent } from './summer-email-compaign.component';

describe('SummerEmailCompaignComponent', () => {
  let component: SummerEmailCompaignComponent;
  let fixture: ComponentFixture<SummerEmailCompaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummerEmailCompaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerEmailCompaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
