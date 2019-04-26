import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CarritoService } from '../servicios/carrito/carrito.service';
import { notStrictEqual } from 'assert';
import { stringify } from '@angular/compiler/src/util';
import { ItemCarritoCompras } from '../interfaces/item-carrito-compras';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit,OnDestroy {

  title = 'Licoreria';

  @Input()
  textoBoton;   

  @Input()
  nombreItem;

  @Input()
  titulo;

  @Input()
  notas;

  @Output()
  cambioChela: EventEmitter<boolean> = new EventEmitter()

  @Output()
  cambioCerveza: EventEmitter<boolean> = new EventEmitter()

  url = "http://www.dna-autoparts.com/23121-thickbox_default/bielas-forjadas-eagle-para-sr20det.jpg";

  constructor(private readonly _carritoService:CarritoService) { }

  ngOnInit() {
    console.log('Empezo');
    console.log(this._carritoService.carritoCompras);
  }

  ngOnDestroy(){
    console.log('Termino');
  }

  agregarCarrito(valorCarrito:string){

    const itemCarrito:ItemCarritoCompras = {
      valor: valorCarrito,
      nombreTienda: this.titulo,
      fechaCompra: new Date()
    };
    //this._carritoService.carritoCompras.push(valorCarrito)
    const respuestaCarrito = this._carritoService.agregarCarritoDeCompras(itemCarrito)
    console.log(respuestaCarrito)
  }

  alertar(){
    alert('Auxilio me desmayo: ' + this.nombreItem);
  }

  alertarBlur(){
    alert('Alertar blur');
  }

  cambiarImagen(){
    const cervezas = "https://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpg"
    const chelas = "http://www.dna-autoparts.com/23121-thickbox_default/bielas-forjadas-eagle-para-sr20det.jpg"
    if(this.url === cervezas){
      this.url = chelas;
      this.cambioChela.emit(true);
    }else{
      this.url = cervezas;
      this.cambioCerveza.emit(true);
    }
    // var url2 = "http://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpghttp://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpg"
    // let url3 = "http://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpghttp://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpg"
    // this.url = url1;
  }


}


/*
class CarritoCompraClass implements CarritoComprasInterface{
  valor:string;
  nombreTienda:string;
  fechaCompra?: Date
  fechaCompra?:Date
}*/
/*
@DecoratorsClase() 
class Usuario{
  @DecoratorsVariable()
  private nombre = 'Adrian';
  constructor(@DecoratorsConstructor() nombre){
  }
  @DecoratorsMetodo()
 metodoPublico(){
 }
 private metodoPrivado(){
 }
 protected metodoProtected(){
 }
}
*/