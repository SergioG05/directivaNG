import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.css']
})
export class ComponenteUnoComponent implements OnInit {

  constructor() { }
  nombres: any;
  correo: any;
  contraseña: any;
  confirmarContra: any;
  numero: any;
  ngOnInit(): void {

    this.almacenar()
  }
  
  almacenar()
  {
   localStorage.setItem('nombre',this.nombres)
   localStorage.setItem('correo', this.correo)
   localStorage.setItem('contraseña',this.contraseña)
   localStorage.setItem('confContra',this.confirmarContra)
   localStorage.setItem('numero',this.numero)
  }

}
