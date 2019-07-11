import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { AthleteAdd } from './athlete-add';
import { User } from '../shared/user/user';
import { EnvironmentService } from './../shared/environment/environment.service';
import { AuthenticationService } from './../shared/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class AthleteAddService {

    constructor(private http: HttpClient,
    private environmentService: EnvironmentService,
    private authService: AuthenticationService) { }
  
   addAthlete(athleteadd: AthleteAdd): Observable<HttpResponse<AthleteAdd>>{
        let headers = new HttpHeaders();
        headers = this.authService.createHeader();
        let url = this.environmentService.setApiService('addAthlete');
        return this.http.post<AthleteAdd>(url, athleteadd,
            {
              headers: headers,
              observe: 'response'
            }
        ); 
    }
    
    editAthleteById(athleteadd: AthleteAdd,id:number): Observable<HttpResponse<AthleteAdd>>{
        let headers = new HttpHeaders();
        headers = this.authService.createHeader();
        let url = this.environmentService.setApiService('editAthleteById')+'/'+id;
        return this.http.post<AthleteAdd>(url, athleteadd,
            {
              headers: headers,
              observe: 'response'
            }
        ); 
    }
    
    deleteAthleteById(id:number): Observable<{}> {
        let headers = new HttpHeaders();
        headers = this.authService.createHeader();
        let url = this.environmentService.setApiService('deleteAthleteById')+'/'+id;
        return this.http.delete(url, {headers});
    }

    getAthleteById(id:number): Observable<AthleteAdd> {
        let headers = new HttpHeaders();
        headers = this.authService.createHeader();
        let url = this.environmentService.setApiService('getAthleteById')+'/'+id;
        return this.http.get<AthleteAdd>(url, {headers});
    }
}
