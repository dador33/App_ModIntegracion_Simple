import { Component, OnInit } from '@angular/core';
import { Sidebar } from '../../core/interface/sidebar.interface';
import { SidebarService } from '../../services/sidebar.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  consumoItems: Sidebar[] = [];
  publicacionItems: Sidebar[] = [];

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.getSidebarItems().subscribe(items => {
      this.consumoItems = items.filter(item => item.r_TipoServicio === 'Servicio consumo');
      this.publicacionItems = items.filter(item => item.r_TipoServicio === 'Servicio Publicacion');

      console.log(this.consumoItems);
      console.log(this.publicacionItems);


    });
  }
}
