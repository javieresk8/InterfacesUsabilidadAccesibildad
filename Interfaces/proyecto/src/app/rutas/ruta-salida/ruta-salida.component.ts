import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-salida',
  templateUrl: './ruta-salida.component.html',
  styleUrls: ['./ruta-salida.component.scss']
})
export class RutaSalidaComponent implements OnInit {
  logo_gobierno_encuentro = "https://o.remove.bg/downloads/74022d67-865c-411c-b0d2-1c04bb2bb4d1/gobie_encuentro_propio-removebg-preview.png"
  logo_bicentenario = "https://o.remove.bg/downloads/d7fe002d-52ab-4a56-b58e-9c25c7bb2e80/imagen_bicentenario-removebg-preview.png"
  twiter = 'https://cdn-icons-png.flaticon.com/24/733/733579.png'

  facebook = 'https://cdn-icons-png.flaticon.com/24/5968/5968764.png'
  youtube = 'https://cdn-icons-png.flaticon.com/24/187/187210.png'
  instagram = 'https://cdn-icons-png.flaticon.com/24/3955/3955024.png'
  imagen_noticia1="https://www.trabajo.gob.ec/wp-content/uploads/2022/09/12.jpg"
  imagen_noticia2="https://www.trabajo.gob.ec/wp-content/uploads/2022/08/665AD1D7-902D-459A-8789-7348C50199DD.jpeg"
  imagen_destacada1="https://www.trabajo.gob.ec/wp-content/uploads/2022/08/1-3.jpg"
  imagen_destacada2 = 'https://www.trabajo.gob.ec/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-24-at-5.08.32-PM-e1661379119616.jpeg'
  constructor() { }

  ngOnInit(): void {
  }

}
