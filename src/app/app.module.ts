import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { ClienteComponent } from './component/clientes/cliente/cliente.component';
import { ClientesComponent } from './component/clientes/clientes.component';
import { HomeComponent } from './component/home/home.component';

import { FeatureRoutingModule } from "./app.routers";
import { FooterComponent } from './component/shared/footer/footer.component';

import { ClientesService } from "../app/services/clientes.service";
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClienteComponent,
    ClientesComponent,
    HomeComponent,
    FooterComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FeatureRoutingModule,
    HttpModule
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
