import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl : 'heroe.component.html'

})
export class HeroeComponent{
  nombre: string = 'ironman';
  edad: number = 45;
  obtenerNombre (): string{
    return `${this.nombre} - ${this.edad}` // template literal, construir un string, concatena
  }

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }
  cambiarNombre():void{ //one way data binding
    this.nombre= 'Spiderman';
  }

  cambiarEdad():void{ //one way data binding
    this.edad =25;
  }
}
