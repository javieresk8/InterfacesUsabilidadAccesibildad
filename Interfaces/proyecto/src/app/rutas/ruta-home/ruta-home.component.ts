import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class RutaHomeComponent implements OnInit {
  imagen_destacada1="https://www.trabajo.gob.ec/wp-content/uploads/2022/08/1-3.jpg"
  imagen_destacada2 = 'https://www.trabajo.gob.ec/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-24-at-5.08.32-PM-e1661379119616.jpeg'
  images = [
    {src: "https://www.trabajo.gob.ec/wp-content/uploads/2022/09/Banner%20web.png?x42051"},
    {src: "https://picsum.photos/id/1011/900/500"},
    {src: "https://picsum.photos/id/984/900/500"}
  ];
  constructor(config: NgbCarouselConfig) { 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
