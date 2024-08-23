import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelefonosService {
  private apiUrl = 'http://127.0.0.1:8000/api/telefono';

  constructor(private http: HttpClient) {}

  getAllTelefonos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAllTelefonos`);
  }

  createTelefono(contactoId: number, telefono: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${contactoId}/createTelefono`, telefono);
  }

  getTelefono(contactoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${contactoId}/getTelefono`);
  }

  updateTelefono(contactoId: number, telefonoId: number, telefono: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${contactoId}/updateTelefono/${telefonoId}`, telefono);
  }

  deleteTelefono(contactoId: number, telefonoId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${contactoId}/deleteTelefono/${telefonoId}`);
  }
}
