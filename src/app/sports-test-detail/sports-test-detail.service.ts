import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { SportsTestDetail } from './sports-test-detail';
import { EnvironmentService } from './../shared/environment/environment.service';
import { AuthenticationService } from './../shared/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SportsTestDetailService {

  constructor(private http: HttpClient,
    private environmentService: EnvironmentService,
    private authService: AuthenticationService) { }
  
  baseUrl = 'http://localhost:8000/api';
  
    getSportsDetail(id:number): Observable<SportsTestDetail> {
        return this.http.get<SportsTestDetail>(this.baseUrl+'/sportsDetail/'+id, {responseType: 'json'});
    }
    
}
