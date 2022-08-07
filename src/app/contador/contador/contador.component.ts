import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template:`
    <h1>{{title}}</h1>
    <h3> la base es <strong> {{base}}</strong></h3>
    <button (click)=" acumular(base)"> {{base}}</button> <!-- click es un evento-->

    <span> {{numero}} </span>

    <button (click)="acumular(-base)"> -{{base}} </button><!-- no poner mucha logica en html-->

  `
})
export class ContadorComponent{
  title : string = 'Contador App';

  numero: number  = 10;
  base : number =5;
  acumular(valor:number){
    this.numero += valor;
  }
}
