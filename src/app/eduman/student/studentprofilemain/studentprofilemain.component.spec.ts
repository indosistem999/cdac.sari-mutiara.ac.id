import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentprofilemainComponent } from './studentprofilemain.component';

describe('StudentprofilemainComponent', () => {
  let component: StudentprofilemainComponent;
  let fixture: ComponentFixture<StudentprofilemainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentprofilemainComponent]
    });
    fixture = TestBed.createComponent(StudentprofilemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
