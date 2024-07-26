import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DashboardLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App_ModIntegracion_Simple';
}
