import { TestBed } from '@angular/core/testing';

import { TesteurService } from './testeur.service';

describe('TesteurService', () => {
  let service: TesteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
