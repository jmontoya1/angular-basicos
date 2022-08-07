import { HeroeComponent } from './Heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import {NgModule}from '@angular/core'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[ //son los componentes
    HeroeComponent,
    ListadoComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports :[ // solo van modulos
    CommonModule //debe ser importando de angular/common
  ]
})
export class HeroesModule{

}
