import { TestBed } from '@angular/core/testing';

import { CacheUsersService } from './cache-users.service';

describe('CacheUsersService', () => {
  let service: CacheUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
