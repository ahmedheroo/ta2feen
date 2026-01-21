import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { ServicesComponent } from './components/services.component';
import { GalleryComponent } from './components/gallery.component';
import { BookingComponent } from './components/booking.component';
import { ContactComponent } from './components/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HomeComponent, 
    GalleryComponent, 
    BookingComponent, 
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  currentView = signal<'home' | 'gallery' | 'booking'>('home');
  mobileMenuOpen = signal(false);

  // Pre-set booking type when navigating from services
  preSelectedService = signal<string | null>(null);

  setView(view: 'home' | 'gallery' | 'booking') {
    this.currentView.set(view);
    this.mobileMenuOpen.set(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.preSelectedService.set(null); // Reset unless specified
  }

  scrollToSection(sectionId: string) {
    this.currentView.set('home');
    this.mobileMenuOpen.set(false);
    
    // Wait for view to render if we weren't on home previously
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Offset for fixed header (80px)
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else {
        // Fallback if element not found
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  }

  navigateToBooking(serviceType?: string) {
    if (serviceType) {
      this.preSelectedService.set(serviceType);
    }
    this.setView('booking');
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }
}