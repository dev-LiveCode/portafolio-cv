import { Component, OnInit } from '@angular/core';
import { ITags, SKILLS } from '../../interfaces/interfaces';
import { SkillCircleComponent } from "../skill-circle/skill-circle.component";
import { CommonModule } from '@angular/common';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule, SkillCircleComponent],
  templateUrl: './skills-section.component.html',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [ // Animación para elementos que se añaden
        style({ opacity: 0, transform: 'scale(0.7)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [ // Animación para elementos que se eliminan
        animate('500ms ease-in', style({ opacity: 0, transform: 'scale(0.7)' }))
      ])
    ])
  ]
})
export class SkillsSectionComponent implements OnInit {

  skills: ITags[] = SKILLS

  skillsFiltered?: ITags[]

  filterValues: Array<{text: string, value: string}> = [
    {"text": "Choose a skill", "value": "all"},
    {"text": "Cloud computing", "value": "cloud"},
    {"text": "Data base", "value": "database"},
    {"text": "Frontend", "value": "frontend"},
    {"text": "Backend", "value": "backend"},
  ]

  constructor() { }

  ngOnInit(): void {
    this.skillsFiltered = this.skills   
  }


  filterSkills($event: Event) {
    const value = <'cloud' | 'frontend' | 'backend' | 'database' | 'all'>($event.target as HTMLSelectElement).value
    this.skillsFiltered = []
    
    setTimeout(() => {
      if (value === "all") {
        this.skillsFiltered = this.skills
      } else {
        this.skillsFiltered = this.skills.filter(skill => {
          return skill.type?.includes(value)
        })
      }
    }, 500)
    
  }

  
}
