import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('ApiService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    })
  );

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
