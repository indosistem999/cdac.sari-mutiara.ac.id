import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayananComponent } from './layanan.component';

describe('LayananComponent', () => {
  let component: LayananComponent;
  let fixture: ComponentFixture<LayananComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayananComponent]
    });
    fixture = TestBed.createComponent(LayananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
