import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 export type User ={
  name: string;
  email: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsersData() {
   return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
