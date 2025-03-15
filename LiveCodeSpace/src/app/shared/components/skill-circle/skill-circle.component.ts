import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ITags } from '../../interfaces/interfaces';

@Component({
  selector: 'app-skill-circle',
  standalone: true,
  imports: [],
  templateUrl: './skill-circle.component.html'
})
export class SkillCircleComponent implements OnInit {

  @Input() tag!: ITags;

  name: boolean = false

  constructor(private themeService: ThemeService){}

  isDark?: boolean

  ngOnInit(): void {
    this.themeService.getTheme().subscribe(isDark => {
      this.isDark = isDark
    })
  }

  change(bool: boolean){
    this.name = bool
  }


}
