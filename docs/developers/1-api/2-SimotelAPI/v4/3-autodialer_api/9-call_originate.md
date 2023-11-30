
# تماس دوطرفه با کمپین

برای ایجاد تماس دوطرفه می‌توان از ماژول تماس‌انبوه نیز استفاده کرد. مزیت این ماژول زمانی مشخص می‌شود که نفر اول در تماس‌ دوطرفه تماس را قطع کند.
دراین صورت با استفاده از `autodialer_api/report/report_search` می‌توان از قطع‌ شدن تماس توسط نفر اول آگاه شد.

:::info اطلاعات
درصورتی که نیاز به اطلاعات بیشتر درمورد ماژول تماس انبوه دارید به **[این قسمت](/docs/autodialer/introad)** مراجعه فرمایید.
:::

:::tip نکته
زمانی که از ماژول تماس انبوه برای ارسال تماس دوطرفه استفاده می‌کنید هر کمپین به جای گروهی از مخاطبان شامل یک مخاطب است که نفر اول تماس می‌باشد پس از پاسخ دادن نفر اول تماس شما می‌توانید با استفاده از `context_interface` و `inteface_text` تنظیم شده در کمپین تماس را به سمت کامپوننت  `autodialer route` هدایت کنید و پس از آن تماس به `trunk api` یا `exten api` در دایل‌پلن متصل شود و با نفر دوم نیز تماس بگیرید.
:::

## فرایند پیاده سازی سناریو
برای ارسال تماس باید از سرویس افزودن کمپین استفاده شود (۱) و وضعیت نهایی شماره‌ها در کمپین از طریق وب‌سرویس جستجوی گزارشات کمپین (۲) بدست می‌آید. در ایجاد کمپین مطابق با توضیحات وب‌سرویس افزودن کمپین (۱) با استفاده از مقدار **interface_context** و **inteface_text** می‌توان تماس را به سمت دایل‌پلن هدایت کرد. در دایل‌پلن چنانکه نیاز هست ارتباط مقصد مدیریت شود از کامپوننت های **ExtensionAPI** و یا **TrunkApi** استفاده شود(طبق ۳ و ۴). برای دریافت cdr قسمت دوم تماس می‌توان از سرویس دریافت گزارشات (۵) و یا وب‌سرویس (۶) که مربوط به CDR می‌باشد استفاده کرد. در نهایت در پایان مکالمه وضعیت مکالمه اعلام می‌گردد.


**۱:** [وب‌سرویس افزودن کمپین](/docs/api/v4/autodialer_api/campaign/campaign_add)

**۲:** [وب‌سرویس دریافت گزارشات کمپین](/docs/api/v4/autodialer_api/report/report_search)

**۳:** [وب‌سرویس کامپوننت Exten API](/docs/developers/api/SimotelWebhooks/DialplanApiComponents/exten_api)

**۴:** [وب‌سرویس کامپوننت Trunk API](/docs/developers/api/SimotelWebhooks/DialplanApiComponents/trunk_api)

**۵:** [وب‌سرویس دریافت گزارشات](/docs/api/v4/callcenter_api/SimoTelAPI/report/report_cdr_search)

**۶:** [وب‌سرویس رویداد CDR](/docs/api/v4/callcenter_api/SimoTelWebHooks/EventsApi/cdr)