import {Router} from 'express';
import {getProductos} from './../controladores/producto'
export let producto_router=Router();

producto_router.get("/productos",getProductos);
