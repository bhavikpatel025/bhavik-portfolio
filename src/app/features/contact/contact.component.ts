import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { SectionHeadingComponent } from '../../shared/components/ui/section-heading.component';
import { SocialIconComponent } from '../../shared/components/ui/social-icon.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PROFILE, SOCIAL_LINKS } from '../../data/portfolio.data';

// TODO: replace with your actual EmailJS values
const EMAILJS_SERVICE_ID = 'service_1dmvyfk';
const EMAILJS_TEMPLATE_ID = 'template_u8e9fvs';
const EMAILJS_PUBLIC_KEY = 'Kh_E6Z-oH_4JOkVcQ';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, SectionHeadingComponent, SocialIconComponent, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected readonly profile = PROFILE;
  protected readonly socials = SOCIAL_LINKS;
  protected readonly state = signal<SubmitState>('idle');

  async onSubmit(form: NgForm): Promise<void> {
    if (form.invalid) {
      Object.values(form.controls).forEach((control) => control.markAsTouched());
      return;
    }

    this.state.set('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.value.name,
          from_email: form.value.email,
          message: form.value.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      this.state.set('success');
      form.resetForm();
    } catch (err) {
      console.error('EmailJS send failed:', err);
      this.state.set('error');
    }
  }
}