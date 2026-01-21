import { Component, output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ContactComponent } from './contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ServicesComponent, ContactComponent],
  template: `
    <!-- Hero Section -->
    <section class="relative h-[600px] flex items-center justify-center overflow-hidden">
      <!-- Background Overlay -->
      <div class="absolute inset-0 bg-slate-900/60 z-10"></div>
      
      <!-- Background Image -->
      <img 
        ngSrc="assets/hero1.jpeg" 
        fill
        priority
        alt="Makkah Haram" 
        class="object-cover absolute inset-0 z-0"
      >

      <div class="relative z-20 text-center px-4 max-w-4xl mx-auto fade-in">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
          رحلة عمرة مريحة... <br/>
          <span class="text-emerald-400">من لحظة الانطلاق حتى العودة</span>
        </h1>
        <p class="text-lg md:text-2xl text-gray-200 mb-10 font-medium drop-shadow">
          خدمات متميزة، باصات VIP حديثة، وفنادق قريبة من الحرم
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            (click)="bookEvent.emit('all')"
            class="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2">
            <span>احجز الآن</span>
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
          <a href="https://wa.me/966533919639" target="_blank" rel="noopener noreferrer" 
            class="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            تواصل معنا واتساب
</a>
        </div>
      </div>
    </section>

    <!-- Brief About -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-emerald-900 mb-6">مكتب الطائفين لخدمات العمرة</h2>
          <p class="text-lg text-slate-600 leading-8">
            نقدم لكم تجربة روحانية فريدة من نوعها مع خدمات نقل متكاملة وحجوزات فندقية بأرقى المستويات. هدفنا هو راحتكم وتفرغكم للعبادة، ونحن نتكفل بكل تفاصيل الرحلة من الرياض إلى مكة والمدينة.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section (Embedded) -->
    <div id="services">
      <app-services (bookEvent)="bookEvent.emit($event)"></app-services>
    </div>

    <!-- Why Us -->
    <section class="py-16 bg-emerald-900 text-white relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold mb-2">ليش تختار الطائفين؟</h2>
                <p class="text-emerald-200">قيمنا هي سر نجاحنا وثقة عملائنا</p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div class="flex flex-col items-center p-4">
                    <div class="w-16 h-16 bg-emerald-800 rounded-2xl flex items-center justify-center mb-4 text-emerald-300 shadow-inner">
                        <svg class="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-lg">الثقة والالتزام</h3>
                    <p class="text-sm text-emerald-200 mt-2 text-center">مواعيد دقيقة وخدمة موثوقة</p>
                </div>
                <div class="flex flex-col items-center p-4">
                    <div class="w-16 h-16 bg-emerald-800 rounded-2xl flex items-center justify-center mb-4 text-emerald-300 shadow-inner">
                         <svg class="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-lg">باصات حديثة</h3>
                    <p class="text-sm text-emerald-200 mt-2 text-center">موديلات السنة لراحة قصوى</p>
                </div>
                <div class="flex flex-col items-center p-4">
                    <div class="w-16 h-16 bg-emerald-800 rounded-2xl flex items-center justify-center mb-4 text-emerald-300 shadow-inner">
                        <svg class="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-lg">خدمة VIP</h3>
                    <p class="text-sm text-emerald-200 mt-2 text-center">معاملة راقية لكل ضيف</p>
                </div>
                <div class="flex flex-col items-center p-4">
                    <div class="w-16 h-16 bg-emerald-800 rounded-2xl flex items-center justify-center mb-4 text-emerald-300 shadow-inner">
                        <svg class="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-lg">دعم 24/7</h3>
                    <p class="text-sm text-emerald-200 mt-2 text-center">فريقنا معك طوال الرحلة</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-slate-800">قالوا عن الطائفين</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Review 1 -->
                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div class="flex items-center mb-4 text-amber-500">
                        @for (star of [1,2,3,4,5]; track star) {
                             <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        }
                    </div>
                    <p class="text-slate-600 text-sm mb-4 leading-relaxed">"تجربة ممتازة جداً، الباص كان نظيف ومكيف والسائق محترم. الفندق في مكة كان قريب جداً من الحرم. شكراً لكم."</p>
                    <div class="font-bold text-slate-900 text-sm">- أبو عبدالله</div>
                </div>
                 <!-- Review 2 -->
                 <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div class="flex items-center mb-4 text-amber-500">
                        @for (star of [1,2,3,4,5]; track star) {
                             <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        }
                    </div>
                    <p class="text-slate-600 text-sm mb-4 leading-relaxed">"أول مرة أتعامل معهم ولن تكون الأخيرة. التزام بالمواعيد وسعر مناسب مقارنة بالخدمة المقدمة."</p>
                    <div class="font-bold text-slate-900 text-sm">- محمد العتيبي</div>
                </div>
                 <!-- Review 3 -->
                 <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 hidden lg:block">
                    <div class="flex items-center mb-4 text-amber-500">
                        @for (star of [1,2,3,4,5]; track star) {
                             <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        }
                    </div>
                    <p class="text-slate-600 text-sm mb-4 leading-relaxed">"حجزت عمرة عائلية، رتبوا لنا كل شيء من الفندق للباص. الله يعطيكم العافية."</p>
                    <div class="font-bold text-slate-900 text-sm">- أم فهد</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section (Embedded) -->
    <div id="contact">
      <app-contact></app-contact>
    </div>
  `
})
export class HomeComponent {
  bookEvent = output<string>();
}