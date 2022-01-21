import { TestBed } from '@angular/core/testing';

import { JsonService } from './json.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JsonService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JsonService]
    })
  );

  it('should be created', () => {
    const service: JsonService = TestBed.get(JsonService);
    expect(service).toBeTruthy();
  });
});
