import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
