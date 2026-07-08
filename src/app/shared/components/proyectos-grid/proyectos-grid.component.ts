import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-proyectos-grid',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './proyectos-grid.component.html',
  styleUrl: './proyectos-grid.component.css'
})
export class ProyectosGridComponent {
  // Array de objetos para tus tarjetas
  misProyectos = [
    {
      titulo: 'Desarrollo con Liferay DXP',
      tags: ['Liferay', 'JAVA', 'SQL', 'ANGULAR'],
      desc: 'Desarrollo de entornos WEB, CMS',
      link: '/proyectos'
    },
    {
      titulo: 'Desarrollo con Angular',
      tags: ['Angular', 'JAVA', 'MYSQL'],
      desc: 'Desarrollo de Servicios',
      link: '/proyectos'
    },
    {
      titulo: 'Landing Pages',
      tags: ['PHP'],
      desc: 'Desarrollo de páginas de presentación',
      link: '/proyectos'
    },
    {
      titulo: 'Data Engineering',
      tags: ['Python', 'ELT', 'Docker','PySpark', 'Kubernetes', 'MinIO'],
      desc: 'Configuración de entornos para desarrollo de PipeLines',
      link: '/proyectos'
    }
  ];
}