import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { UserService } from './user.service';
import { of } from 'rxjs';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let mockService: jasmine.SpyObj<UserService>;

  beforeEach(() => {

    mockService = jasmine.createSpyObj('UserService', ['getUsersData']);
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [{
        provide: UserService,
        useValue: mockService,
      }],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
  })

  it('should call service and get data',()=>{
     const mockUsers = [
      { email: 'abc@xyz.com', name: 'Komal' },
      { email: 'xyz@abc.com', name: 'Verma' }
    ];
    mockService.getUsersData.and.returnValue(of(mockUsers));

    fixture.detectChanges();

    expect(component.finalArray.length).toBe(2);
    expect(component.finalArray).toEqual(mockUsers);
    expect(mockService.getUsersData).toHaveBeenCalled();

  })

});
