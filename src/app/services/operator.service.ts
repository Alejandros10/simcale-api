import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  // TODO: Cambiar por .env
  private apiUrl = 'http://localhost:8080/api/operators';

  constructor(private http: HttpClient) { }

  // Método para obtener todos los operadores
  getOperators(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  // Método para obtener un operador por ID
  getOperatorById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Método para agregar un nuevo operador
  addOperator(operator: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, operator);
  }

  // Método para actualizar un operador existente
  updateOperator(id: number, operator: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, operator);
  }

  // Método para eliminar un operador
  deleteOperator(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
