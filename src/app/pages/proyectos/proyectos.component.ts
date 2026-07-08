import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Proyecto {
  nombre: string;
  subtitulo: string;
  mainTag: string;
  tags: string[];
  resumen: string;
  tecnologias: string[];
  stats: { n: string; l: string }[];
  links: { label: string; url: string }[];
  imagen: string;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  proyectos: Proyecto[] = [
    {
      nombre: 'APLICATIVOS WEB CON LIFERAY',
      subtitulo: 'Desarrollar en Liferay permite el despliegue acelerado de Intranets corporativas, Sistemas de gestión de contenido (CMS) y arquitecturas desacopladas (Headless). Al basarse en un ecosistema robusto y modular, la plataforma garantiza un estándar de seguridad de nivel institucional ideal para el manejo seguro de información interna y Single Page Applications (SPAs).',
      mainTag: 'LIFERAY',
      tags: ['DOCKER', 'JAVA'],
      resumen: 'Plataforma para gestión de inventario con aislamiento por tenant, JWT RS256 y paginación por cursores.',
      tecnologias: ['Liferay', 'MySQL', 'Docker', 'ANGULAR', 'PHP'],
      stats: [{ n: '24', l: 'Endpoints' }, { n: 'Multi', l: 'Tenants' }],
      links: [{ label: 'Liferay', url: 'https://www.liferay.com/es/' }],
      imagen: 'assets/images/LIFERAY.webp'
    },
    {
      nombre: 'APLICATIVOS WEB CON ANGULAR',
      subtitulo: 'Desarrollar en Angular permite la creación de aplicaciones web escalables de grado empresarial, optimizadas para arquitecturas modernas y de alto rendimiento,ya que integra de forma nativa TypeScript, gestión avanzada de estado (Signals/RxJS) e inyección de dependencias, garantiza soluciones frontend robustas, modulares y fáciles de mantener. Este enfoque permite una integración fluida con arquitecturas desacopladas (Headless/Microfrontends), asegurando una experiencia de usuario consistente y segura.',
      mainTag: 'ANGULAR',
      tags: ['DOCKER', 'TYPESCRIPT', 'GIT'],
      resumen: 'Plataforma para gestión de inventario con aislamiento por tenant, JWT RS256 y paginación por cursores.',
      tecnologias: ['Liferay', 'MySQL', 'Docker', 'ANGULAR', 'PHP'],
      stats: [{ n: '24', l: 'Endpoints' }, { n: 'Multi', l: 'Tenants' }],
      links: [{ label: 'GitHub', url: 'https://github.com' }, { label: 'Demo', url: '#' }],
      imagen: 'assets/images/angular-portfolio.webp'
    },
    {
      nombre: 'LANDING PAGES',
      subtitulo: 'Desarrollar landing pages, combinando la estructura limpia de HTML con la robustez de PHP y la agilidad de frameworks como Bootstrap para entregar soluciones web visualmente atractivas, rápidas y totalmente responsive. Todo el proceso se ejecuta bajo un enfoque centrado en el usuario, transformando fielmente los prototipos de diseño UX/UI y adaptándolos rigurosamente a los requerimientos específicos del cliente. ',
      mainTag: 'Angular',
      tags: ['HTML', 'CSS', 'JS', 'PHP'],
      resumen: '',
      tecnologias: ['Angular', 'NgRx', 'RxJS', 'TypeScript'],
      stats: [{ n: 'WS', l: 'Protocolo' }, { n: '0', l: 'UI libs' }],
      links: [{ label: 'GitHub', url: 'https://github.com' }, { label: 'Demo', url: '#' }],
      imagen: 'assets/images/paginasweb.webp'
    },
    {
      nombre: 'INGENIERÍA DE DATOS',
      subtitulo: 'Implementar soluciones de Ingeniería de Datos permite la construcción de infraestructuras escalables para el procesamiento masivo y la democratización de la información. Mediante el diseño de pipelines automatizados (Apache Airflow) y el procesamiento distribuido (PySpark), garantizo arquitecturas robustas y desacopladas (Medallion Architecture) sobre entornos en contenedores (Docker/Kubernetes). Este enfoque, respaldado por la gestión eficiente en Data Lakes (MinIO) y bases de datos relacionales (PostgreSQL), asegura la integridad y disponibilidad de los datos, transformando grandes volúmenes de información en conocimiento estratégico listo para el análisis y la toma de decisiones.',
      mainTag: 'Angular',
      tags: ['Docker', 'Standalone', 'ng-bootstrap'],
      resumen: 'Portfolio con Angular 17 standalone components, ng-bootstrap y despliegue en Docker.',
      tecnologias: ['Angular 17', 'ng-bootstrap', 'TypeScript', 'Docker', 'SCSS'],
      stats: [{ n: '3', l: 'Páginas' }, { n: '8+', l: 'Componentes' }],
      links: [{ label: 'GitHub', url: 'https://github.com' }, { label: 'Demo', url: '#' }],
      imagen: 'assets/images/anlisisdatos.webp'
    }
  ];
}