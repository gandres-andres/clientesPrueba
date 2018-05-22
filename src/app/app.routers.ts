import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import { ClientesComponent } from './component/clientes/clientes.component';
import { ClienteComponent } from './component/clientes/cliente/cliente.component';



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'cliente/:id', component: ClienteComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
