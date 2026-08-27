import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/components/ui/section-heading.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  protected readonly projects = PROJECTS;
}