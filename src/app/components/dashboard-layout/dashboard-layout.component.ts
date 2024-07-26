import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  template: `
    <div class="dashboard-container">
      <app-sidebar></app-sidebar>
      <div class="content-container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {}
