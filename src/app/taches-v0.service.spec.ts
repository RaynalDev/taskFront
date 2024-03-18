import { TestBed } from '@angular/core/testing';

import { TachesV0Service } from './taches-v0.service';

describe('TachesV0Service', () => {
  let service: TachesV0Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TachesV0Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
