// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// Ù¾ÛŒÚ©Ø±Ø¨Ù†Ø¯ÛŒ Ú†Ù†Ø¯Ù…Ø³ØªØ£Ø¬Ø±ÛŒ ÙØ±Ø§Ù†Øªâ€ŒØ§Ù†Ø¯
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// Ø§ÛŒÙ† ÙØ§ÛŒÙ„ ØªÙˆØ³Ø· widget.htmlØŒ chat.html Ùˆ admin.html Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯.
// ÙˆÙ‚ØªÛŒ Ø¯Ø§Ù…Ù†Ù‡ ÙˆØ§Ù‚Ø¹ÛŒ Ø®Ø±ÛŒØ¯ÛŒØ¯ÛŒØŒ ÙÙ‚Ø· BASE_DOMAIN Ø±Ø§ Ø§ÛŒÙ†Ø¬Ø§ ØªØºÛŒÛŒØ± Ø¨Ø¯Ù‡.

window.APP_CONFIG = {
  // â”€â”€ Ø¢Ø¯Ø±Ø³ Ù¾Ø§ÛŒÙ‡ API (Ø¨Ú©â€ŒØ§Ù†Ø¯ Ø±ÙˆÛŒ Cloudflare Workers) â”€â”€
  // Ø§ÛŒÙ† Ù…Ù‚Ø¯Ø§Ø± Ø¨Ø±Ø§ÛŒ Ù‡Ù…Ù‡â€ŒÛŒ ÙØ±Ø§Ø®ÙˆØ§Ù†ÛŒâ€ŒÙ‡Ø§ÛŒ fetch Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯.
  // Ø±ÙˆÛŒ GitHub PagesØŒ Ø§ÛŒÙ† Ø¢Ø¯Ø±Ø³ Worker ØªÙˆØ³Øª â€” Ù†Ù‡ window.location.origin.
  //
  // Ø§ÙˆÙ„ÙˆÛŒØª Ø®ÙˆØ§Ù†Ø¯Ù†:
  //   Û±) Ù…ØªØºÛŒØ± Ù…Ø­ÛŒØ·ÛŒ build-time (Ù…Ù‚Ø¯Ø§Ø±Ø¯Ù‡ÛŒ Ø¯Ø± GitHub Actions)
  //   Û²) window.API_BASE (Ø§Ú¯Ø± Ø¬Ø§ÛŒÛŒ Ø¯Ø³ØªÛŒ set Ø´Ø¯Ù‡ Ø¨Ø§Ø´Ø¯)
  //   Û³) Ù…Ù‚Ø¯Ø§Ø± Ù¾ÛŒØ´â€ŒÙØ±Ø¶ Ø²ÛŒØ±
  API_BASE: 'https://ai-support-bot.moviran2018.workers.dev',

  // â”€â”€ Ø¯Ø§Ù…Ù†Ù‡ Ø§ØµÙ„ÛŒ â”€â”€
  // Ø­Ø§Ù„Øª Û± (Ø¯Ø§Ù…Ù†Ù‡ ÙˆØ§Ù‚Ø¹ÛŒ): 'example.com'
  //   Ø¢Ø¯Ø±Ø³ API Ù…ÛŒâ€ŒØ´ÙˆØ¯: https://client1.example.com/api/chat
  // Ø­Ø§Ù„Øª Û² (Ø§Ù„Ø§Ù† â€” Ø¨Ø¯ÙˆÙ† Ø¯Ø§Ù…Ù†Ù‡): ''
  //   Ø¢Ø¯Ø±Ø³ API Ù…ÛŒâ€ŒØ´ÙˆØ¯: <WORKER_URL>?client=client1/api/chat
  BASE_DOMAIN: '',

  // â”€â”€ Ø¢Ø¯Ø±Ø³ Worker (Ø¯Ø± Ø­Ø§Ù„Øª Ø¨Ø¯ÙˆÙ† Ø¯Ø§Ù…Ù†Ù‡ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯) â”€â”€
  WORKER_URL: 'https://ai-support-bot.moviran2018.workers.dev',

  // â”€â”€ Ù†Ø§Ù… GitHub Pages â”€â”€
  // Ø¢Ø¯Ø±Ø³ Ù…Ø®Ø²Ù† Ø¹Ù…ÙˆÙ…ÛŒ Ú©Ù‡ ÙØ±Ø§Ù†Øªâ€ŒØ§Ù†Ø¯ Ø¯Ø± Ø¢Ù† serve Ù…ÛŒâ€ŒØ´ÙˆØ¯.
  GITHUB_PAGES: 'https://moviran2018.github.io/ai-support-bot-pages',
};
// ØªØ¹ÛŒÛŒÙ† API_BASE Ù†Ù‡Ø§ÛŒÛŒ
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// GitHub Actions Ù‡Ù†Ú¯Ø§Ù… build Ù…Ù‚Ø¯Ø§Ø± API_BASE Ø±Ø§ Ø¬Ø§ÛŒÚ¯Ø²ÛŒÙ† Ù…ÛŒâ€ŒÚ©Ù†Ø¯.
// Ø§Ú¯Ø± set Ù†Ø´Ø¯Ù‡ Ø¨Ø§Ø´Ø¯ØŒ Ø§Ø² WORKER_URL Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ….
if (!window.APP_CONFIG.API_BASE) {
  window.APP_CONFIG.API_BASE = window.API_BASE || window.APP_CONFIG.WORKER_URL;
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// ØªÙˆØ§Ø¨Ø¹ Ú©Ù…Ú©ÛŒ
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

/**
 * Ø®ÙˆØ§Ù†Ø¯Ù† clientId Ø§Ø² query parameter.
 * ÙÙ‚Ø· Ú©Ø§Ø±Ø§Ú©ØªØ±Ù‡Ø§ÛŒ Ù…Ø¬Ø§Ø² Ø±Ø§ Ù…ÛŒâ€ŒÙ¾Ø°ÛŒØ±Ø¯ØŒ Ø¯Ø± ØºÛŒØ± Ø§ÛŒÙ† ØµÙˆØ±Øª 'default'.
 */
window.getClientId = function () {
  const params = new URLSearchParams(window.location.search);
  const raw = (params.get('client') || 'default').toLowerCase().trim();
  if (!/^[a-z0-9][a-z0-9-]{0,62}$/.test(raw)) return 'default';
  return raw;
};

/**
 * Ø³Ø§Ø®Øª Ø¢Ø¯Ø±Ø³ API Ø¨Ø±Ø§ÛŒ Ù…Ø´ØªØ±ÛŒ ÙØ¹Ù„ÛŒ.
 *  - Ø¨Ø§ Ø¯Ø§Ù…Ù†Ù‡ ÙˆØ§Ù‚Ø¹ÛŒ: https://client1.example.com/api/chat
 *  - Ø¨Ø¯ÙˆÙ† Ø¯Ø§Ù…Ù†Ù‡:    https://worker.../?client=client1/api/chat
 *
 * @param {string} path Ù…Ø³ÛŒØ± APIØŒ Ù…Ø«Ù„Ø§Ù‹ '/api/chat'
 * @param {string} clientId Ø´Ù†Ø§Ø³Ù‡ Ù…Ø´ØªØ±ÛŒ (Ù¾ÛŒØ´â€ŒÙØ±Ø¶: Ø§Ø² query param)
 */
window.apiUrl = function (path, clientId) {
  const cfg = window.APP_CONFIG;
  const cid = clientId || window.getClientId();

  if (cfg.BASE_DOMAIN) {
    return `https://${cid}.${cfg.BASE_DOMAIN}${path}`;
  }
  // Ø­Ø§Ù„Øª ØªÙˆØ³Ø¹Ù‡ / GitHub Pages: query param Ø¨Ù‡ Ø¬Ø§ÛŒ Ø²ÛŒØ±Ø¯Ø§Ù…Ù†Ù‡
  const base = cfg.API_BASE || cfg.WORKER_URL;
  const sep = path.includes('?') ? '&' : '?';
  return `${base}${path}${sep}client=${encodeURIComponent(cid)}`;
};

/**
 * Ù…Ø³ÛŒØ± Ù†Ø³Ø¨ÛŒ Ù¾Ù†Ù„ Ø§Ø¯Ù…ÛŒÙ† (Ø¨Ø±Ø§ÛŒ Ù„ÛŒÙ†Ú©â€ŒÙ‡Ø§ÛŒ Ø¯Ø§Ø®Ù„ÛŒ GitHub Pages).
 */
window.assetUrl = function (file) {
  const cfg = window.APP_CONFIG;
  const base = window.location.pathname.replace(/\/[^/]*$/, '');
  return `${base}/${file}`;
};
