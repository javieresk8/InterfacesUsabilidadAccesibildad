import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
    declarations: [
        HeaderComponent,
        BreadcrumbComponent
    ],
    exports: [
        HeaderComponent,
        BreadcrumbComponent,
        [MatMenuModule], [MatIconModule], [RouterModule]
    ],
    imports: [
        CommonModule,
        [MatMenuModule], [MatIconModule], [RouterModule]
    ]
})
export class HeaderModule { }
