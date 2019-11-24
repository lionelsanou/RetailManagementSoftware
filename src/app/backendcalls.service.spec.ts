import { TestBed } from '@angular/core/testing';

import { BackendcallsService } from './backendcalls.service';

describe('BackendcallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendcallsService = TestBed.get(BackendcallsService);
    expect(service).toBeTruthy();
  });
});
