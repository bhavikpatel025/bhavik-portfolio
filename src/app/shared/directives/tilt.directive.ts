import { Directive, ElementRef, HostListener, Input, PLATFORM_ID, inject, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appTilt]',
  standalone: true
})
export class TiltDirective implements OnInit {
  @Input('appTilt') maxTilt: number | string = 10;
  @Input() perspective: number | string = 1000;

  private el = inject(ElementRef<HTMLElement>);
  private platformId = inject(PLATFORM_ID);
  private prefersReducedMotion = false;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!this.prefersReducedMotion) {
        this.el.nativeElement.style.transition = 'transform 0.1s ease-out';
      }
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.prefersReducedMotion || !isPlatformBrowser(this.platformId)) return;

    const maxTilt = Number(this.maxTilt) || 10;
    const perspective = Number(this.perspective) || 1000;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left; // x position within the element.
    const y = event.clientY - rect.top;  // y position within the element.

    const multiplierX = (maxTilt * 2) / rect.width;
    const multiplierY = (maxTilt * 2) / rect.height;

    // Calculate rotation based on mouse position relative to center
    const rotateX = (maxTilt - y * multiplierY).toFixed(2);
    const rotateY = (x * multiplierX - maxTilt).toFixed(2);

    this.el.nativeElement.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.prefersReducedMotion || !isPlatformBrowser(this.platformId)) return;
    
    const perspective = Number(this.perspective) || 1000;

    // Smooth reset
    this.el.nativeElement.style.transition = 'transform 0.5s ease-out';
    this.el.nativeElement.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    
    // Restore fast transition for next mousemove
    setTimeout(() => {
      if (this.el) {
        this.el.nativeElement.style.transition = 'transform 0.1s ease-out';
      }
    }, 500);
  }
}
