import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  template: `
    <div class="section-heading">
      <span class="eyebrow">{{ eyebrow }}</span>
      <h2 class="h2">{{ title }}</h2>
      @if (subtitle) {
        <p class="section-heading__subtitle">{{ subtitle }}</p>
      }
    </div>
  `,
  styles: [
    `
      .section-heading {
        max-width: 640px;
        margin-bottom: clamp(2rem, 5vw, 3.5rem);

        .eyebrow {
          display: block;
          margin-bottom: 0.75rem;
        }

        h2 {
          color: var(--color-text-primary);
        }
      }

      .section-heading__subtitle {
        margin-top: 0.85rem;
        color: var(--color-text-secondary);
        font-size: 1.05rem;
        line-height: 1.65;
      }
    `,
  ],
})
export class SectionHeadingComponent {
  @Input({ required: true }) eyebrow = '';
  @Input({ required: true }) title = '';
  @Input() subtitle = '';
}