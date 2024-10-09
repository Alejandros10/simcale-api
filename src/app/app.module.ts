import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HistoryComponent } from './components/history/history.component';
import { SaleFormComponent } from './components/sale-form/sale-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorsComponent,
    HeaderComponent,
    FooterComponent,
    HistoryComponent,
    SaleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
