import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  twiter = 'https://cdn-icons-png.flaticon.com/24/733/733579.png'

  facebook = 'https://cdn-icons-png.flaticon.com/24/5968/5968764.png'
  youtube = 'https://cdn-icons-png.flaticon.com/24/187/187210.png'
  instagram = 'https://cdn-icons-png.flaticon.com/24/3955/3955024.png'
  constructor() { }

  ngOnInit(): void {
  }

}
