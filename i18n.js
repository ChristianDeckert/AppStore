// English is written in each page's HTML. German comes from the page's
// <script type="application/json" id="strings-de"> and is applied here, before the page's own
// script runs, which reads runtime strings through I18N.t(key, english).
//
// Language: ?lang=de|en (remembered), then the remembered choice, then the browser's first
// preferred language. A missing German string is logged and the English text stays.
(() => {
  'use strict';
  const SUPPORTED = ['en', 'de'];
  const asked = new URLSearchParams(location.search).get('lang');
  let lang = null;
  let fromUrl = false;
  let stored = true;

  if (asked !== null) {
    if (SUPPORTED.includes(asked)) {
      lang = asked;
      fromUrl = true;
      try {
        localStorage.setItem('lang', asked);
      } catch (err) {
        stored = false;
        console.error('Remembering the language failed; links will carry ?lang instead.', err);
      }
    } else {
      console.error(`Unknown lang "${asked}": use ${SUPPORTED.join(' or ')}.`);
    }
  }
  if (!lang) {
    try {
      const saved = localStorage.getItem('lang');
      if (SUPPORTED.includes(saved)) lang = saved;
    } catch (err) {
      console.error('Reading the remembered language failed.', err);
    }
  }
  if (!lang) {
    const first = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    lang = /^de(-|$)/i.test(first) ? 'de' : 'en';
  }

  let strings = {};
  if (lang === 'de') {
    const source = document.getElementById('strings-de');
    if (source) {
      strings = JSON.parse(source.textContent);
    } else {
      console.error('This page has no German strings; showing English.');
      lang = 'en';
    }
  }

  const missing = (key) => console.error(`Missing German string "${key}".`);
  const t = (key, english) => {
    if (lang !== 'de') return english;
    if (Object.prototype.hasOwnProperty.call(strings, key)) return strings[key];
    missing(key);
    return english;
  };

  if (lang === 'de') {
    document.documentElement.lang = 'de';
    const apply = (selector, read, write) => {
      for (const el of document.querySelectorAll(selector)) {
        const key = read(el);
        if (Object.prototype.hasOwnProperty.call(strings, key)) write(el, strings[key]);
        else missing(key);
      }
    };
    apply('[data-i18n]', (el) => el.dataset.i18n, (el, v) => { el.innerHTML = v; });
    apply('[data-i18n-alt]', (el) => el.dataset.i18nAlt, (el, v) => { el.alt = v; });
    apply('[data-i18n-aria]', (el) => el.dataset.i18nAria, (el, v) => { el.setAttribute('aria-label', v); });
    apply('[data-i18n-title]', (el) => el.dataset.i18nTitle, (el, v) => { el.title = v; });
    for (const img of document.querySelectorAll('img[data-i18n-src]')) img.src = img.dataset.i18nSrc;
    if (strings.title) document.title = strings.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && strings.description) meta.content = strings.description;
  }

  for (const a of document.querySelectorAll('.lang-switch a')) {
    if (a.hreflang === lang) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  }

  if (fromUrl && !stored) {
    for (const a of document.querySelectorAll('a[href]')) {
      if (a.closest('.lang-switch')) continue;
      const url = new URL(a.getAttribute('href'), location.href);
      if (url.origin !== location.origin || url.searchParams.has('lang')) continue;
      url.searchParams.set('lang', lang);
      a.href = url.pathname + url.search + url.hash;
    }
  }

  window.I18N = { lang, t };
})();
