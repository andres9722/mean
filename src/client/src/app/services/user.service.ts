import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';

@Injectable()
export class UserService {
  domain: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getUsers() :Observable<User[]> {
    return this.http.get<User[]>(`${this.domain}/api/users`)
  }

  getUser(id) :Observable<any> {
    return this.http.get<User>(`${this.domain}/api/users/${id}`)
  }

  addUser(newUser: User) :Observable<any> {
    return this.http.post<User>(`${this.domain}/api/users/`, newUser)
  }

  updateUser(newUser) :Observable<any> {
    return this.http.put<User>(`${this.domain}/api/users/${newUser._id}`, newUser)
  }

  deleteUser (id) :Observable<any> {
    return this.http.delete<User>(`${this.domain}/api/users/${id}`)
  }
}
