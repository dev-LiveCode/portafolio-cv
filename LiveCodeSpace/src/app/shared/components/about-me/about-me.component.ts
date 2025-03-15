import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styles: `
    @keyframes shape-change {
  0% {
    border-radius: 70% 20% 70% 30%;
    transform: scale(1);
  }
  20% {
    border-radius: 70% 30% 50% 50%;
    transform: scale(0.9);
  }
  40% {
    border-radius: 30% 70% 40% 60%;
    transform: scale(1);
  }
  60% {
    border-radius: 20% 40% 60% 20%;
    transform: scale(1.1);
  }
  80% {
    border-radius: 40% 60% 70% 30%;
    transform: scale(0.9);
  }
  100% {
    border-radius: 70% 20% 70% 30%;
    transform: scale(1);
  }
}

.animate-shape-change {
  animation: shape-change 10s infinite ease-in-out;
}
  `
})
export class AboutMeComponent implements OnInit {

  isContentHidden: boolean = false
  
  helloArray: string[] = ['Frontend', 'Backend', 'Full stack'];
  displayedText: string = ''; // Texto mostrado en el efecto
  currentIndex: number = 0; // Índice del arreglo actual
  charIndex: number = 0; // Índice del carácter actual
  isDeleting: boolean = false; // Estado de borrado

  typingSpeed: number = 200; // Velocidad de tipeo
  deletingSpeed: number = 100; // Velocidad de borrado
  pauseDelay: number = 1000; // Tiempo de pausa entre palabras


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;

    // Define el valor del scroll para ocultar el contenido (ajústalo según lo necesites)
    this.isContentHidden = scrollPosition > 300;
  }

  ngOnInit(): void {
    this.startTypingEffect();
  }

  startTypingEffect() {
    const currentWord = this.helloArray[this.currentIndex];

    if (this.isDeleting) {
      // Borrando caracteres
      this.displayedText = currentWord.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      // Escribiendo caracteres
      this.displayedText = currentWord.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    // Cambio de estado entre escribir y borrar
    if (!this.isDeleting && this.charIndex === currentWord.length) {
      this.isDeleting = true;
      setTimeout(() => this.startTypingEffect(), this.pauseDelay); // Pausa al terminar la palabra
      return;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.helloArray.length; // Cambia a la siguiente palabra
    }

    const delay = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
    setTimeout(() => this.startTypingEffect(), delay);
  }

  scrollToContact(): void {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
