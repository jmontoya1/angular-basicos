import { NgSwitchDefault } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes : string[]=['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado:string= '';
  borrarHeroe(){

    this.heroeBorrado = (this.heroes.shift() || '');//borra el primer elemento del array para que bote siempre string
    console.log(this.heroeBorrado);
  }
}
