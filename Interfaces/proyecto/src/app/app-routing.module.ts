import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaEntradaComponent} from "./rutas/ruta-entrada/ruta-entrada.component";
import {RutaSalidaComponent} from "./rutas/ruta-salida/ruta-salida.component";

const routes: Routes = [{
  path: 'entrada',
  component: RutaEntradaComponent
},{
  path: 'salida',
  component: RutaSalidaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
