import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {
  private apiUrl = 'http://127.0.0.1:8000/api/email';

  constructor(private http: HttpClient) {}

  getAllEmails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAllEmail`);
  }

  createEmail(contactoId: number, email: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${contactoId}/createEmail`, email);
  }

  getEmail(contactoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${contactoId}/getEmail`);
  }

  updateEmail(contactoId: number, emailId: number, email: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${contactoId}/updateEmail/${emailId}`, email);
  }

  deleteEmail(contactoId: number, emailId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${contactoId}/deleteEmail/${emailId}`);
  }
}
