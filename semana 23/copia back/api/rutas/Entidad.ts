import { Router } from "express";
import { postEntidad, getEntidades } from '../controlador/Entidad';

export let entidad_router=Router();
entidad_router.post('/entidad',postEntidad);
entidad_router.get('/entidad',getEntidades);