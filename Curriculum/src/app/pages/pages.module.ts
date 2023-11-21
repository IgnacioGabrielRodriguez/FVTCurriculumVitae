import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModeladoComponent } from './modelado/modelado.component';
import { GraficoComponent } from './grafico/grafico.component';
import { ProgramacionComponent } from './programacion/programacion.component';
import { ExtrasComponent } from './extras/extras.component';



@NgModule({
  declarations: [
    HomeComponent,
    ModeladoComponent,
    GraficoComponent,
    ProgramacionComponent,
    ExtrasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
