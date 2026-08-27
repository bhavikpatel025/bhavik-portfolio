import { Component } from '@angular/core';
import { PROFILE, SOCIAL_LINKS } from '../../data/portfolio.data';
import { SocialIconComponent } from '../../shared/components/ui/social-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly profile = PROFILE;
  protected readonly socials = SOCIAL_LINKS;
  protected readonly year = new Date().getFullYear();
}