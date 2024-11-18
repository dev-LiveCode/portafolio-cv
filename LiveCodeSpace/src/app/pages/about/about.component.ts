import { Component } from '@angular/core';
import { AboutMeComponent } from "../../shared/components/about-me/about-me.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutMeComponent],
  templateUrl: './about.component.html'
})
export class AboutComponent {

}
