import { TestBed } from '@angular/core/testing';

import { FormServService } from './form-serv.service';

describe('FormServService', () => {
  let service: FormServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
