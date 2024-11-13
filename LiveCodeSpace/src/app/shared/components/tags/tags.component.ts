import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ITags } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags.component.html'
})
export class TagsComponent {

  @ViewChild('tagsContainer', { static: true }) tagsContainer!: ElementRef;
  @Input() items: ITags[] = [];



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

}
