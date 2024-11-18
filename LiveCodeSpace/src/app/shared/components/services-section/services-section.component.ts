import { Component, HostListener } from '@angular/core';
import { IServices, SERVICES } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-section.component.html'
})
export class ServicesSectionComponent {

  isContentHidden = true; // Estado que controla si el contenido está oculto

  services: IServices[] = SERVICES;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const screenWidth = window.innerWidth;
    // Define el valor del scroll para ocultar el contenido (ajústalo según lo necesites)

    // Ajusta el rango de scroll en función del ancho de pantalla
    let showThreshold = 0;
    let hideThreshold = 0;

    if (screenWidth > 1200) { // Pantallas grandes (desktop)
      showThreshold = 1800;
      hideThreshold = 2700;
    } else if (screenWidth > 1000) { // Pantallas grandes (desktop)
      showThreshold = 1800;
      hideThreshold = 3200;
    } else if (screenWidth > 768) { // Pantallas medianas (tablet)
      showThreshold = 1800;
      hideThreshold = 3900;
    } else { // Pantallas pequeñas (móviles)
      showThreshold = 1800;
      hideThreshold = 3500;
    }


    this.isContentHidden = scrollPosition > hideThreshold || scrollPosition < showThreshold ;

    // this.isContentHidden = false;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.onWindowScroll(); // Actualiza el comportamiento en función del nuevo tamaño de pantalla
  }

}
