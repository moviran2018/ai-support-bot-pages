// ═══════════════════════════════════════════════════════
// اسکریپت جاسازی ویجت چت (Embed)
// ═══════════════════════════════════════════════════════
// این فایل را می‌توانی مستقیماً روی سایت خودت امبد کنی:
//
//   <script src="https://YOURNAME.github.io/chat-widget/embed.js"
//           data-client="client1"></script>
//
// یا روی هر صفحه‌ای که iframe می‌خواهی:
//
//   <script>
//     window.EMBED_CONFIG = { client: 'client1' };
//   </script>
//   <script src=".../embed.js"></script>
//
// ویجت در یک iframe ایزوله لود می‌شود تا به استایل‌های سایت شما کاری نداشته باشد.

(function () {
  // تشخیص آدرس ریشه GitHub Pages (همان جایی که این فایل قرار دارد)
  const scripts = document.getElementsByTagName('script');
  const thisScript = scripts[scripts.length - 1];
  const src = thisScript.src || '';
  const baseDir = src.replace(/\/[^/]*$/, '');

  // clientId: اولویت با data-client، بعد window.EMBED_CONFIG
  const clientId =
    thisScript.getAttribute('data-client') ||
    (window.EMBED_CONFIG && window.EMBED_CONFIG.client) ||
    'default';

  const cfg = Object.assign(
    { client: 'default', position: 'left', width: 400, height: 600 },
    window.EMBED_CONFIG || {},
    { client: clientId }
  );

  // جلوگیری از لود دوگانه
  if (document.getElementById('ai-widget-frame')) return;

  const frame = document.createElement('iframe');
  frame.id = 'ai-widget-frame';
  frame.src = `${baseDir}/widget.html?client=${encodeURIComponent(cfg.client)}`;
  frame.style.cssText = [
    'position: fixed',
    'bottom: 20px',
    cfg.position === 'right' ? 'right: 20px' : 'left: 20px',
    `width: ${cfg.width}px`,
    `height: ${cfg.height}px`,
    'border: none',
    'border-radius: 16px',
    'box-shadow: 0 8px 32px rgba(0,0,0,0.15)',
    'z-index: 99999',
  ].join('; ');

  document.body.appendChild(frame);
})();
