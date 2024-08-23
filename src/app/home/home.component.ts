import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactosService } from '../services/contactos.service';
import { UpdateContactoComponent } from '../update-contacto/update-contacto.component';
import { listContactosI } from '../models/listaContactos.interface';
import { DeleteContactoComponent } from '../delete-contacto/delete-contacto.component';
import { ViewContactoComponent } from '../view-contacto/view-contacto.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    contactos: listContactosI[] = [];
    filteredContactos: listContactosI[] = [];
    public page!: number;
    searchTerm: string = '';

    @ViewChild(UpdateContactoComponent) updateContactoComponent!: UpdateContactoComponent;
    @ViewChild(DeleteContactoComponent) deleteContactoComponent!: DeleteContactoComponent;
    @ViewChild(ViewContactoComponent) viewContactoComponent!: ViewContactoComponent;

    isModalOpen: boolean = false;

    openModal() {
      this.isModalOpen = true;
    }

    closeModal() {
      this.isModalOpen = false; // Método para cerrar el modal
    }

    constructor(private contactosService: ContactosService) { }

    ngOnInit(): void {
      this.loadContactos();
    }

    loadContactos() {
      this.contactosService.getAllContactos().subscribe(
        (data) => {
          this.contactos = data;
          this.filteredContactos = data; // Inicializar filteredContactos con todos los contactos
        }
      );
    }

    filterContactos() {
      const searchTermLower = this.searchTerm.toLowerCase();
      this.filteredContactos = this.contactos.filter(contacto =>
        contacto.nombre.toLowerCase().includes(searchTermLower) ||
        contacto.notas.toLowerCase().includes(searchTermLower) ||
        contacto.fecha_cumpleanos.toLowerCase().includes(searchTermLower) ||
        contacto.pagina_web.toLowerCase().includes(searchTermLower) ||
        contacto.empresa.toLowerCase().includes(searchTermLower)
      );
    }

    openUpdateModal(contacto: listContactosI) {
      this.updateContactoComponent.openUpdateModal(contacto); // Llama al método en el componente del modal
    }

    openDeleteModal(contacto: listContactosI) {
      this.deleteContactoComponent.openDeleteModal(contacto);
    }

    openViewModal(contacto: listContactosI) {
      this.viewContactoComponent.openViewModal(contacto);
    }
}
