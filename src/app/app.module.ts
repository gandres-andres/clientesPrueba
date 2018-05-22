import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { ClienteComponent } from './component/clientes/cliente/cliente.component';
import { ClientesComponent } from './component/clientes/clientes.component';
import { HomeComponent } from './component/home/home.component';

import { FeatureRoutingModule } from "./app.routers";

// import { ClientesService } from "../app/services/clientes.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClienteComponent,
    ClientesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FeatureRoutingModule,
    // ClientesService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
