import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { IProject, PROJECTS } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
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
export class ProjectsSectionComponent implements OnInit {

  projects: IProject[] = PROJECTS

  @ViewChild('tagsContainer', { static: true }) tagsContainer!: ElementRef;

  selectedTest!: IProject

  isContentHidden = false; // Estado que controla si el contenido está oculto

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const screenWidth = window.innerWidth;
    // Define el valor del scroll para ocultar el contenido (ajústalo según lo necesites)

    // Ajusta el rango de scroll en función del ancho de pantalla
    let showThreshold = 0;
    let hideThreshold = 0;

    console.log('acnho: '+screenWidth)
    console.log('scroll: '+scrollPosition)

    if (screenWidth > 1024) { // Pantallas grandes (desktop)
      showThreshold = 300;
      hideThreshold = 800;
    } else if (screenWidth > 768) { // Pantallas medianas (tablet)
      showThreshold = 400;
      hideThreshold = 1400;
    } else { // Pantallas pequeñas (móviles)
      showThreshold = 400;
      hideThreshold = 1400;
    }


    this.isContentHidden = scrollPosition > hideThreshold || scrollPosition < showThreshold ;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.onWindowScroll(); // Actualiza el comportamiento en función del nuevo tamaño de pantalla
  }

  currentImageIndex = 0;
  fadeIn = false;
  intervalId: any;

  currentSlide = 0;

  ngOnInit(): void {
    this.selectedTest = this.projects[0]
    this.intervalId = setInterval(() => {
      this.fadeIn = true
      setTimeout(()=>{
        this.fadeIn = false
        this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedTest.img.length;
      }, 1000)
    }, 5000); // Puedes ajustar el tiempo de transición
  }

  ngOnDestroy(): void {
    // Limpia el intervalo cuando el componente se destruye
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


  scrollLeft() {
    this.tagsContainer.nativeElement.scrollBy({
      left: -150, // Ajusta el valor para la cantidad de desplazamiento hacia la izquierda
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.tagsContainer.nativeElement.scrollBy({
      left: 150, // Ajusta el valor para la cantidad de desplazamiento hacia la derecha
      behavior: 'smooth',
    });
  }
  

  nextSlide() {
    if (this.currentSlide < this.projects.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; // Reiniciar al primer slide
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.projects.length - 1; // Ir al último slide
    }
  }

}
