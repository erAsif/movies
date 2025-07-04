import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(`http://localhost:8000/api/register/`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`http://localhost:8000/api/login/`, data);
  }
}
