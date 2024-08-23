import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  private apiUrl = 'http://127.0.0.1:8000/api/contactos';

  constructor(private http: HttpClient) { }

  getAllContactos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllContactos`);
  }

  getContacto(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getContacto/${id}`);
  }

  createContacto(contacto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createContacto`, contacto);
  }

  updateContacto(id: number, contacto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateContacto/${id}`, contacto);
  }

  deleteContacto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteContacto/${id}`);
  }
}
