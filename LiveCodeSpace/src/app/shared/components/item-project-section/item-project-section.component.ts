import { Component, Input, OnInit } from '@angular/core';
import { TagsComponent } from '../tags/tags.component';
import { CommonModule } from '@angular/common';
import { IProject } from '../../interfaces/interfaces';

@Component({
  selector: 'app-item-project-section',
  standalone: true,
  imports: [CommonModule, TagsComponent],
  templateUrl: './item-project-section.component.html'
})
export class ItemProjectSectionComponent implements OnInit {

  @Input() item!: IProject;
  @Input() index!: number;

  currentImageIndex = 0;
  fadeIn = false;
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.fadeIn = true
      setTimeout(()=>{
        this.fadeIn = false
        this.currentImageIndex = (this.currentImageIndex + 1) % this.item.img.length;
      }, 1000)
    }, 5000); // Puedes ajustar el tiempo de transición
  }

  ngOnDestroy(): void {
    // Limpia el intervalo cuando el componente se destruye
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }



}
