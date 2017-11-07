import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {
  private baseUrl = 'https://stg-garcon.herokuapp.com/api/1/subscriptions/homescore/';

  constructor(private http: Http) { }

  get(path: string): Observable<any> {
    return this.http.get(this.baseUrl + path)
      .map(res => res.json());
  }

}
