import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbSalidaComponent } from './breadcrumb-salida.component';



@NgModule({
  declarations: [
    BreadcrumbSalidaComponent
  ],
  exports: [
    BreadcrumbSalidaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BreadcrumbSalidaModule { }
