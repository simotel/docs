---
sidebar_label: "Trunk"
---


# Trunk

## کاربرد

برای ایجاد تماس روی ترانک استفاده می‌‌گردد، به این نحو که شماره ورودی به کامپوننت ترانک را روی ترانک انتخاب شده در کامپوننت شماره‌‌گیری می‌‌کند.




## پارامترها کامپوننت

- **Trunk**: انتخاب ترانک برای انتقال تماس از طریق آن است.

- **Timeout (sec)**: مدت زمانی است که تماس منتظر برقراری ارتباط می‌‌ماند (برحسب ثانیه).

- **Skip**: تعیین تعداد رقم‌‌هایی است که باید از ابتدای شماره واردشده حذف گردد. سپس شماره جدید به‌‌عنوان شماره مقصد درنظر گرفته می‌‌شود.

- **Prefix**: افزودن عدد درج‌شده در این گزینه قبل از شماره واردشده است. سپس شماره جدید به‌‌عنوان شماره مقصد درنظر گرفته می‌شود.

- **Call Limit (sec)**: محدودیت زمانی مكالمه است.

- **Permitted Queues**: صف‌‌هایی که مجاز به استفاده از این ترانک هستند. اگر صفی انتخاب نگردد تمام صف‌‌ها مجاز به استفاده‌اند.

- **Permitted Extensions**: داخلی‌‌هایی که مجاز به استفاده از این ترانک هستند. اگر داخلی انتخاب نگردد تمام داخلی‌‌ها مجاز به استفاده هستند.

- **Options**: تنظیمات تماس است.



## خروجی‌ها

- **S (Success)**: درصورتی‌‌که تماس موفق باشد. تماس خاتمه می‌‌یابد و مرحله بعدی ندارد.

- **F (Fail)**: درصورتی‌‌که تماس موفق نباشد، یعنی مقصد به هر دلیلی پاسخ نداده باشد.