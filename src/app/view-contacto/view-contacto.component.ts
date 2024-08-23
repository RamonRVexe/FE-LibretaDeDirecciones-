import { Component, Input, Output,EventEmitter   } from '@angular/core';
import { listContactosI } from '../models/listaContactos.interface';
import { listTelefonosI } from '../models/listaTelefonos.interface';
import { listDireccionesI } from '../models/listaDirecciones.interface';
import { listEmailI } from '../models/listaEmails.interface';
import { ContactosService } from '../services/contactos.service';
import { ToastrService } from 'ngx-toastr';
import { DireccionesService } from '../services/direcciones.service';
import { EmailsService } from '../services/emails.service';
import { TelefonosService } from '../services/telefonos.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-view-contacto',
  templateUrl: './view-contacto.component.html',
  styleUrls: ['./view-contacto.component.css']
})
export class ViewContactoComponent {


  isViewModalOpen = false;
  contactoId: number = 0;
  contactoNombre: string='';
  telefonos: listTelefonosI[] = [];
  emails: listEmailI[] = [];
  direcciones: listDireccionesI[]= [];

  @Output() contactoEliminado = new EventEmitter<void>();

  constructor(
    private contactoService: ContactosService,
    private toastr: ToastrService,
    private direccionService: DireccionesService,
    private emailService: EmailsService,
    private telefonoService: TelefonosService
  ) {}

  openViewModal(contacto: { id: number; nombre: string}) {
    this.isViewModalOpen = true;
    this.contactoId = contacto.id; // Guarda el ID del contacto
    this.contactoNombre = contacto.nombre; // Guarda el nombre del contacto
    this.loadContactInfo();
  }

  loadContactInfo() {
    // Obtiene la información de los teléfonos, correos y direcciones
    this.telefonoService.getTelefono(this.contactoId).pipe(first())
      .subscribe(
      (telefonos) => {
        this.telefonos = telefonos;
        console.log(this.telefonos);

      }
    );

    this.emailService.getEmail(this.contactoId).pipe(first())
      .subscribe(
        (emails) => {
          this.emails = emails;

        },
    );


    this.direccionService.getDireccion(this.contactoId).pipe(first())
      .subscribe(
        (direcciones) => {
          this.direcciones = direcciones;
        }
      );
    }

  closeViewModal() {
    this.isViewModalOpen = false;
  }

  editTelefono(telefono: any) {
    // Lógica para editar un teléfono
}

  deleteTelefono(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este teléfono?')) {
      this.telefonoService.deleteTelefono(this.contactoId, id).pipe(first())
        .subscribe(
          () => {
            this.toastr.success('Teléfono eliminado correctamente');
            this.loadContactInfo(); // Recarga la información
          }
        );
    }
  }

  addTelefono() {
    // Lógica para agregar un teléfono
  }

  editEmail(email: any) {
    // Lógica para editar un email
  }

  deleteEmail(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este email?')) {
      this.emailService.deleteEmail(this.contactoId, id).pipe(first())
        .subscribe(
          () => {
            this.toastr.success('Email eliminado correctamente');
            this.loadContactInfo(); // Recarga la información
          }
        );
    }
  }

  addEmail() {
    // Lógica para agregar un email
  }


  editDireccion(email: any) {
    // Lógica para editar un email
  }

  deleteDireccion(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar esta dirección?')) {
      this.direccionService.deleteDireccion(this.contactoId, id).pipe(first())
        .subscribe(
          () => {
            this.toastr.success('Dirección eliminada correctamente');
            this.loadContactInfo(); // Recarga la información
          }
        );
    }
  }

  addDireccion() {
    // Lógica para agregar un email
  }
}
