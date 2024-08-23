import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DireccionesService {
  private apiUrl = 'http://127.0.0.1:8000/api/direcciones';

  constructor(private http: HttpClient) {}

  getAllDirecciones(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAllDirecciones`);
  }

  getDireccion(contactoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${contactoId}/getDireccion`);
  }

  createDireccion(contactoId: number, direccion: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${contactoId}/createDireccion`, direccion);
  }

  updateDireccion(contactoId: number, direccionId: number, direccion: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${contactoId}/updateDireccion/${direccionId}`, direccion);
  }

  deleteDireccion(contactoId: number, direccionId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${contactoId}/deleteDireccion/${direccionId}`);
  }
}
