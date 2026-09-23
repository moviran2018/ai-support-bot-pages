// ═══════════════════════════════════════════════════════
// پیکربندی چندمستأجری فرانت‌اند
// ═══════════════════════════════════════════════════════
// این فایل توسط widget.html، chat.html و admin.html استفاده می‌شود.
// وقتی دامنه واقعی خریدیدی، فقط BASE_DOMAIN را اینجا تغییر بده.

window.APP_CONFIG = {
  // ── آدرس پایه API (بک‌اند روی Cloudflare Workers) ──
  // این مقدار برای همه‌ی فراخوانی‌های fetch استفاده می‌شود.
  // روی GitHub Pages، این آدرس Worker توست — نه window.location.origin.
  //
  // اولویت خواندن:
  //   ۱) متغیر محیطی build-time (مقداردهی در GitHub Actions)
  //   ۲) window.API_BASE (اگر جایی دستی set شده باشد)
  //   ۳) مقدار پیش‌فرض زیر
  API_BASE: 'https://ai-support-bot.moviran2018.workers.dev',

  // ── دامنه اصلی ──
  // حالت ۱ (دامنه واقعی): 'example.com'
  //   آدرس API می‌شود: https://client1.example.com/api/chat
  // حالت ۲ (الان — بدون دامنه): ''
  //   آدرس API می‌شود: <WORKER_URL>?client=client1/api/chat
  BASE_DOMAIN: '',

  // ── آدرس Worker (در حالت بدون دامنه استفاده می‌شود) ──
  WORKER_URL: 'https://ai-support-bot.moviran2018.workers.dev',

  // ── نام GitHub Pages ──
  // آدرس مخزن عمومی که فرانت‌اند در آن serve می‌شود.
  GITHUB_PAGES: 'https://moviran2018.github.io/ai-support-bot-pages',
};
// تعیین API_BASE نهایی
// ═══════════════════════════════════════════════════════
// GitHub Actions هنگام build مقدار API_BASE را جایگزین می‌کند.
// اگر set نشده باشد، از WORKER_URL استفاده می‌کنیم.
if (!window.APP_CONFIG.API_BASE) {
  window.APP_CONFIG.API_BASE = window.API_BASE || window.APP_CONFIG.WORKER_URL;
}

// ═══════════════════════════════════════════════════════
// توابع کمکی
// ═══════════════════════════════════════════════════════

/**
 * خواندن clientId از query parameter.
 * فقط کاراکترهای مجاز را می‌پذیرد، در غیر این صورت 'default'.
 */
window.getClientId = function () {
  const params = new URLSearchParams(window.location.search);
  const raw = (params.get('client') || 'default').toLowerCase().trim();
  if (!/^[a-z0-9][a-z0-9-]{0,62}$/.test(raw)) return 'default';
  return raw;
};

/**
 * ساخت آدرس API برای مشتری فعلی.
 *  - با دامنه واقعی: https://client1.example.com/api/chat
 *  - بدون دامنه:    https://worker.../?client=client1/api/chat
 *
 * @param {string} path مسیر API، مثلاً '/api/chat'
 * @param {string} clientId شناسه مشتری (پیش‌فرض: از query param)
 */
window.apiUrl = function (path, clientId) {
  const cfg = window.APP_CONFIG;
  const cid = clientId || window.getClientId();

  if (cfg.BASE_DOMAIN) {
    return `https://${cid}.${cfg.BASE_DOMAIN}${path}`;
  }
  // حالت توسعه / GitHub Pages: query param به جای زیردامنه
  const base = cfg.API_BASE || cfg.WORKER_URL;
  const sep = path.includes('?') ? '&' : '?';
  return `${base}${path}${sep}client=${encodeURIComponent(cid)}`;
};

/**
 * مسیر نسبی پنل ادمین (برای لینک‌های داخلی GitHub Pages).
 */
window.assetUrl = function (file) {
  const cfg = window.APP_CONFIG;
  const base = window.location.pathname.replace(/\/[^/]*$/, '');
  return `${base}/${file}`;
};
