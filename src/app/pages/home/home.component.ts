import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importamos los componentes que creaste anteriormente
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { ProyectosGridComponent } from '../../shared/components/proyectos-grid/proyectos-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    HeroComponent, 
    ProyectosGridComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { }