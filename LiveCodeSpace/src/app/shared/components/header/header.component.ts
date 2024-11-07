import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IMenu } from '../../interfaces/interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  visible: boolean = false;

  logo!: string

  itemsMenu: IMenu[] = [
    {path: 'about', text: 'About'},
    {path: 'projects', text: 'Projects'},
    {path: 'blog', text: 'Blog'}
  ]

  get isDark() {
    return document.body.classList.contains('dark')
  }

  ngOnInit(): void {
    this.logo = this.isDark ? './assets/img/logo-light.png' : './assets/img/logo-dark.png'
  }
  
  changeTheme(){
    document.body.classList.toggle('dark');
    this.logo = this.isDark ? './assets/img/logo-light.png' : './assets/img/logo-dark.png'
  }
}
