import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormBuilder, Validators } from '@angular/forms';

export type User = {
  name: string;
  email: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  finalArray: User[] = [];
  user = 'ankit';
  constructor(private userService: UserService, private cd: ChangeDetectorRef,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }
  update() {
    this.user = 'zan';
    this.cd.markForCheck()
  }

  getUsers() {
    this.userService.getUsersData().subscribe((res) => {
      this.finalArray = res?.map((user) => {
        // this.name = 'ANKIT'
        // console.log(this.name.toLowerCase())
        return {
          name: user.name,
          email: user.email,
        };
      });
      this.cd.detectChanges()
    });
  }
  registrationForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    gender: ['male']
  })
  genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];
  onSubmit() {
    console.log(this.registrationForm.value);
  }
  
}

