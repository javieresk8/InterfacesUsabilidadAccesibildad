import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';



@NgModule({
    declarations: [
        HeaderComponent,
        BreadcrumbComponent
    ],
    exports: [
        HeaderComponent,
        BreadcrumbComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeaderModule { }
