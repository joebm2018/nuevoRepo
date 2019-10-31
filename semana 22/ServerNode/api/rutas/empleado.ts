import { Router }from 'express';
import { empleadoCotroller } from '../controladores/empleado';
export let empleado_router=Router();
empleado_router.get('/empleado',empleadoCotroller.traerTodos);
empleado_router.post('/empleado',empleadoCotroller.crearEmpleado);
empleado_router.get('/empleado/:id_empleado',empleadoCotroller.obtenerPorId);
empleado_router.delete('/empleado/:id_empleado',empleadoCotroller.borrarPorId);
empleado_router.post('/empleado/actualizar/:id_empleado',empleadoCotroller.actualizarPorId);
