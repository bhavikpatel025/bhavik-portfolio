import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/components/ui/section-heading.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  protected readonly about = PROFILE.about;
}