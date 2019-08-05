import { TestBed } from '@angular/core/testing';

import { ReqempDataService } from './reqemp-data.service';

describe('ReqempDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReqempDataService = TestBed.get(ReqempDataService);
    expect(service).toBeTruthy();
  });
});
