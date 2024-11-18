import { Component } from '@angular/core';
import { IMenu } from '../../interfaces/interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  itemsMenu: IMenu[] = [
    {path: 'about', text: 'About'},
    {path: 'projects', text: 'Projects'},
    {path: 'blog', text: 'Blog'}
  ]
  

}
