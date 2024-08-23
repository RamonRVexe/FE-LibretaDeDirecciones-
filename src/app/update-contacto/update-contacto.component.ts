import { Component, Input } from '@angular/core';
import { ContactosService } from '../services/contactos.service';
import { NgForm } from '@angular/forms';
import { listContactosI } from '../models/listaContactos.interface';
import { first } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-contacto',
  templateUrl: './update-contacto.component.html',
  styleUrls: ['./update-contacto.component.css']
})
export class UpdateContactoComponent {

  isUpdateModalOpen = false; // Controla la visibilidad del modal de actualización

  constructor(private contactoService: ContactosService, private toastr: ToastrService) {}

  // Propiedades del formulario
   nombre: string = '';
   notas: string = '';
   fechaCumpleanos: string = '';
   paginaWeb: string = '';
   empresa: string = '';

  contactoId: number=0; // ID del contacto que se está actualizando


  openUpdateModal(contacto: listContactosI) {
    this.isUpdateModalOpen = true;
    this.contactoId = contacto.id; // Guardar el ID del contacto
    this.nombre = contacto.nombre;
    this.notas = contacto.notas;
    this.fechaCumpleanos = contacto.fecha_cumpleanos;
    this.paginaWeb = contacto.pagina_web;
    this.empresa = contacto.empresa;
  }

  closeUpdateModal() {
    this.isUpdateModalOpen = false;
  }
   // Método para actualizar el contacto
   actualizarContacto(form: NgForm) {
    if (form.valid) {
      const updatedContacto = {
        nombre: this.nombre,
        notas: this.notas,
        fechaCumpleanos: this.fechaCumpleanos,
        paginaWeb: this.paginaWeb,
        empresa: this.empresa,
      };

      this.contactoService.updateContacto(this.contactoId, updatedContacto).pipe(first())
        .subscribe(
          (response:any) => {
          this.toastr.success('Contacto actualizado exitosamente', 'Éxito');
          this.closeUpdateModal(); // Cierra el modal después de actualizar el contacto
          form.reset();
        }
      );
    }
  }
}
