import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaEntradaComponent } from './rutas/ruta-entrada/ruta-entrada.component';
import { RutaSalidaComponent } from './rutas/ruta-salida/ruta-salida.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaEntradaComponent,
    RutaSalidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
