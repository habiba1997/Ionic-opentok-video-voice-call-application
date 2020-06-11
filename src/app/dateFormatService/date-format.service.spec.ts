import { TestBed } from '@angular/core/testing';

import { DateFormatService } from './date-format.service';

describe('DateFormatService', () => {
  let service: DateFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
