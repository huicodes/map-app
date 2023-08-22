import { TestBed } from '@angular/core/testing';

import { FactsheetService } from './factsheet.service';

describe('FactsheetService', () => {
  let service: FactsheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactsheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
