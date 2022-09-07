import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.scss']
})
export class RutaHomeComponent implements OnInit {
  imagen_destacada1="https://www.trabajo.gob.ec/wp-content/uploads/2022/08/1-3.jpg"
  imagen_destacada2 = 'https://www.trabajo.gob.ec/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-24-at-5.08.32-PM-e1661379119616.jpeg'
  constructor() { }

  ngOnInit(): void {
  }

}
