import { Component, OnInit } from '@angular/core';
import { Cliente } from "./modelos/cliente";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listaClientes:Cliente;

  constructor() { }

  ngOnInit() {
  }

}
