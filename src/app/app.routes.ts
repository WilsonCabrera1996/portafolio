import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';


export const routes: Routes = [

    { path: '', component: HomeComponent },
    {path:'proyectos', component: ProyectosComponent}
];
