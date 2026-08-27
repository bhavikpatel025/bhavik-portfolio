import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-icon',
  standalone: true,
  template: `
    @switch (icon) {
      @case ('github') {
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.25 9.27 7.77 10.77.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.09-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.75 1.17 1.75 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.73.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.05.77 2.11 0 1.52-.01 2.75-.01 3.12 0 .3.2.66.79.55 4.52-1.51 7.76-5.76 7.76-10.77C23.02 5.24 18.27.5 12 .5Z"/>
        </svg>
      }
      @case ('linkedin') {
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
        </svg>
      }
      @case ('email') {
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
          <rect x="2.5" y="4.5" width="19" height="15" rx="2.2"/>
          <path d="m3.5 6 8.5 6.5L20.5 6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      }
      @case ('phone') {
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
          <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1.2 1.2 0 0 1 1.2-.3 10 10 0 0 0 3.1.5 1.2 1.2 0 0 1 1.2 1.2v3a1.2 1.2 0 0 1-1.2 1.2A17.5 17.5 0 0 1 2 3.7 1.2 1.2 0 0 1 3.2 2.5h3a1.2 1.2 0 0 1 1.2 1.2 10 10 0 0 0 .5 3.1 1.2 1.2 0 0 1-.3 1.2L6.6 10.8Z" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      }
    }
  `,
})
export class SocialIconComponent {
  @Input({ required: true }) icon: 'github' | 'linkedin' | 'email' | 'phone' = 'github';
}