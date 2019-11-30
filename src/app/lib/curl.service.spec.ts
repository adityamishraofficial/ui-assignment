import { TestBed } from '@angular/core/testing';

import { CurlService } from './curl.service';

describe('CurlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurlService = TestBed.get(CurlService);
    expect(service).toBeTruthy();
  });
});
