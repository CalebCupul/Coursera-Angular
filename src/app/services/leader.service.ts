import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(
    private http: HttpClient,
    private ProcessHTTPMsgService: ProcessHTTPMsgService
  ) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'Leadership')
    .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }
  

  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'Leadership/' + id)
    .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }
  
  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + 'Leadership?featured=true').pipe(map(Leaders => Leaders[0]))
    .pipe(catchError(this.ProcessHTTPMsgService.handleError));
    }

}
