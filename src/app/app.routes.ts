import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { IntegracionComponent } from './components/integracion/integracion.component';


export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'service/:id', component: IntegracionComponent },
      { path: '', redirectTo: 'service/default', pathMatch: 'full' }
    ]
  }
];
