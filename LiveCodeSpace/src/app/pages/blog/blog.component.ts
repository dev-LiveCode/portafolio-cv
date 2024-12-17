import { Component } from '@angular/core';
import { ConstructionComponent } from "../../shared/components/construction/construction.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ConstructionComponent],
  templateUrl: './blog.component.html'
})
export class BlogComponent {

}
