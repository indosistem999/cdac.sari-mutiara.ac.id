import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaPengumumanSectionComponent } from './agenda-pengumuman-section.component';

describe('AgendaPengumumanSectionComponent', () => {
  let component: AgendaPengumumanSectionComponent;
  let fixture: ComponentFixture<AgendaPengumumanSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendaPengumumanSectionComponent]
    });
    fixture = TestBed.createComponent(AgendaPengumumanSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
