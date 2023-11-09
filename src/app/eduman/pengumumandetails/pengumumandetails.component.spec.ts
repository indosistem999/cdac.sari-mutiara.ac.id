import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengumumandetailsComponent } from './pengumumandetails.component';

describe('PengumumandetailsComponent', () => {
  let component: PengumumandetailsComponent;
  let fixture: ComponentFixture<PengumumandetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PengumumandetailsComponent]
    });
    fixture = TestBed.createComponent(PengumumandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
