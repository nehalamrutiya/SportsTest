import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { AthleteAdd } from './athlete-add';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AthleteAddService {

    constructor(private http: HttpClient) { }
  
    baseUrl = 'http://localhost:8000/api';
  
   addAthlete(athleteadd: AthleteAdd): Observable<HttpResponse<AthleteAdd>>{
        console.log("add athlete ");
        let httpHeaders = new HttpHeaders({
             'Content-Type' : 'application/json'
        });    
        console.log(athleteadd);
        return this.http.post<AthleteAdd>(this.baseUrl+'/addAthlete', athleteadd,
            {
              headers: httpHeaders,
              observe: 'response'
            }
        ); 
    }
    
    editAthleteById(athleteadd: AthleteAdd,id:number): Observable<HttpResponse<AthleteAdd>>{
        console.log("edit athlete ");
        let httpHeaders = new HttpHeaders({
             'Content-Type' : 'application/json'
        });    
        console.log(athleteadd);
        return this.http.post<AthleteAdd>(this.baseUrl+'/editAthleteById/'+id, athleteadd,
            {
              headers: httpHeaders,
              observe: 'response'
            }
        ); 
    }
    
    deleteAthleteById(id:number): Observable<{}>{
        console.log("delete athlete ");
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };

        return this.http.delete(this.baseUrl+'/deleteAthleteById/'+id, httpOptions);
        
    }

    getAthleteById(id:number): Observable<AthleteAdd> {
        return this.http.get<AthleteAdd>(this.baseUrl+'/getAthleteById/'+id, {responseType: 'json'});
    }
}
