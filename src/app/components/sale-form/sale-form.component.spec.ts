import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleFormComponent } from './sale-form.component';

describe('SaleFormComponent', () => {
  let component: SaleFormComponent;
  let fixture: ComponentFixture<SaleFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleFormComponent]
    });
    fixture = TestBed.createComponent(SaleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
