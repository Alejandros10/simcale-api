import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from '../models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  // TODO: Cambiar por .env
  private apiUrl = 'http://localhost:8080/api/sales/all';

  constructor(private http: HttpClient) { }

  // Obtener todas las ventas
  getSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.apiUrl);
  }
}
