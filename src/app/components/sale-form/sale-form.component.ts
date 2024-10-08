import { Component } from '@angular/core';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.scss']
})
export class SaleFormComponent {
  venta = { operador: '', documento: '', valor: 0 };

  submitVenta() {
    console.log('Venta realizada:', this.venta);
    // Lógica para enviar la venta al backend
  }
}
