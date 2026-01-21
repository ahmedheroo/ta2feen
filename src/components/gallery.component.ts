import { Component, signal, computed } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="bg-white min-h-screen pb-20 fade-in">
       <div class="bg-slate-100 py-12 mb-12">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-3xl font-bold text-slate-800">معرض الصور</h1>
          <p class="text-slate-500 mt-2">جولة في أسطولنا وفنادقنا</p>
        </div>
      </div>

      <!-- Filters -->
      <div class="max-w-7xl mx-auto px-4 mb-8 flex justify-center gap-4">
        <button 
          (click)="setFilter('all')"
          [class]="currentFilter() === 'all' ? 'bg-emerald-600 text-white shadow-md' : 'bg-white border border-gray-200 text-slate-600 hover:bg-gray-50'"
          class="px-6 py-2 rounded-full font-medium text-sm transition-all">
          الكل
        </button>
        <button 
          (click)="setFilter('bus')"
          [class]="currentFilter() === 'bus' ? 'bg-emerald-600 text-white shadow-md' : 'bg-white border border-gray-200 text-slate-600 hover:bg-gray-50'"
          class="px-6 py-2 rounded-full font-medium text-sm transition-all">
          الباصات
        </button>
        <button 
          (click)="setFilter('hotel')"
          [class]="currentFilter() === 'hotel' ? 'bg-emerald-600 text-white shadow-md' : 'bg-white border border-gray-200 text-slate-600 hover:bg-gray-50'"
          class="px-6 py-2 rounded-full font-medium text-sm transition-all">
          الفنادق
        </button>
      </div>

      <!-- Grid -->
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        @for (img of filteredImages(); track img.id) {
          <div 
            class="relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-gray-200 group fade-in"
            (click)="openLightbox(img)">
            <img 
              [ngSrc]="img.url" 
              [alt]="img.caption"
              fill
              class="object-cover transition-transform duration-700 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p class="text-white font-medium text-sm">{{img.caption}}</p>
            </div>
          </div>
        }
      </div>

      <!-- Lightbox -->
      @if (selectedImage()) {
        <div class="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" (click)="closeLightbox()">
          <button class="absolute top-6 right-6 text-white text-4xl hover:text-gray-300">&times;</button>
          
          <div class="relative w-full max-w-4xl max-h-[90vh] flex flex-col items-center" (click)="$event.stopPropagation()">
                        <!-- Next Button -->
            <button 
              (click)="nextImage()"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-emerald-400 transition-colors bg-black/40 hover:bg-black/60 p-3 rounded-full"
            >
              ❯
            </button>


            <img 
              [src]="selectedImage()?.url" 
              class="w-full h-auto max-h-[80vh] object-contain rounded-md shadow-2xl"
              [alt]="selectedImage()?.caption"
            >
            <p class="text-white mt-4 text-lg font-medium">{{selectedImage()?.caption}}</p>

            <!-- Previous Button -->
            <button 
              (click)="prevImage()"
              class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-emerald-400 transition-colors bg-black/40 hover:bg-black/60 p-3 rounded-full"
            >
              ❮
            </button>
          </div>
        </div>
      }
    </div>
  `
})
export class GalleryComponent {
  selectedImage = signal<{id: number, url: string, caption: string} | null>(null);
  currentFilter = signal<'all' | 'bus' | 'hotel'>('all');

  images = [
    { id: 1, url: 'assets/bus/bus4.jpeg', caption: 'أسطول باصات لخدمة المعتمرين', category: 'bus' },
    { id: 2, url: 'assets/hotel/hero2.webp', caption: 'فنادق فاخرة', category: 'hotel' },
    { id: 3, url: 'assets/hotel/room1.jpeg', caption: ' غرف VIP خاصة', category: 'hotel' },
    { id: 4, url: 'assets/bus/busdriver.jpg', caption: 'سائقين محترفين', category: 'bus' },
    { id: 5, url: 'assets/bus/bus9.jpeg', caption: 'باصات حديثة ومكيفة', category: 'bus' },
    { id: 6, url: 'assets/bus/bus1.jpeg', caption: 'مقاعد مريحة و مميزة', category: 'bus' },
    { id: 7, url: 'assets/hotel/room3.jpeg', caption: 'غرف عائلية', category: 'hotel' },
    { id: 8, url: 'assets/hotel/room11.jpeg', caption: ' غرف مشتركة', category: 'hotel' },
    { id: 9, url: 'assets/bus/bus3.jpeg', caption: 'رحلات آمنة وممتعة', category: 'bus' },
    { id: 10, url: 'assets/hotel/room7.jpeg', caption: 'إطلالات رائعة من الغرف', category: 'hotel' },
    { id: 11, url: 'assets/bus/bus10.jpeg', caption: 'خدمات متميزة على متن الباص', category: 'bus' },
    { id: 12, url: 'assets/hotel/room2.jpeg', caption: 'تصاميم عصرية ومريحة', category: 'hotel' },
  ];

  filteredImages = computed(() => {
    const filter = this.currentFilter();
    if (filter === 'all') return this.images;
    return this.images.filter(img => img.category === filter);
  });

  setFilter(filter: 'all' | 'bus' | 'hotel') {
    this.currentFilter.set(filter);
  }

  openLightbox(img: any) {
    this.selectedImage.set(img);
  }

  closeLightbox() {
    this.selectedImage.set(null);
  }
  nextImage() {
    if (!this.selectedImage()) return;
    const currentIndex = this.filteredImages().findIndex(img => img.id === this.selectedImage()!.id);
    const nextIndex = (currentIndex + 1) % this.filteredImages().length;
    this.selectedImage.set(this.filteredImages()[nextIndex]);
  }

  prevImage() {
    if (!this.selectedImage()) return;
    const currentIndex = this.filteredImages().findIndex(img => img.id === this.selectedImage()!.id);
    const prevIndex = (currentIndex - 1 + this.filteredImages().length) % this.filteredImages().length;
    this.selectedImage.set(this.filteredImages()[prevIndex]);
  }
}