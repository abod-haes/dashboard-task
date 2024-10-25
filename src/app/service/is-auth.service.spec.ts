import { TestBed } from '@angular/core/testing';

import { IsAuthService } from './is-auth.service';

describe('IsAuthService', () => {
  let service: IsAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
