import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';
import { Sidebar } from '../../core/interface/sidebar.interface';

@Component({
  selector: 'app-integracion',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './integracion.component.html',
  styleUrl: './integracion.component.css'
})
export class IntegracionComponent implements OnInit {

form: FormGroup;
  sidebarItems: Sidebar[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private sidebarService: SidebarService
  ) {
    this.form = this.fb.group({
      r_TipoServicio: [''],
      r_NombreServicio: [''],
      r_NOM_TABLA: [''],
      r_Id: [''],
      r_Nombre: [''],
      r_Descripcion: [''],
      r_Proce_pro_rsta: [''],
      r_Sistema_fuente: [''],
      r_Tipo: [''],
      r_Url: [''],
      r_Metodo: [''],
      r_Content_Type: [''],
      r_Accept: [''],
      r_Credenciales: ['']
    });
  }

  ngOnInit(): void {
    this.sidebarService.getSidebarItems().subscribe(items => {
      this.sidebarItems = items;
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if (id) {
          const item = this.sidebarItems.find(i => i.r_Id === id);
          if (item) {
            this.form.patchValue(item);
          }
        }
      });
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
