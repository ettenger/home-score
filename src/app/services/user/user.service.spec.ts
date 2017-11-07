import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should login user #1', inject([UserService], (service: UserService) => {
    service.login('1').subscribe(res => {
      expect(res['loggedIn']).toBe(true);
    });
  }));

  it('should fail to login user #3', inject([UserService], (service: UserService) => {
    service.login('3').subscribe(res => {
      expect(res).toBeUndefined();
    }, err => expect(err).toBeTruthy());
  }));
});
