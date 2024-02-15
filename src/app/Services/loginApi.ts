import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8081'; 

  constructor(private http: HttpClient) {}


  addUser(user: any): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/addUser`, user, { responseType: 'text' as 'json' });
  }
  getUSer(email: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/getUser/${email}`);
  }
}
