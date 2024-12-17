import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-about-livecode',
  standalone: true,
  imports: [],
  templateUrl: './about-livecode.component.html'
})
export class AboutLivecodeComponent implements OnInit {

  isContentHidden: boolean = false

  logo!: string

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const screenWidth = window.innerWidth;
    // Define el valor del scroll para ocultar el contenido (ajústalo según lo necesites)

    // Ajusta el rango de scroll en función del ancho de pantalla
    let showThreshold = 0;
    let hideThreshold = 0;

    if (screenWidth > 1200) { // Pantallas grandes (desktop)
      showThreshold = 400;
      hideThreshold = 1000;
    } else if (screenWidth > 768) { // Pantallas medianas (tablet)
      showThreshold = 500;
      hideThreshold = 1700;
    } else { // Pantallas pequeñas (móviles)
      showThreshold = 400;
      hideThreshold = 1800;
    }


    this.isContentHidden = scrollPosition > hideThreshold || scrollPosition < showThreshold ;
  }

  constructor(private themeService: ThemeService) {}

  get isDark() {
    return document.body.classList.contains('dark')
  }

  ngOnInit(): void {
    // this.logo = this.isDark ? './assets/img/logo-light.png' : './assets/img/logo-dark.png'

    this.themeService.getTheme().subscribe(isDark => {
      if (isDark) {
        this.logo = './assets/img/logo-light.png'; // Ruta para el tema claro
      } else {
        this.logo = './assets/img/logo-dark.png'; // Ruta para el tema oscuro
      }
    });
  }


}
