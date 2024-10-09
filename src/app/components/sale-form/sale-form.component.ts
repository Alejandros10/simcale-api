import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importamos HttpClient para realizar el POST

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.scss'],
})
export class SaleFormComponent {
  sale = {
    operator: '',
    documentNumber: '',
    price: 0,
    phoneNumber: '',
    sellerId: null,
  };
  selectedOperator: any = null; // Para guardar el operador seleccionado
  errorMessage: string = ''; // Para manejar errores si no se encuentra el seller
  documentNotFound: boolean = false;
  highlightedField: string | null = null;

  // Definir EventEmitter para emitir un evento cuando se realice la venta
  @Output() saleCompleted = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  // Método para recibir el operador seleccionado desde el componente hijo
  onOperatorSelected(operator: any) {
    this.selectedOperator = operator;
  }

  // Restablece el estado de error al cambiar el input
  clearErrorOnInput() {
    this.documentNotFound = false;
    this.errorMessage = '';
  }

  // Método para resaltar temporalmente un campo
  highlightField(field: string) {
    this.highlightedField = field;
    setTimeout(() => {
      this.highlightedField = null; // Remueve la clase después de 1 segundo
    }, 1000);
  }

  // Buscar el seller por el número de documento
  findSellerByDocument() {
    const documentNumber = this.sale.documentNumber;

    // Si no hay documento ingresado, no continuar
    if (!documentNumber) {
      this.documentNotFound = true;
      this.sale.sellerId = null;
      this.errorMessage = 'Por favor, ingrese un número de documento.';
      return;
    }

    // TODO: Cambiar por .env
    this.http
      .get<any>(`http://localhost:8080/api/sellers/document/${documentNumber}`)
      .subscribe(
        (response) => {
          if (response && response.id) {
            this.sale.sellerId = response.id;
            this.documentNotFound = false; // El documento fue encontrado
            this.errorMessage = '';
            this.highlightField('sellerId');
          } else {
            this.sale.sellerId = null;
            this.documentNotFound = true; // El documento no fue encontrado, mostrar error
            this.errorMessage = 'Número de documento no encontrado.';
          }
        },
        (error) => {
          this.sale.sellerId = null;
          this.sale.sellerId = null;
          this.documentNotFound = true; // Error al buscar, mostrar el campo en rojo
          this.errorMessage = 'Error buscando el número de documento.';
        }
      );
  }

  submitVenta() {
    if (!this.sale.sellerId) {
      this.errorMessage = 'Por favor, ingrese un número de documento válido.';
      return;
    }

    const saleData = {
      price: this.sale.price,
      phoneNumber: this.sale.phoneNumber,
      saleDate: new Date().toISOString(),
      seller: {
        id: this.sale.sellerId, // Tomar Id del seller
      },
      operator: {
        id: this.selectedOperator?.id || null,
      },
    };


    // TODO: Cambiar por .env
    this.http.post('http://localhost:8080/api/sales/add', saleData).subscribe(
      (response) => {
        console.log('Venta realizada:', response);
        this.saleCompleted.emit();
        this.errorMessage = ''; // Limpiar mensaje de error si la venta es exitosa
      },
      (error) => {
        console.error('Error realizando la venta:', error);
        this.errorMessage = 'Error realizando la venta';
      }
    );
  }
}
