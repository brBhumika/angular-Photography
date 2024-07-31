import { TestBed } from '@angular/core/testing';

import { PhserviceService } from './phservice.service';

describe('PhserviceService', () => {
  let service: PhserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
