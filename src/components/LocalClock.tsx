import * as React from 'react';

/** Live local time for the visitor (from their device time zone), shown beside the nav CTA. Renders after mount to avoid hydration mismatch. */
export default function LocalClock() {
  const [time, setTime] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-NG', {
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
      className="inline-flex h-12 items-center gap-2.5 rounded-xl bg-surface px-4.5 text-[17px] font-semibold tabular-nums text-ink-strong"
      title="Your local time"
    >
      <span className="relative flex size-2" aria-hidden="true">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-indigo opacity-60" style={{ animationDuration: '2.4s' }} />
        <span className="relative inline-flex size-2 rounded-full bg-indigo" />
      </span>
      <time aria-label="Your local time" className="min-w-[7ch] text-right">{time ?? '--:--'}</time>
    </div>
  );
}
