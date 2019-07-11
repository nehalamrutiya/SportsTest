import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders  } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { SportsTest } from './sports-test';
import { SportsTestAdd } from '../shared/sports-test-add/sports-test-add';
import { EnvironmentService } from './../shared/environment/environment.service';
import { AuthenticationService } from './../shared/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class SportsTestService {
    
    constructor(private http: HttpClient,
    private environmentService: EnvironmentService,
    private authService: AuthenticationService) { }
  
    getSports(): Observable<SportsTest> {
        let headers = new HttpHeaders();
        headers = this.authService.createHeader();
        
        let url = this.environmentService.setApiService('sports')
        return this.http.get<SportsTest>(url, {headers});
    }
    
    addSports(sportstestadd: SportsTestAdd): Observable<HttpResponse<SportsTestAdd>>{
        let headers = new HttpHeaders();
        headers = this.authService.createHeader();   
        let url = this.environmentService.setApiService('addSportsTest')
        return this.http.post<SportsTestAdd>(url, sportstestadd,
            {
              headers: headers,
              observe: 'response'
            }
        );     
    }
    
    deleteSportsTest(id:number): Observable<{}>{
        let headers = new HttpHeaders();
        headers = this.authService.createHeader();
        let url = this.environmentService.setApiService('deleteSportsTest')+'/'+id
        return this.http.delete(url, {headers});
    }
    
}
