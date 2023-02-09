/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ConfigappService } from './configapp.service';

describe('Service: Appconfigservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigappService]
    });
  });

  it('should ...', inject([ConfigappService], (service: ConfigappService) => {
    expect(service).toBeTruthy();
  }));
});
