import { Component, ViewChild } from '@angular/core';
import { HistoryComponent } from './components/history/history.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simacel-app';
  @ViewChild('historyComponent') historyComponent: HistoryComponent | undefined;

  // Ejecutar cuando la vista esté inicializada y el ViewChild esté disponible
  ngAfterViewInit() {
    this.loadInitialSales();  // Cargar el historial de recargas en la inicialización
  }

  // Método que se llamará cada vez que se complete una venta
  onSaleCompleted() {
    this.historyComponent?.fetchSales();  // Refrescar el historial de ventas
  }

  // Método para cargar las ventas iniciales
  loadInitialSales() {
    this.historyComponent?.fetchSales();
  }
}
