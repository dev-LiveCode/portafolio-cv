import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html'
})
export class HeroSectionComponent {

  isContentHidden = false; // Estado que controla si el contenido está oculto

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;

    // Define el valor del scroll para ocultar el contenido (ajústalo según lo necesites)
    this.isContentHidden = scrollPosition > 150;
  }

}
