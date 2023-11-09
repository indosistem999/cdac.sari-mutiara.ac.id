import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammainComponent } from './programmain.component';

describe('ProgrammainComponent', () => {
  let component: ProgrammainComponent;
  let fixture: ComponentFixture<ProgrammainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammainComponent]
    });
    fixture = TestBed.createComponent(ProgrammainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
