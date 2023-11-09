import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerysectionComponent } from './gallerysection.component';

describe('GallerysectionComponent', () => {
  let component: GallerysectionComponent;
  let fixture: ComponentFixture<GallerysectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GallerysectionComponent]
    });
    fixture = TestBed.createComponent(GallerysectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
