import {RouterModule, Routes} from '@angular/router';
import { LibroComponent } from './component/libro/libro.component';

const misRutas:Routes=[
    {
        path:'',
        component:LibroComponent
    }

];
export const RUTAS=RouterModule.forRoot(misRutas);
