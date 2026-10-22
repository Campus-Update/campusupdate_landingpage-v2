import * as React from 'react';

/** Live Nigeria (WAT, Africa/Lagos) time, shown beside the nav CTA. Renders after mount to avoid hydration mismatch. */
export default function LagosClock() {
  const [time, setTime] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-NG', {
      timeZone: 'Africa/Lagos',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    const tick = () => setTime(fmt.format(new Date()).replace(/\s/g, ' ').toUpperCase());
    tick();
    const id = window.setInterval(tick, 15000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="inline-flex h-10 items-center gap-2 rounded-[10px] bg-surface px-3.5 text-[13px] font-semibold tabular-nums text-ink-strong"
      title="Current time in Nigeria (WAT)"
    >
      <span className="relative flex size-1.5" aria-hidden="true">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-indigo opacity-60" />
        <span className="relative inline-flex size-1.5 rounded-full bg-indigo" />
      </span>
      <span className="text-gray">Lagos</span>
      <time aria-label="Current time in Nigeria" className="min-w-[5.5ch] text-right">{time ?? '—:—'}</time>
    </div>
  );
}
