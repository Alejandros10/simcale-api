import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/models/sale.model';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  recargas: Sale[] = [];

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    this.fetchSales();
  }

  fetchSales(): void {
    this.saleService.getSales().subscribe(
      (data: Sale[]) => {
        this.recargas = data;
      },
      (error) => {
        console.error('Error obteniendo recargas', error);
      }
    );
  }
}
