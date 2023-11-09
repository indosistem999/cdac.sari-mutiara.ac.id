import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonidetailsComponent } from './testimonidetails.component';

describe('TestimonidetailsComponent', () => {
  let component: TestimonidetailsComponent;
  let fixture: ComponentFixture<TestimonidetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonidetailsComponent]
    });
    fixture = TestBed.createComponent(TestimonidetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
