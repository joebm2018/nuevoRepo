import { Router } from 'express';
import {postUsuario, getUsuario } from '../controlador/Usuario';

export let usuario_router=Router();
usuario_router.post('/usuario', postUsuario);
usuario_router.get('/usuario', getUsuario);