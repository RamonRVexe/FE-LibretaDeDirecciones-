import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddContactoComponent } from './add-contacto/add-contacto.component';
import { UpdateContactoComponent } from './update-contacto/update-contacto.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteContactoComponent } from './delete-contacto/delete-contacto.component';
import { ViewContactoComponent } from './view-contacto/view-contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddContactoComponent,
    UpdateContactoComponent,
    DeleteContactoComponent,
    ViewContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
