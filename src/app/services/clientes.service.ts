import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Cliente } from "../component/clientes/modelos/cliente";
import 'rxjs/Rx';
@Injectable()
export class ClientesService {

  clienteURL: string
  constructor(private http: Http) {
    this.clienteURL = "https://clientes-a2be9.firebaseio.com/"
  }

  postCliente(cliente: Cliente) {
    let body = JSON.stringify(cliente);
    let url = `${this.clienteURL}clientes.json`;
    return this.http.post(url, body).map(res => {
      return res.json();
    });
  }

  putCliente(cliente: Cliente, key$:string) {
    let body = JSON.stringify(cliente);
    let url = `${this.clienteURL}clientes/${key$}.json`;
    return this.http.put(url, body).map(res => {
      return res.json();
    });
  }

  getCliente(key$:string){
    let url = `${this.clienteURL}clientes/${key$}.json`;
    return this.http.get(url).map(res => {
      return res.json();
    });
  }

  getClientes(){
    let url = `${this.clienteURL}clientes.json`;
    return this.http.get(url).map(res => {
      return res.json();
    });
  }

  deleteClientes(key$:string){
    let url = `${this.clienteURL}clientes/${key$}.json`;
    return this.http.delete(url).map(res => {
      return res.json();
    });
  }

}
