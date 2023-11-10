import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilemenuTwoComponent } from './mobilemenu-two.component';

describe('MobilemenuTwoComponent', () => {
  let component: MobilemenuTwoComponent;
  let fixture: ComponentFixture<MobilemenuTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilemenuTwoComponent]
    });
    fixture = TestBed.createComponent(MobilemenuTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
