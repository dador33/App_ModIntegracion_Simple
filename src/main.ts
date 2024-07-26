import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { DashboardLayoutComponent } from './app/components/dashboard-layout/dashboard-layout.component';
import { SidebarComponent } from './app/components/sidebar/sidebar.component';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
