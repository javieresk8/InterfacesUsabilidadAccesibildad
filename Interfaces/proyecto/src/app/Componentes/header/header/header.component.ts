import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo_gobierno_encuentro = "https://o.remove.bg/downloads/ee509f60-089d-40c9-9949-0431750e9a26/GOBIERNO-DEL-ENCUENTRO-768x274-removebg-preview.png"
  logo_bicentenario = "https://o.remove.bg/downloads/d7fe002d-52ab-4a56-b58e-9c25c7bb2e80/imagen_bicentenario-removebg-preview.png"
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

}
