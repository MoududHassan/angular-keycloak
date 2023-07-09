import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  requestOptions: Object = {
      headers: this.headers,
      responseType: 'text'
    }

  private baseUrl = "http://localhost:8082/api/test/user";

  constructor(private http: HttpClient) {
    
   }

  getUsers(): Observable<string>{
    return this.http.get<string>(`${this.baseUrl}`, this.requestOptions);
  }
}
