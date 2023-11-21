import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ModeladoComponent } from './pages/modelado/modelado.component';
import { GraficoComponent } from './pages/grafico/grafico.component';
import { ProgramacionComponent } from './pages/programacion/programacion.component';
import { ExtrasComponent } from './pages/extras/extras.component';


const routes: Routes = [
  {path:  '', redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'modelado', component: ModeladoComponent},
  {path: 'grafico', component: GraficoComponent},
  {path: 'programacion', component: ProgramacionComponent},
  {path: 'extras', component: ExtrasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
