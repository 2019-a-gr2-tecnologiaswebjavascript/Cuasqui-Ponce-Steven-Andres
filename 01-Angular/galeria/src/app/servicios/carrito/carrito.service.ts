import { Injectable } from '@angular/core';
import { ItemCarritoCompras } from '../../interfaces/item-carrito-compras';

@Injectable()
export class CarritoService{
    carritoCompras = [];
    
    agregarCarritoDeCompras(itemCarrito:ItemCarritoCompras):ItemCarritoCompras[]{
        const identificador = itemCarrito.valor;

        

        return [];
    }

}