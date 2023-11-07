import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeritasectionComponent } from './beritasection.component';

describe('BeritasectionComponent', () => {
  let component: BeritasectionComponent;
  let fixture: ComponentFixture<BeritasectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeritasectionComponent]
    });
    fixture = TestBed.createComponent(BeritasectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
