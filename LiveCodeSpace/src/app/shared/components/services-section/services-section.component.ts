import { Component, OnInit } from '@angular/core';
import { IServices, SERVICES } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';


declare var particlesJS: any;

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-section.component.html'
})
export class ServicesSectionComponent implements OnInit {

  isContentHidden = false; // Estado que controla si el contenido está oculto

  constructor(private themeService: ThemeService) {}

  services: IServices[] = SERVICES;

  particlesConfig: 'dark' | 'light' = 'dark'

  ngOnInit(): void {
    this.themeService.getTheme().subscribe((theme) => {
      
      if(theme) {
        this.particlesConfig = 'dark'
      }else {
        this.particlesConfig = 'light'
      }

      if ((window as any).pJSDom && (window as any).pJSDom.length > 0) {
        (window as any).pJSDom[0].pJS.fn.vendors.destroypJS();
        (window as any).pJSDom = [];
      }
      
      particlesJS.load('particles-js', `../../../../assets/js/particles-${this.particlesConfig}.json`, () => {
        console.log('Particles.js config loaded');
      });
    })
  }
}
