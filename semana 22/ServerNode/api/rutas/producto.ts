import {Router} from 'express';

import {productoController} from '../controladores/producto'

export let producto_router=Router();

producto_router.get('/producto',productoController.getAll);