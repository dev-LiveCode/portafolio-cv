import { Component } from '@angular/core';
import { ConstructionComponent } from "../../shared/components/construction/construction.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ConstructionComponent],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {

}
