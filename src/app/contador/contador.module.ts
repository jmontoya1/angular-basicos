
import {NgModule}from '@angular/core'
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations:[ //son los componentes
    ContadorComponent
  ],
  exports: [
    ContadorComponent
  ],
  imports :[ // solo van modulos
    CommonModule //debe ser importando de angular/common
  ]
})
export class ContadorModule{}
