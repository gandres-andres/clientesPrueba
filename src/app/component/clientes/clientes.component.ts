import { Component, OnInit } from '@angular/core';
import { Cliente } from "./modelos/cliente";
import { ClientesService } from "../../services/clientes.service";


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listaClientes:Cliente[];
  loading:boolean;

  constructor(private _clientes: ClientesService) { }

  ngOnInit() {
    this.loading=true;
    this.buscarClientes();
  }

  buscarClientes(){
    this._clientes.getClientes().subscribe(clientes=>{
      setTimeout(() => {
        this.loading = false;
        this.listaClientes = clientes;
      }, 2000);
    });
  }
  eliminarCliente(key$:string){
    this._clientes.deleteClientes(key$).subscribe(res=>{
      if (res) {
        console.error(res);
      }else{
        this.buscarClientes();
      }
    });
  }

}
