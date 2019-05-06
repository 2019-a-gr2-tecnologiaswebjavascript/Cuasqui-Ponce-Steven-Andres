import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-adopcion',
  templateUrl: './header-adopcion.component.html',
  styleUrls: ['./header-adopcion.component.css']
})
export class HeaderAdopcionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  url = "https://www.procan.com.ec/wp-content/uploads/2017/11/pro-can.png";
  arregloBotones=["Producto","Adopción","TQPETS","Contáctanos"]
  urlInsta = "https://www.procan.com.ec/wp-content/uploads/2017/11/instagram.png";
  urlFB = "https://www.procan.com.ec/wp-content/uploads/2017/11/facebook.png";
}
