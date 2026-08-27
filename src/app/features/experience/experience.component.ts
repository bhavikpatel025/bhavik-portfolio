import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/components/ui/section-heading.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { TiltDirective } from '../../shared/directives/tilt.directive';
import { EXPERIENCE } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective, TiltDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  protected readonly experience = EXPERIENCE;
}