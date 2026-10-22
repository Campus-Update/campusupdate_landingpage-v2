/**
 * Scroll reveal (≈1 KB). Elements marked `data-reveal` fade/rise in once as they enter the viewport.
 * Put `data-stagger` on a parent to delay its `data-reveal` children one after another.
 * Without JS (no `.js` class on <html>) everything is simply visible.
 */
const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

// Stagger index per parent.
document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((parent) => {
  const step = parent.dataset.stagger || '';
  parent.querySelectorAll<HTMLElement>(':scope > [data-reveal]').forEach((child, i) => {
    child.style.setProperty('--i', String(i));
    if (step) child.style.setProperty('--stagger', `${step}ms`);
  });
});

const show = (el: Element) => {
  el.classList.add('is-visible');
  // after the entrance (incl. stagger) drop the blur filter completely
  window.setTimeout(() => el.classList.add('is-done'), 1600 + Number((el as HTMLElement).style.getPropertyValue('--i') || 0) * 150);
};

if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
  els.forEach(show);
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          show(e.target);
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );
  els.forEach((el) => io.observe(el));
}
