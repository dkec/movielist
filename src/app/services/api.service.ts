import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  rootUrl = environment.apiUrl;
  defaultParams = { apiKey: environment.apiKey };

  get(path: string, params?): Observable<any> {
    const requestPath = path[0] === '/' ? path : `/${path}`;
    const url = `${this.rootUrl}${requestPath}`;

    const requestParams = {
      ...this.defaultParams,
      ...params
    };

    return this.http.get(url, { params: requestParams });
  }
}
