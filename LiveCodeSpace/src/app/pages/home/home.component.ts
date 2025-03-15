import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { ProjectsSectionComponent } from "../../shared/components/projects-section/projects-section.component";
import { SeparatorComponent } from "../../shared/components/separator/separator.component";
import { ServicesSectionComponent } from "../../shared/components/services-section/services-section.component";
import { ContactSectionComponent } from "../../shared/components/contact-section/contact-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, ProjectsSectionComponent, SeparatorComponent, ServicesSectionComponent, ContactSectionComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
