import { TestBed } from '@angular/core/testing';

import { LoginControllerService } from './login-controller.service';

describe('LoginControllerService', () => {
  let service: LoginControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginControllerService);
  });

  it('should be create login controller service', () => {
    expect(service).toBeTruthy();
  });
});
