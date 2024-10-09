import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  operators: any[] = [];

  @Output() operatorSelected = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getOperators();
  }

  // TODO: Cambiar por .env
  getOperators() {
    this.http.get<any[]>('http://localhost:8080/api/operators/all')
      .subscribe(response => {
        this.operators = response;
      });
  }

  onOperatorChange(event: any) {
    const selectedValue = event.target.value;

    if (selectedValue === "") {
      this.operatorSelected.emit(null);
    } else {
      const selectedOperator = this.operators.find(operator => operator.id == selectedValue);
      this.operatorSelected.emit(selectedOperator);
    }
  }

}
