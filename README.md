# Confirm Password Checker

Ushbu loyiha foydalanuvchilarga parolni kiritib, uni tasdiqlash imkoniyatini beradi. 
Bu oddiy va samarali loyiha foydalanuvchi interfeysida parolni tasdiqlash jarayonini tekshirishga mo'ljallangan.

## Texnologiyalar va maqsadlar

Ushbu loyiha quyidagi texnologiyalar yordamida ishlab chiqilgan:

### 1. **HTML**
   - Tuzilishni yaratish uchun asos.
   - Formani va parol kiritish maydonlarini yaratish uchun ishlatilgan.

### 2. **CSS**
   - Foydalanuvchi interfeysini vizual ravishda chiroyli qilish uchun ishlatilgan.
   - Asosiy funksiyalar:
     - **`body`**: Markazlashtirilgan dizayn yaratadi.
     - **`.container`**: Formani tashkil qiladi.
     - **`:focus`**: Faollashtirilgan kiritish maydonlarini belgilash.

### 3. **JavaScript**
   - Dinamik o'zgarishlarni boshqarish uchun ishlatilgan:
     - Parol uzunligini tekshirish.
     - Kiritilgan parollar bir-biriga mosligini ta'minlash.
     - "Check" tugmasini faollashtirish yoki faolsizlantirish.

## Loyihaning asosiy funksiyalari
- Foydalanuvchi parol kiritgandan keyin tasdiqlash maydoni ochiladi.
- Kiritilgan ikkala parol mos kelganda "Check" tugmasi faollashadi.
- Dinamik validatsiya va xatolarni real vaqt rejimida tekshirish.
