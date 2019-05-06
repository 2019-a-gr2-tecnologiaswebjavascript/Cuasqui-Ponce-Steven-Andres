import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasos-adopcion',
  templateUrl: './pasos-adopcion.component.html',
  styleUrls: ['./pasos-adopcion.component.css']
})
export class PasosAdopcionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pasosAdopcion = [
    {
      urlImagen:"https://www.procan.com.ec/wp-content/uploads/2017/11/adopcion-paso-1.png",
      nombrePaso:"Paso 1",
      descripcion:"Ingresa a nuestra sección de perritos y filtra la búsqueda; podrás ver fotografías de quienes esperan ser llevados a un hogar donde tendrán una vida feliz."
    },
    {
      urlImagen:"https://www.procan.com.ec/wp-content/uploads/2017/11/adopcion-paso-2.png",
      nombrePaso:"Paso 2",
      descripcion:"Elige a tu mejor amigo dando clic y obtendrás la información de la fundación donde se encuentra."
    },
    {
      urlImagen:"https://www.procan.com.ec/wp-content/uploads/2017/11/adopcion-paso-3.png",
      nombrePaso:"Paso 3",
      descripcion:"Podrás ponerte en contacto con la institución y así llevar a tu amigo a su nuevo hogar."
    }
  ]

}
