import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.css']
})
export class ComponenteDosComponent implements OnInit {


  constructor() { }
  nombreR: any;
  correoR: any;
  contraseñaR: any;
  confContraR: any;
  numeroR: any;

  ngOnInit(): void {
    this.recuperar()
  }

  recuperar()
  {
    this.nombreR = localStorage.getItem('nombres')
    this.correoR = localStorage.getItem('correo')
    this.contraseñaR = localStorage.getItem('contraseña')
    this.confContraR = localStorage.getItem('confirmarContra')
    this.numeroR = localStorage.getItem('numero')
  }

}
