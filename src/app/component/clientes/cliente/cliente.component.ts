import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: FormGroup;

  constructor() { }

  ngOnInit() {
    // let today = new Date();
    // let dd = today.getDate().toString();
    // let mm = today.getMonth()+ 1;
    // let yyyy = today.getFullYear();
    // if (dd < '10') {
    //   dd = '0' + dd;
    // }

    // if (mm < 10) {
    //   mm = '0' + mm.toString();
    // }
    this.cliente = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'nit': new FormControl('', Validators.required),
      'fechaCreacion': new FormControl(new Date(), Validators.required),
      'representanteLegal': new FormControl('', Validators.required),
      'direccion': new FormControl(''),
      'telefono': new FormControl('', [Validators.minLength(8),
      Validators.maxLength(8)]),
      'email': new FormControl('', Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")),
      'granContribuyente': new FormControl('no')
    });
  }

  guardarCliente() {
    console.log(this.cliente);

  }

}
