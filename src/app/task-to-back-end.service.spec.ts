import { TestBed } from '@angular/core/testing';

import { TaskToBackEndService } from './task-to-back-end.service';

describe('TaskToBackEndService', () => {
  let service: TaskToBackEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskToBackEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
