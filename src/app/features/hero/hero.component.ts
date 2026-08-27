import { Component } from '@angular/core';
import { PROFILE, SOCIAL_LINKS, RESUME_PATH } from '../../data/portfolio.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SocialIconComponent } from '../../shared/components/ui/social-icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective, SocialIconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  protected readonly profile = PROFILE;
  protected readonly socials = SOCIAL_LINKS;
  protected readonly resumePath = RESUME_PATH;
}