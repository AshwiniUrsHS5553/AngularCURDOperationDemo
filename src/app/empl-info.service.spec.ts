import { TestBed } from '@angular/core/testing';

import { EmplInfoService } from './empl-info.service';

describe('EmplInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmplInfoService = TestBed.get(EmplInfoService);
    expect(service).toBeTruthy();
  });
});
