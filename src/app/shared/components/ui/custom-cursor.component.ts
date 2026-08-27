import { Component, HostListener, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cursor-dot" [style.transform]="'translate3d(' + mouseX + 'px, ' + mouseY + 'px, 0)'"></div>
    <div class="cursor-ring" 
         [class.is-hovering]="isHovering" 
         [style.transform]="'translate3d(' + ringX + 'px, ' + ringY + 'px, 0)'">
    </div>
  `,
  styles: [`
    :host {
      display: block;
      pointer-events: none; /* Crucial so cursor doesn't block clicks */
      z-index: 9999;
      position: fixed;
      inset: 0;
      overflow: hidden;
    }

    .cursor-dot {
      position: fixed;
      top: -4px;
      left: -4px;
      width: 8px;
      height: 8px;
      background-color: var(--color-accent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      /* Only update transform via style binding */
      will-change: transform;
    }

    .cursor-ring {
      position: fixed;
      top: -16px;
      left: -16px;
      width: 32px;
      height: 32px;
      border: 1px solid var(--color-accent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transition: width 0.2s ease, height 0.2s ease, top 0.2s ease, left 0.2s ease, background-color 0.2s ease;
      will-change: transform;
    }

    .cursor-ring.is-hovering {
      width: 48px;
      height: 48px;
      top: -24px;
      left: -24px;
      background-color: rgba(var(--color-accent-rgb), 0.1);
      border-color: transparent;
    }

    /* Hide cursor on mobile/touch devices entirely */
    @media (hover: none) and (pointer: coarse) {
      :host {
        display: none !important;
      }
    }
  `]
})
export class CustomCursorComponent implements OnInit, OnDestroy {
  mouseX = 0;
  mouseY = 0;
  ringX = 0;
  ringY = 0;
  isHovering = false;

  private platformId = inject(PLATFORM_ID);
  private animationFrameId = 0;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.animateRing();
      this.setupHoverListeners();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  private animateRing = () => {
    // Lerp (Linear interpolation) for smooth trailing effect
    this.ringX += (this.mouseX - this.ringX) * 0.15;
    this.ringY += (this.mouseY - this.ringY) * 0.15;
    
    this.animationFrameId = requestAnimationFrame(this.animateRing);
  };

  private setupHoverListeners() {
    // We listen to mouseover/mouseout globally to detect hovering over clickable elements
    document.addEventListener('mouseover', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button'))) {
        this.isHovering = true;
      }
    });

    document.addEventListener('mouseout', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button'))) {
        this.isHovering = false;
      }
    });
  }
}
