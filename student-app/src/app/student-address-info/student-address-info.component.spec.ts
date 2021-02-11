import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddressInfoComponent } from './student-address-info.component';

describe('StudentAddressInfoComponent', () => {
  let component: StudentAddressInfoComponent;
  let fixture: ComponentFixture<StudentAddressInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAddressInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddressInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
