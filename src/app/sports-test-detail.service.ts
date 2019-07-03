import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { SportsTestDetail } from './sports-test-detail';

@Injectable({
  providedIn: 'root'
})
export class SportsTestDetailService {

  constructor(private http: HttpClient) { }
  
  baseUrl = 'http://localhost:8000/api';
  
    getSportsDetail(id:number): Observable<SportsTestDetail> {
        return this.http.get<SportsTestDetail>(this.baseUrl+'/sportsDetail/'+id, {responseType: 'json'});
    }
    
}
