import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { ProjectsSectionComponent } from "../../shared/components/projects-section/projects-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, ProjectsSectionComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
