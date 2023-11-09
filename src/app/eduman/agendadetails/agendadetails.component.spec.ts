import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendadetailsComponent } from './agendadetails.component';

describe('AgendadetailsComponent', () => {
  let component: AgendadetailsComponent;
  let fixture: ComponentFixture<AgendadetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendadetailsComponent]
    });
    fixture = TestBed.createComponent(AgendadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
