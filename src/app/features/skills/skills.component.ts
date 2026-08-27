import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/components/ui/section-heading.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SKILLS } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  protected readonly skillGroups = SKILLS;
}