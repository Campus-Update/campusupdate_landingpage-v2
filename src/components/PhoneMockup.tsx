import * as React from 'react';
import { cn } from '@/lib/utils';

const STAGE_W = 720; // logical px; the stage scales to fit its container
const STAGE_H = 576;

/**
 * Grey stage with an indigo glow and a phone that is cropped at the bottom edge,
 * like the original design. Children are the app screen, drawn at 380px wide.
 */
export default function PhoneMockup({
  children,
  label,
  className,
  floating,
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
  /** Cards that overlap the phone (drawn in the same 720px canvas, so they scale with it). */
  floating?: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState<number | null>(null);

  // Very slight perspective tilt that follows the cursor (mouse only, skipped for reduced motion).
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5; // -0.5 … 0.5
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--ry', `${(x * 7).toFixed(2)}deg`);
    el.style.setProperty('--rx', `${(-y * 5).toFixed(2)}deg`);
    el.style.setProperty('--tx', `${(-x * 26).toFixed(1)}px`); // floating cards drift the other way (depth)
    el.style.setProperty('--ty', `${(-y * 16).toFixed(1)}px`);
  };
  const onLeave = () => {
    ref.current?.style.setProperty('--ry', '0deg');
    ref.current?.style.setProperty('--rx', '0deg');
    ref.current?.style.setProperty('--tx', '0px');
    ref.current?.style.setProperty('--ty', '0px');
  };

  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / STAGE_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={label}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn('relative aspect-[5/4] w-full overflow-hidden rounded-3xl bg-[#E2E1E8]', className)}
    >
      {/* indigo glow behind the phone */}
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_72%_64%_at_50%_106%,#4F46E5_0%,#5A51E8_42%,rgba(120,110,235,0)_84%)] blur-[8px]" />
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 origin-top-left"
        style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${scale ?? 0.65})`, visibility: scale === null ? 'hidden' : 'visible' }}
      >
        {/* device */}
        <div
          className="absolute top-[48px] left-1/2 h-[900px] w-[400px] -translate-x-1/2 rounded-[58px] bg-[#1c1c1e] p-[10px] shadow-[0_40px_80px_-30px_rgba(20,16,80,0.6)] ring-1 ring-black/40 transition-transform duration-300 ease-out"
          style={{ transform: 'perspective(1600px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))' }}
        >
          <div className="relative size-full overflow-hidden rounded-[48px] bg-white font-sans">{children}</div>
        </div>
        {floating && (
          <div
            className="absolute inset-0 transition-transform duration-300 ease-out"
            style={{ transform: 'translate3d(var(--tx,0px), var(--ty,0px), 0)' }}
          >
            {floating}
          </div>
        )}
      </div>
    </div>
  );
}
