import { Component, Output,EventEmitter  } from '@angular/core';
import { ContactosService } from '../services/contactos.service';
import { NgForm } from '@angular/forms';
import { listContactosI } from '../models/listaContactos.interface';
import { first } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-contacto',
  templateUrl: './delete-contacto.component.html',
  styleUrls: ['./delete-contacto.component.css']
})
export class DeleteContactoComponent {

  isDeleteModalOpen = false; // Controla la visibilidad del modal de eliminar
  contactoId: number = 0; // ID del contacto que se está eliminando
  contactoNombre: string = ''; // Nombre del contacto que se está eliminando

  @Output() contactoEliminado = new EventEmitter<void>(); // Emite un evento cuando se elimina el contacto

  constructor(private contactoService: ContactosService, private toastr: ToastrService) {}


  openDeleteModal(contacto: { id: number; nombre: string }) {
    this.isDeleteModalOpen = true;
    this.contactoId = contacto.id; // Guarda el ID del contacto
    this.contactoNombre = contacto.nombre; // Guarda el nombre del contacto
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
  }

  confirmDelete() {
    this.contactoService.deleteContacto(this.contactoId).subscribe(
      response => {
        console.log('Contacto eliminado:', response);
        this.closeDeleteModal(); // Cierra el modal después de eliminar el contacto
        this.contactoEliminado.emit(); // Emite el evento para notificar que se ha eliminado un contacto
      }
    );
  }
}
