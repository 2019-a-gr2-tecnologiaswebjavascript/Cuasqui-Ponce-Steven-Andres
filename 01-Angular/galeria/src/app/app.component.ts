import { Component } from '@angular/core';
import { CarritoService } from './servicios/carrito/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';
  color = 'rojo'
  estaMostrando;
  arregloFlores = [
    new Flor("Papitas","A lo bestia"),
    new Flor("Carnitas","Gorditas"),
    new Flor("Chicas","Cheveres")
  ];

  arregloFloresJs = [
    { 
      titulo: "Don Pepito",
      nombre:"Papitas",
      descripcion:"A lo bestia",
      notas:['chupete','caramelo','Papitas']
      // dato:1,
      // dato1:1.1,
      // dato3:" asdasd ",
      // dato4:false,
      // dato5:true,
      // dato6:null
    },
    { 
      titulo: "Don José",
      nombre:"Carnitas",
      descripcion:"Gorditas",
      notas:['papitas','Empanadas','Papitas']
    },
    {
      titulo: "Dona Maria",
      nombre:"Chicas",
      descripcion:"Cheveres",
      notas:['mote','fritada','Papitas']
    }
  ]

  constructor(private readonly _carritoService:CarritoService){

  }
  
  cambioChela(evento:boolean){
    // logica hacerle verde
    this.color = 'verde'
    console.log('Llego a chela: ', evento);
  }

  cambioCerveza(evento:boolean){
    // logica hacerle amarillo
    this.color = 'amarillo'
    console.log('Llego a cerveza: ', evento);
  }
  mostrar(estaMostrando){
    this.estaMostrando = estaMostrando;
  }


}

class Flor{
  constructor(
    public nombre: string,
    public descripcion:string){
  }
}