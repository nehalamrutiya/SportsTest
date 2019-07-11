import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { SportsTestType } from './sports-test-type';
import { EnvironmentService } from '../environment/environment.service';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SportsTestTypeService {

    constructor(private http: HttpClient,
        private environmentService: EnvironmentService,
        private authService: AuthenticationService
        ) { }
  
    getSportsTestType(): Observable<SportsTestType> {
        let headers = new HttpHeaders();
        headers = this.authService.createHeader();
        
        let url = this.environmentService.setApiService('sportsTestType')
        return this.http.get<SportsTestType>(url, {headers});
    }
}
