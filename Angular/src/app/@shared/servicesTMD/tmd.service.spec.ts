import { TestBed } from '@angular/core/testing';

import { TmdService } from './tmd.service';

describe('TmdService', () => {
  let service: TmdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
