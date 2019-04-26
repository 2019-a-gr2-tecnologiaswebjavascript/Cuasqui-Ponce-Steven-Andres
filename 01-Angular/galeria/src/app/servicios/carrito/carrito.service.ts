import { Injectable } from '@angular/core';
import { ItemCarritoCompras } from '../../interfaces/item-carrito-compras';
import { ItemGaleriaComponent } from 'src/app/item-galeria/item-galeria.component';

@Injectable()
export class CarritoService{
    carritoCompras:ItemCarritoCompras[] = [];
    
    agregarCarritoDeCompras(itemCarrito:ItemCarritoCompras):ItemCarritoCompras[]{
        const identificador = itemCarrito.valor;
        let indiceItem = -1;
        const existeElItem = this.carritoCompras.some(
            (item:ItemCarritoCompras, indice)=>{
                if(item.valor == identificador){
                    indiceItem = indice
                    return true
                }else{
                    return false
                }
            }
        )

        if(existeElItem){
            this.añadirAlContador(indiceItem);
            
        }else{
            this.añadirAlCarrito(itemCarrito)
        }
        console.log('Se añadio al carrito', itemCarrito);
        return this.carritoCompras;
    }

    private añadirAlContador(indice: number){
        this.carritoCompras[indice].cantidad++;
    }

    private añadirAlCarrito(item:ItemCarritoCompras){
        item.cantidad = 1;
        this.carritoCompras.splice(0,0,item)
    }

}