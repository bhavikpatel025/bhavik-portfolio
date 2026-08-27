import { Component, HostListener, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { RESUME_PATH } from '../../data/portfolio.data';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly theme = inject(ThemeService);
  protected readonly resumePath = RESUME_PATH;

  protected readonly isScrolled = signal(false);
  protected readonly isMenuOpen = signal(false);

  protected readonly navLinks: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 12);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}