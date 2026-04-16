import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call api and return users data', () => {
    const mockUsers = [
      { email: 'abc@xyz.com', name: 'Komal' },
      { email: 'xyz@abc.com', name: 'Verma' }
    ];
    service.getUsersData().subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(mockUsers)
    })
    const res = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(res.request.method).toBe('GET');
    res.flush(mockUsers);
  });

});
