import { Component } from '@angular/core';
import { ITags, SKILLS } from '../../interfaces/interfaces';
import { SkillCircleComponent } from "../skill-circle/skill-circle.component";

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [SkillCircleComponent],
  templateUrl: './skills-section.component.html'
})
export class SkillsSectionComponent {

  skills: ITags[] = SKILLS

  
}
