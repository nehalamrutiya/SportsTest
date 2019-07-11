import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { User } from './user';
import { EnvironmentService } from '../environment/environment.service';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient,
        private environmentService: EnvironmentService,
        private authService: AuthenticationService) { }
  
    getUsers(): Observable<User> {
        let headers = new HttpHeaders();
        headers = this.authService.createHeader();
        
        let url = this.environmentService.setApiService('users')
        return this.http.get<User>(url, {headers});
    }
}
