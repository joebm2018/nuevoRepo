import { Router } from "express";
// import { crearUsuario } from "../controlador/Usuario";

// export let usuario_router=Router();

// usuario_router.post('/usuario',crearUsuario);


import * as usuario_controlador from '../controlador/Usuario';
export let usuario_router=Router();

usuario_router.post('/usuario',usuario_controlador.crearUsuario);
usuario_router.post('/usuario/find',usuario_controlador.encontrarUsuByNomOApe);
usuario_router.post('/usuario/login',usuario_controlador.iniciarSesion);