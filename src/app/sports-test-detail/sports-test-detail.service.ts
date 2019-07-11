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
  
    getSportsDetail(id:number): Observable<SportsTestDetail> {
        let headers = new HttpHeaders();
        headers = this.authService.createHeader();
        let url = this.environmentService.setApiService('sportsDetail')+'/'+id;
        return this.http.get<SportsTestDetail>(url, {headers});
    }
    
}
