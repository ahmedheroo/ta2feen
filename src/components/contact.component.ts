import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-slate-50 py-16 px-4">
      <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2">
          
          <!-- Map / Image Area -->
          <div class="bg-emerald-800 text-white p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-emerald-900 opacity-50"></div>
            <!-- Decorative Pattern -->
            <div class="relative z-10 w-full">
              <h2 class="text-3xl font-bold mb-4">تواصل معنا</h2>
              <p class="mb-8 text-emerald-100">نحن هنا لخدمتكم على مدار الساعة. لا تتردد في الاتصال بنا لأي استفسار.</p>
              
              <div class="space-y-6 text-right w-full max-w-xs mx-auto">
                <div class="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                  <div class="bg-emerald-500/20 p-2 rounded-full">
                     <svg class="w-6 h-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-xs text-emerald-300 mb-1">اتصال مباشر</div>
                    <div class="font-bold dir-ltr font-mono text-lg">0533919639</div>
                  </div>
                </div>

                <div class="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                  <div class="bg-emerald-500/20 p-2 rounded-full">
                     <svg class="w-6 h-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-xs text-emerald-300 mb-1">واتساب</div>
                    <div class="font-bold dir-ltr font-mono text-lg">0533919639</div>
                  </div>
                </div>

                <div class="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                  <div class="bg-emerald-500/20 p-2 rounded-full">
                    <svg class="w-6 h-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-xs text-emerald-300 mb-1">العنوان</div>
                    <div class="font-bold">الرياض، حي الملز</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Hours & Info -->
          <div class="p-12 flex flex-col justify-center">
            <h3 class="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <svg class="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                أوقات العمل
            </h3>
            <ul class="space-y-4 mb-8">
              <li class="flex justify-between border-b border-gray-100 pb-3">
                <span class="text-slate-600">جميع أيام الأسبوع</span>
                <span class="font-bold text-emerald-700 dir-ltr">علي مدار الساعة</span>
              </li>
            </ul>

            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
              <p class="text-slate-600 mb-4 font-medium">جاهز لحجز رحلتك؟</p>
              <a href="https://wa.me/966533919639" target="_blank" class="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition shadow-lg shadow-green-200">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                مراسلة واتساب
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  `
})
export class ContactComponent {}