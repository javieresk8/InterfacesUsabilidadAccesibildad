import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo_gobierno_encuentro = "https://o.remove.bg/downloads/744f4064-366d-4b69-91e0-e7c8cd99703c/logo1-removebg-preview.png"
  logo_bicentenario = "https://o.remove.bg/downloads/2de04270-e3ae-4914-be2a-a041273c7eaf/logo_2-removebg-preview.png"
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

}
