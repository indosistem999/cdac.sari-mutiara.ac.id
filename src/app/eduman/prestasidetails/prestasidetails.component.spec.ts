import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestasidetailsComponent } from './prestasidetails.component';

describe('PrestasidetailsComponent', () => {
  let component: PrestasidetailsComponent;
  let fixture: ComponentFixture<PrestasidetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestasidetailsComponent]
    });
    fixture = TestBed.createComponent(PrestasidetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
