import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { SportsTestType } from './sports-test-type';

@Injectable({
  providedIn: 'root'
})
export class SportsTestTypeService {

    constructor(private http: HttpClient) { }
  
    baseUrl = 'http://localhost:8000/api';

    getSportsTestType(): Observable<SportsTestType> {
        return this.http.get<SportsTestType>(this.baseUrl+'/sportsTestType', {responseType: 'json'});
    }
}
