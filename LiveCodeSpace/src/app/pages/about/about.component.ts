import { Component } from '@angular/core';
import { AboutMeComponent } from "../../shared/components/about-me/about-me.component";
import { SeparatorComponent } from "../../shared/components/separator/separator.component";
import { ContactSectionComponent } from "../../shared/components/contact-section/contact-section.component";
import { AboutLivecodeComponent } from "../../shared/components/about-livecode/about-livecode.component";
import { ServicesSectionComponent } from "../../shared/components/services-section/services-section.component";
import { SkillsSectionComponent } from "../../shared/components/skills-section/skills-section.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutMeComponent, SeparatorComponent, ContactSectionComponent, AboutLivecodeComponent, ServicesSectionComponent, SkillsSectionComponent],
  templateUrl: './about.component.html'
})
export class AboutComponent {

}
