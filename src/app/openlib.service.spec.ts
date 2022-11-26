import { TestBed } from '@angular/core/testing';

import { OpenlibService } from './openlib.service';

describe('OpenlibService', () => {
  let service: OpenlibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenlibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
