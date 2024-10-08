import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './components/history/history.component';
import { SaleFormComponent } from './components/sale-form/sale-form.component';

const routes: Routes = [
  { path: 'history', component: HistoryComponent },
  { path: 'sale', component: SaleFormComponent },
  { path: '', redirectTo: '/sale', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
