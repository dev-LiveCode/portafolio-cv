import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  visible: boolean = false;

  logo!: string


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
