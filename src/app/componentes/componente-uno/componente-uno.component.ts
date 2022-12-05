import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.css']
})
export class ComponenteUnoComponent implements OnInit {

  constructor() { }

  numero:any;
  sueldos=[1700, 1600, 1900, 1880, 2000, 4555]
  ngOnInit(): void {
  this.numero=0;    
  }

}
