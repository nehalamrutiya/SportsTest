import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders  } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { SportsTest } from './sports-test';
import { SportsTestAdd } from './sports-test-add';

@Injectable({
  providedIn: 'root'
})
export class SportsTestService {
    
    constructor(private http: HttpClient) { }
  
    baseUrl = 'http://localhost:8000/api';
    
    getSports(): Observable<SportsTest> {
        return this.http.get<SportsTest>(this.baseUrl+'/sports', {responseType: 'json'});
    }
    
    addSports(sportstestadd: SportsTestAdd): Observable<HttpResponse<SportsTestAdd>>{
        console.log("add Sports ");
        let httpHeaders = new HttpHeaders({
             'Content-Type' : 'application/json'
        });    
        console.log(sportstestadd);
        return this.http.post<SportsTestAdd>(this.baseUrl+'/addSportsTest', sportstestadd,
            {
              headers: httpHeaders,
              observe: 'response'
            }
        );     
    }
    
}
