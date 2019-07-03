import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }
  
    baseUrl = 'http://localhost:8000/api';
  
    getUsers(): Observable<User> {
        return this.http.get<User>(this.baseUrl+'/users', {responseType: 'json'});
    }
}
