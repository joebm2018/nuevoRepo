import { Router } from "express";
import { wachiman } from "../utils/Guard";
import { getReservasByFechas } from "../controlador/Reserva";

export let reserva_router=Router();
reserva_router.post('/reservabyfechas/:aula_id',wachiman,getReservasByFechas)