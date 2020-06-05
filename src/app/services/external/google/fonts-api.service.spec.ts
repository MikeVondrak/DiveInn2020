import { TestBed } from '@angular/core/testing';

import { FontsApiService } from './fonts-api.service';

describe('FontsApiService', () => {
  let service: FontsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FontsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
