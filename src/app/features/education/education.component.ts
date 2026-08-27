import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/components/ui/section-heading.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { CERTIFICATIONS, EDUCATION } from '../../data/portfolio.data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  protected readonly education = EDUCATION;
  protected readonly certifications = CERTIFICATIONS;
}