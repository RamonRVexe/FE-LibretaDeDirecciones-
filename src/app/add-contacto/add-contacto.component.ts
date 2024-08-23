import { Component, Input, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactosService } from '../services/contactos.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-contacto',
  templateUrl: './add-contacto.component.html',
  styleUrls: ['./add-contacto.component.css']
})
export class AddContactoComponent {

  constructor(private contactoService: ContactosService) {}

    @Input() isOpen: boolean = false;
    @Output() close = new EventEmitter<void>(); // Evento para notificar el cierre

      // Propiedades del formulario
      nombre: string = '';
      notas: string = '';
      fechaCumpleanos: string = '';
      paginaWeb: string = '';
      empresa: string = '';

  closeModal() {
    this.isOpen = false; // Cambia la visibilidad
    this.close.emit(); // Emite el evento para el cierre
  }

  agregarContacto(form: NgForm) {
    if (form.valid) {
      const contacto = {
        nombre: this.nombre,
        notas: this.notas,
        fechaCumpleanos: this.fechaCumpleanos,
        paginaWeb: this.paginaWeb,
        empresa: this.empresa,
      };

      this.contactoService.createContacto(contacto).pipe(first())
        .subscribe(
          (response:any) => {
            console.log('Contacto agregado:', response);
            this.closeModal(); // Cierra el modal después de agregar el contacto
            form.reset();
        }
      );
      (error:any) => {
        console.log('Error al agregar contacto', error)
      }
    }
  }

}
