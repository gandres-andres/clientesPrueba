import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ClientesService } from "../../../services/clientes.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: FormGroup;
  id: string;
  fechaHoy:string;
  constructor(private _clientes: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(param => {
      this.id = param['id'];
      if (this.id !== 'nuevo') {
        _clientes.getCliente(this.id).subscribe(data => {
          this.cliente.setValue({
            nombre: data.nombre,
            nit: data.nit,
            fechaCreacion: data.fechaCreacion,
            representanteLegal: data.representanteLegal,
            direccion: data.direccion,
            telefono: data.telefono,
            email: data.email,
            granContribuyente: data.granContribuyente
          });
        });
      }
    });
  }

  ngOnInit() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    let dia = dd.toString();
    let mes = mm.toString();
    if (dd < 10) {
      dia = '0' + dia;
    }
    if (mm < 10) {
      mes = '0' + mes;
    }
    this.fechaHoy = dia + '/' + mes + '/' + yyyy;
    this.cliente = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'nit': new FormControl('', Validators.required),
      'fechaCreacion': new FormControl(this.fechaHoy, Validators.required),
      'representanteLegal': new FormControl('', Validators.required),
      'direccion': new FormControl(''),
      'telefono': new FormControl('', [Validators.minLength(8),
      Validators.maxLength(8)]),
      'email': new FormControl('', Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")),
      'granContribuyente': new FormControl('no')
    });
  }

  guardarCliente() {
    if (this.id == 'nuevo') {
      this._clientes.postCliente(this.cliente.value)
        .subscribe(data => {
          this.router.navigate(['/cliente', data.name]);
        }, error => console.error(error));
    } else {
      this._clientes.putCliente(this.cliente.value, this.id)
        .subscribe(data => {
        }, error => console.error(error));
    }
  }

  nuevoCliente(){
    this.router.navigate([ '/cliente', 'nuevo' ]);
    this.cliente.reset({
      fechaCreacion: this.fechaHoy,
      granContribuyente:'no'
    });
  }

}
