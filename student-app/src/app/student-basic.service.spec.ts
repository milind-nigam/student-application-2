import { TestBed } from '@angular/core/testing';

import { StudentBasicService } from './student-basic.service';

describe('StudentBasicService', () => {
  let service: StudentBasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentBasicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
