import { AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { IProject, PROJECTS } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { TagsComponent } from "../tags/tags.component";
import { ItemProjectSectionComponent } from "../item-project-section/item-project-section.component";
import { Carousel } from 'flowbite';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ItemProjectSectionComponent],
  templateUrl: './projects-section.component.html',
  styles: `
  /* Agregar en el archivo de estilos global */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* Para Internet Explorer y Edge */
  scrollbar-width: none; /* Para Firefox */
}`
})
export class ProjectsSectionComponent {

  projects: IProject[] = PROJECTS

  selectedTest!: IProject

  isContentHidden = true; // Estado que controla si el contenido está oculto

  active: number = 0;

  opacity: boolean = false;


  itemActive: IProject = this.projects[0]

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const screenWidth = window.innerWidth;
    // Define el valor del scroll para ocultar el contenido (ajústalo según lo necesites)

    // Ajusta el rango de scroll en función del ancho de pantalla
    let showThreshold = 0;
    let hideThreshold = 0;

    if (screenWidth > 1200) { // Pantallas grandes (desktop)
      showThreshold = 300;
      hideThreshold = 800;
    } else if (screenWidth > 768) { // Pantallas medianas (tablet)
      showThreshold = 500;
      hideThreshold = 1700;
    } else { // Pantallas pequeñas (móviles)
      showThreshold = 400;
      hideThreshold = 1800;
    }


    this.isContentHidden = scrollPosition > hideThreshold || scrollPosition < showThreshold ;

    // this.isContentHidden = false;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.onWindowScroll(); // Actualiza el comportamiento en función del nuevo tamaño de pantalla
  }

  next(){
    if (this.active < this.projects.length - 1) {
      this.active++;
    } else {
      this.active = 0; // Reiniciar al primer slide
    }
    this.opacity = !this.opacity
    setTimeout(() => {
      this.itemActive = this.projects[this.active]
      this.opacity = !this.opacity
    }, 500)
  }

  prev(){
    if (this.active > 0) {
      this.active--;
    } else {
      this.active = this.projects.length - 1; // Ir al último slide
    }
    this.itemActive = this.projects[this.active]
  }


  // ngAfterViewInit(): void {
  //   // Selecciona el elemento del carousel
  //   const carouselElement = document.getElementById('animation-carousel');

  //   // Opcional: Configuración del carousel
  //   const carouselOptions = {
  //     interval: 5000, // Tiempo entre slides en ms
  //     loop: true, // Habilitar loop
  //   };

  //   let asd: string = 'asd'

  //   // Inicializa el carousel
  //   if (carouselElement) {
  //     new Carousel(carouselElement);
  //     console.log("if")
  //   }

  //   console.log("añañakiii")
  // }


}
