import { Router } from "express";
import { postAula } from "../controlador/aula";

export let aula_router=Router();
aula_router.post('/aula',postAula);