import { TestBed } from '@angular/core/testing';

import { RegisterTomService } from './register-tom.service';

describe('RegisterTomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterTomService = TestBed.get(RegisterTomService);
    expect(service).toBeTruthy();
  });
});
