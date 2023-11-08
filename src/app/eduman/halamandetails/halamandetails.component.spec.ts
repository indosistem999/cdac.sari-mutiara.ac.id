import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalamandetailsComponent } from './halamandetails.component';

describe('HalamandetailsComponent', () => {
  let component: HalamandetailsComponent;
  let fixture: ComponentFixture<HalamandetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HalamandetailsComponent]
    });
    fixture = TestBed.createComponent(HalamandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
