import { Component, output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="bg-slate-50 pb-20 fade-in">
      <!-- Header -->
      <div class="bg-emerald-800 text-white py-16 mb-12">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl font-bold mb-4">باقات وخدمات العمرة</h1>
          <p class="text-emerald-200 max-w-2xl mx-auto">اختر الباقة المناسبة لك ولعائلتك، ودعنا نتولى باقي التفاصيل لنضمن لك رحلة مريحة ومباركة.</p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4">
        
        <!-- Section: Umrah Packages -->
        <div class="mb-16">
          <div class="flex items-center gap-3 mb-8 border-r-4 border-emerald-500 pr-4">
             <div class="bg-emerald-100 p-2 rounded-lg text-emerald-700">
                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
             </div>
             <h2 class="text-2xl font-bold text-emerald-900">خدمات العمرة</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Individual -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div class="h-60 relative overflow-hidden bg-gray-200">
                 <img ngSrc="assets/indv.jpg" fill class="object-cover group-hover:scale-110 transition-transform duration-500" alt="Individual">
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-slate-900 mb-2">عمرة الأفراد</h3>
                <p class="text-slate-500 text-sm mb-4">انضم إلى رحلاتنا الأسبوعية بأسعار اقتصادية وخدمة مميزة.</p>
                <ul class="text-sm text-slate-600 space-y-2 mb-6">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 ml-2" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
                    مواصلات ذهاب وعودة
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 ml-2" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
                    سكن فندقي (مشترك/خاص)
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 ml-2" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
                    مزارات في المدينة
                  </li>
                </ul>
                <button (click)="bookEvent.emit('umrah_individual')" class="w-full py-3 border-2 border-emerald-600 text-emerald-700 font-bold rounded-lg hover:bg-emerald-600 hover:text-white transition-colors">
                  احجز الآن
                </button>
              </div>
            </div>

            <!-- Family -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group relative border-2 border-amber-400">
               <div class="absolute top-4 left-4 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full z-10">الأكثر طلباً</div>
              <div class="h-60 relative overflow-hidden bg-gray-200">
                 <img ngSrc="assets/family.webp" fill class="object-cover group-hover:scale-110 transition-transform duration-500" alt="Family">
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-slate-900 mb-2">عمرة العائلة</h3>
                <p class="text-slate-500 text-sm mb-4">خصوصية تامة لعائلتك مع خيارات فنادق متعددة.</p>
                <ul class="text-sm text-slate-600 space-y-2 mb-6">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 ml-2" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
                    غرفة خاصة للعائلة
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 ml-2" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
                    مقاعد أمامية في الباص
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 ml-2" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
                    توفير وجبات (اختياري)
                  </li>
                </ul>
                <button (click)="bookEvent.emit('umrah_family')" class="w-full py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">
                  احجز الآن
                </button>
              </div>
            </div>

             <!-- Groups -->
             <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div class="h-60 relative overflow-hidden bg-gray-200">
                 <img ngSrc="assets/offers.png" fill class="object-cover group-hover:scale-110 transition-transform duration-500" alt="Groups">
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-slate-900 mb-2">مجموعات وشركات</h3>
                <p class="text-slate-500 text-sm mb-4">أسعار خاصة للمجموعات والشركات والحملات الكبيرة.</p>
                <ul class="text-sm text-slate-600 space-y-2 mb-6">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 ml-2" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
                    باص خاص كامل
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 ml-2" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
                    مرونة في التواريخ
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 ml-2" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
                    مشرف خاص للرحلة
                  </li>
                </ul>
                <button (click)="bookEvent.emit('umrah_group')" class="w-full py-3 border-2 border-emerald-600 text-emerald-700 font-bold rounded-lg hover:bg-emerald-600 hover:text-white transition-colors">
                  اطلب عرض سعر
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Section: Transport Only -->
        <div>
           <div class="flex items-center gap-3 mb-8 border-r-4 border-amber-500 pr-4">
             <div class="bg-amber-100 p-2 rounded-lg text-amber-700">
                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/></svg>
             </div>
             <h2 class="text-2xl font-bold text-emerald-900">خدمات النقل (باصات فقط)</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
             <!-- Standard Bus -->
             <div class="bg-white rounded-xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-center">
                <div class="w-full md:w-1/3 h-40 relative rounded-lg overflow-hidden">
                    <img ngSrc="https://picsum.photos/id/365/400/300" fill class="object-cover" alt="Bus">
                </div>
                <div class="flex-1 text-center md:text-right">
                    <h3 class="text-xl font-bold mb-2">نقل باصات حديثة</h3>
                    <p class="text-slate-500 text-sm mb-4">رحلات يومية من الرياض إلى مكة (ذهاب وعودة). باصات مكيفة ومريحة موديلات حديثة.</p>
                    <button (click)="bookEvent.emit('bus_standard')" class="px-6 py-2 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition">حجز مقعد</button>
                </div>
             </div>

             <!-- VIP Bus -->
             <div class="bg-slate-900 rounded-xl p-6 shadow-xl flex flex-col md:flex-row gap-6 items-center text-white border border-slate-700">
                <div class="w-full md:w-1/3 h-40 relative rounded-lg overflow-hidden">
                    <img ngSrc="https://picsum.photos/id/191/400/300" fill class="object-cover" alt="VIP Bus">
                </div>
                <div class="flex-1 text-center md:text-right">
                    <h3 class="text-xl font-bold mb-2 text-amber-400">نقل VIP فاخر</h3>
                    <p class="text-slate-300 text-sm mb-4">مقاعد واسعة (نظام طيران)، شواحن، شاشات، ووجبات خفيفة. رفاهية مطلقة.</p>
                    <button (click)="bookEvent.emit('bus_vip')" class="px-6 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition">حجز VIP</button>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class ServicesComponent {
  bookEvent = output<string>();
}