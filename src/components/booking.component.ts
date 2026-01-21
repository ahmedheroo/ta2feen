import { Component, input, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="bg-slate-50 min-h-screen py-12 px-4 fade-in">
      <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden relative">
        
        <!-- Header -->
        <div class="bg-emerald-800 p-6 text-white text-center">
          <h2 class="text-2xl font-bold">حجز رحلة جديدة</h2>
          <p class="text-emerald-200 text-sm mt-1">خطوات بسيطة لتأكيد حجزك عبر واتساب</p>
        </div>

        <!-- Progress Bar -->
        <div class="bg-gray-100 h-2 w-full">
          <div 
            class="h-full bg-emerald-500 transition-all duration-500 ease-out" 
            [style.width.%]="(step() / 3) * 100">
          </div>
        </div>

        <!-- Success Overlay -->
        @if (showSuccess()) {
          <div class="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center p-8 fade-in text-center">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
              <svg class="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-slate-800 mb-2">تم تجهيز الطلب!</h3>
            <p class="text-slate-500 mb-8">جاري تحويلك إلى واتساب لإرسال التفاصيل...</p>
            <div class="w-8 h-8 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
          </div>
        }

        <!-- Content -->
        <div class="p-8">
          
          <!-- Step 1: Service Type -->
          @if (step() === 1) {
            <div class="fade-in">
              <h3 class="text-xl font-bold text-slate-800 mb-6 text-center">اختر نوع الخدمة</h3>
              <div class="grid grid-cols-1 gap-4">
                <button 
                  (click)="selectType('umrah')" 
                  [class]="selectedType() === 'umrah' ? 'ring-2 ring-emerald-500 bg-emerald-50' : 'bg-white hover:bg-gray-50'"
                  class="p-6 border rounded-xl flex items-center gap-4 transition-all text-right">
                  <div class="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                         <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke-linecap="round" stroke-linejoin="round"/>
                         <path d="M12 7V17" stroke-linecap="round" stroke-linejoin="round"/>
                         <path d="M8 12H16" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="text-right w-full">
                    <div class="font-bold text-slate-800 text-lg">باقة عمرة كاملة</div>
                    <div class="text-sm text-slate-500">نقل فاخر + حجز فندقي مؤكد</div>
                  </div>
                </button>

                <button 
                  (click)="selectType('bus')" 
                  [class]="selectedType() === 'bus' ? 'ring-2 ring-emerald-500 bg-emerald-50' : 'bg-white hover:bg-gray-50'"
                  class="p-6 border rounded-xl flex items-center gap-4 transition-all text-right">
                  <div class="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                    <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  </div>
                  <div class="text-right w-full">
                    <div class="font-bold text-slate-800 text-lg">حجز باص فقط</div>
                    <div class="text-sm text-slate-500">انتقالات ذهاب / عودة (VIP أو عادي)</div>
                  </div>
                </button>

                <button 
                  (click)="selectType('hotel')" 
                  [class]="selectedType() === 'hotel' ? 'ring-2 ring-emerald-500 bg-emerald-50' : 'bg-white hover:bg-gray-50'"
                  class="p-6 border rounded-xl flex items-center gap-4 transition-all text-right">
                  <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                  </div>
                  <div class="text-right w-full">
                    <div class="font-bold text-slate-800 text-lg">حجز فندق فقط</div>
                    <div class="text-sm text-slate-500">سكن في مكة أو المدينة قريب من الحرم</div>
                  </div>
                </button>
              </div>
              <div class="mt-8 flex justify-end">
                <button 
                  [disabled]="!selectedType()"
                  (click)="nextStep()"
                  class="bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-bold hover:bg-emerald-700 transition flex items-center gap-2">
                  التالي
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="transform rotate-180">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          }

          <!-- Step 2: Details -->
          @if (step() === 2) {
            <div class="fade-in" [formGroup]="bookingForm">
              <h3 class="text-xl font-bold text-slate-800 mb-6 text-center">تفاصيل الرحلة</h3>
              
              <div class="space-y-4">
                <!-- Date -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1">تاريخ الرحلة المتوقع <span class="text-red-500">*</span></label>
                  <input type="date" formControlName="date" [min]="minDate"
                         [class.border-red-500]="isFieldInvalid(bookingForm, 'date')"
                         class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                  @if (isFieldInvalid(bookingForm, 'date')) {
                    <p class="text-red-500 text-xs mt-1 fade-in"> (يجب أن يكون من الغد فصاعداً) يرجى تحديد تاريخ الرحلة</p>
                  }
                </div>

                <!-- Number of People -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1">عدد الأشخاص <span class="text-red-500">*</span></label>
                  <input type="number" min="1" formControlName="count" 
                         [class.border-red-500]="isFieldInvalid(bookingForm, 'count')"
                         class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                  @if (isFieldInvalid(bookingForm, 'count')) {
                    <p class="text-red-500 text-xs mt-1 fade-in">يرجى إدخال عدد الأشخاص (1 على الأقل)</p>
                  }
                </div>

                <!-- Specific Fields based on Type -->
                 @if (selectedType() === 'umrah' || selectedType() === 'hotel') {
                    <div>
                      <label class="block text-sm font-medium text-slate-700 mb-1">نوع الغرفة</label>
                      <select formControlName="roomType" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none bg-white">
                        <option value="single">غرفة خاصة (ثنائية)</option>
                        <option value="quad">غرفة رباعية (اقتصادية)</option>
                        <option value="suite">جناح ملكي</option>
                      </select>
                    </div>
                 }

                 @if (selectedType() === 'umrah' || selectedType() === 'bus') {
                    <div>
                      <label class="block text-sm font-medium text-slate-700 mb-1">فئة الباص</label>
                      <select formControlName="busType" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none bg-white">
                        <option value="standard">باص حديث مكيف (عادي)</option>
                        <option value="vip">باص VIP (مقاعد واسعة + خدمات)</option>
                      </select>
                    </div>
                 }
              </div>

              <div class="mt-8 flex justify-between">
                <button (click)="prevStep()" class="text-slate-500 hover:text-slate-700 font-medium px-4">رجوع</button>
                <button 
                  (click)="validateAndNext(bookingForm)"
                  class="bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-emerald-700 transition flex items-center gap-2">
                  التالي
                   <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="transform rotate-180">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          }

          <!-- Step 3: User Info & Submit -->
          @if (step() === 3) {
            <div class="fade-in" [formGroup]="userForm">
              <h3 class="text-xl font-bold text-slate-800 mb-6 text-center">بيانات التواصل</h3>

              <!-- Summary Card -->
              <div class="bg-emerald-50 border border-emerald-100 rounded-lg p-4 mb-6 text-sm text-slate-700">
                <p><strong>الخدمة:</strong> {{ getTypeLabel(selectedType()) }}</p>
                <p><strong>التاريخ:</strong> {{ bookingForm.get('date')?.value }}</p>
                <p><strong>العدد:</strong> {{ bookingForm.get('count')?.value }}</p>
              </div>

              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1">الاسم الكريم <span class="text-red-500">*</span></label>
                  <input type="text" formControlName="name" placeholder="الاسم الثلاثي" 
                         [class.border-red-500]="isFieldInvalid(userForm, 'name')"
                         class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                  @if (isFieldInvalid(userForm, 'name')) {
                    <p class="text-red-500 text-xs mt-1 fade-in">الاسم مطلوب (3 أحرف على الأقل)</p>
                  }
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1">رقم الجوال (واتساب) <span class="text-red-500">*</span></label>
                  <input type="tel" formControlName="phone" placeholder="05xxxxxxxx" 
                         [class.border-red-500]="isFieldInvalid(userForm, 'phone')"
                         class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none dir-ltr text-right">
                  @if (isFieldInvalid(userForm, 'phone')) {
                    <p class="text-red-500 text-xs mt-1 fade-in">رقم الجوال غير صحيح (يجب أن يبدأ بـ 05 ويتكون من 10 أرقام)</p>
                  }
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1">ملاحظات إضافية</label>
                  <textarea formControlName="notes" rows="2" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"></textarea>
                </div>
              </div>

              <div class="mt-8 flex justify-between">
                 <button (click)="prevStep()" class="text-slate-500 hover:text-slate-700 font-medium px-4">رجوع</button>
                <button 
                  (click)="submitBooking()"
                  class="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition flex items-center gap-2 shadow-lg">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  إرسال الطلب واتساب
                </button>
              </div>
            </div>
          }

        </div>
      </div>
    </div>
  `
})
export class BookingComponent {
  initialService = input<string | null>(null);
  step = signal(1);
  selectedType = signal<string>('');
  showSuccess = signal(false);
  minDate: string = '';
  bookingForm: FormGroup;
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
        // Calculate tomorrow's date for the min attribute to ensure future booking
    const today = new Date();
    today.setDate(today.getDate() + 1);
    
    // Format to YYYY-MM-DD
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    this.minDate = `${year}-${month}-${day}`;
    this.bookingForm = this.fb.group({
            date: ['', [Validators.required, (control: AbstractControl): ValidationErrors | null => {
        // Custom validator to ensure date is minDate or later (handles manual entry)
        if (!control.value) return null;
        return control.value < this.minDate ? { pastDate: true } : null;
      }]],
      count: [1, [Validators.required, Validators.min(1)]],
      roomType: ['single'],
      busType: ['standard']
    });

    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^(05)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/)]],
      notes: ['']
    });

    // Auto-select type if input provided
    effect(() => {
      const initial = this.initialService();
      if (initial) {
        if (initial.includes('umrah')) this.selectType('umrah');
        else if (initial.includes('bus')) this.selectType('bus');
        else if (initial.includes('hotel')) this.selectType('hotel');
      }
    });
  }

  selectType(type: string) {
    this.selectedType.set(type);
  }

  nextStep() {
    this.step.update(s => s + 1);
  }

  prevStep() {
    this.step.update(s => s - 1);
  }

  isFieldInvalid(form: FormGroup, field: string): boolean {
    const control = form.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  validateAndNext(form: FormGroup) {
    if (form.invalid) {
      form.markAllAsTouched();
      return;
    }
    this.nextStep();
  }

  getTypeLabel(type: string): string {
    const map: Record<string, string> = {
      'umrah': 'باقة عمرة متكاملة',
      'bus': 'حجز باص فقط',
      'hotel': 'حجز فندق فقط'
    };
    return map[type] || type;
  }

  submitBooking() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.showSuccess.set(true);

    const data = {
      type: this.getTypeLabel(this.selectedType()),
      ...this.bookingForm.value,
      ...this.userForm.value
    };

    const text = `
*طلب حجز جديد من الموقع* 🕋
------------------------
*النوع:* ${data.type}
*التاريخ:* ${data.date}
*العدد:* ${data.count}
*الاسم:* ${data.name}
*الجوال:* ${data.phone}
${data.roomType ? `*الغرفة:* ${data.roomType}` : ''}
${data.busType ? `*الباص:* ${data.busType}` : ''}
*ملاحظات:* ${data.notes}
------------------------
يرجى تأكيد الحجز.
    `.trim();

    setTimeout(() => {
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/966500000000?text=${encodedText}`, '_blank');
        this.showSuccess.set(false);
    }, 2000);
  }
}