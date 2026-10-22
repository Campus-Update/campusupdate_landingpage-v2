import * as React from 'react';
import { CheckCircle, FlagBanner, Info, PaperPlaneTilt, SealCheck, UsersThree, WarningOctagon } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

/** Tappable versions of "How it works" steps 1 and 2. Same look as the static StepVisual. */

const shell =
  'relative isolate flex w-full items-center justify-center overflow-hidden rounded-[28px] bg-[linear-gradient(165deg,#F4F3FF_0%,#DDDAFB_100%)] px-5 py-8 min-[560px]:aspect-[3/4] min-[560px]:py-5';
const card = 'rounded-2xl bg-white shadow-[0_18px_36px_-18px_rgba(32,28,92,0.45)] ring-1 ring-black/5';
const chipBase =
  'inline-flex h-8 touch-manipulation cursor-pointer before:absolute before:-inset-1 before:content-[""] relative items-center rounded-full px-3 text-[12px] font-medium outline-none transition-[background-color,box-shadow] duration-200 focus-visible:ring-[3px] focus-visible:ring-indigo/40';

const levels = {
  Normal: { Icon: Info, on: 'bg-secondary text-ink-strong ring-2 ring-indigo/60', icon: 'text-gray' },
  Important: { Icon: FlagBanner, on: 'bg-[#FEF0C7] text-[#93370D] ring-2 ring-[#DC6803]/60', icon: 'text-[#93370D]' },
  Urgent: { Icon: WarningOctagon, on: 'bg-[#FDE8E6] text-[#B42318] ring-2 ring-[#D92D20]/60', icon: 'text-[#B42318]' },
} as const;
type Level = keyof typeof levels;

function Glow() {
  return <div aria-hidden="true" className="absolute -bottom-16 left-1/2 -z-10 h-48 w-[120%] -translate-x-1/2 rounded-full bg-indigo/25 blur-2xl" />;
}

/** Step 1: choose a priority, press Publish, a push notification slides in. */
function Publish({ label }: { label: string }) {
  const [level, setLevel] = React.useState<Level>('Important');
  const [sent, setSent] = React.useState(false);
  const timer = React.useRef<number>();
  React.useEffect(() => () => window.clearTimeout(timer.current), []);

  const publish = () => {
    window.clearTimeout(timer.current);
    setSent(true);
    timer.current = window.setTimeout(() => setSent(false), 3400);
  };
  const { Icon, icon } = levels[level];

  return (
    <div role="group" aria-label={label} className={shell}>
      <Glow />
      {/* the push notification that slides in after Publish */}
      <div
        aria-hidden={!sent}
        className={cn(
          card,
          'absolute inset-x-4 top-4 z-20 max-w-[260px] p-3 transition-[opacity,transform,filter] duration-500 ease-[var(--ease-out)] min-[560px]:top-8 min-[560px]:mx-auto',
          sent ? 'translate-y-0 opacity-100 blur-0' : '-translate-y-6 opacity-0 blur-[4px] pointer-events-none',
        )}
      >
        <div className="flex items-center gap-2">
          <img src="/logo-mark.svg" alt="" className="size-5 rounded-md" />
          <span className="text-[11px] font-medium text-gray">Campus Update</span>
          <span className="ml-auto text-[11px] text-gray">now</span>
        </div>
        <p className="mt-1.5 flex items-center gap-1.5 text-[13px] font-semibold text-ink">
          <Icon weight="fill" className={cn('size-4', icon)} />
          {level}: Registration opens Monday
        </p>
      </div>
      <p className="sr-only" role="status">{sent ? `Published as ${level}. Students receive a notification.` : ''}</p>

      <div className="w-full max-w-[260px]">
        <div className={cn('mb-3 flex items-center gap-2 px-1 transition-opacity duration-300', sent && 'opacity-0')}>
          <span className="grid size-8 place-items-center rounded-full bg-indigo text-[11px] font-semibold text-white">FA</span>
          <div className="leading-tight">
            <p className="text-[13px] font-semibold text-ink-strong">FOCIT Admin</p>
            <p className="flex items-center gap-1 text-[11px] text-[#177A3C]"><SealCheck weight="fill" className="size-3.5" />Authorised admin</p>
          </div>
        </div>
        <div className={cn(card, 'p-4')}>
          <p className="text-[11px] font-medium tracking-wide text-gray uppercase">New announcement</p>
          <p className="mt-2 rounded-xl border border-border px-3 py-2.5 text-[14px] leading-snug font-medium text-ink">Registration opens Monday</p>
          <div role="radiogroup" aria-label="Priority" className="mt-3 flex flex-wrap gap-1.5">
            {(Object.keys(levels) as Level[]).map((l) => (
              <button
                key={l}
                type="button"
                role="radio"
                aria-checked={level === l}
                onClick={() => setLevel(l)}
                className={cn(chipBase, level === l ? levels[l].on : 'bg-secondary text-ink-strong hover:bg-[#EAEAEA]')}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={publish}
            disabled={sent}
            className={cn(
              'mt-4 flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-xl text-[14px] font-semibold text-white outline-none transition-[background-color,box-shadow] duration-200 focus-visible:ring-[3px] focus-visible:ring-indigo/40',
              sent ? 'bg-[#177A3C]' : 'bg-indigo hover:bg-[#4338CA] hover:shadow-[0_10px_20px_-10px_rgba(79,70,229,0.8)]',
            )}
          >
            {sent ? <><CheckCircle weight="fill" className="size-4" />Published</> : <><PaperPlaneTilt weight="fill" className="size-4" />Publish</>}
          </button>
        </div>
      </div>
    </div>
  );
}

/** Step 2: toggle which levels receive it. */
function Target({ label }: { label: string }) {
  const all = ['100', '200', '300', '400'];
  const [picked, setPicked] = React.useState<string[]>(['300', '400']);
  const toggle = (l: string) => setPicked((p) => (p.includes(l) ? p.filter((x) => x !== l) : [...p, l]));
  const chosen = all.filter((l) => picked.includes(l));
  const summary =
    chosen.length === 0
      ? 'Pick at least one level to send'
      : chosen.length === all.length
        ? 'Every Computer Science student sees it'
        : `Only ${chosen.join(' & ')} level students see it`;

  return (
    <div role="group" aria-label={label} className={shell}>
      <Glow />
      <div className="w-full max-w-[260px]">
        <div className={cn(card, 'p-4')}>
          <p className="text-[11px] font-medium tracking-wide text-gray uppercase">Send to</p>
          <dl className="mt-3 grid gap-3 text-[13px]">
            <div><dt className="text-gray">Faculty</dt><dd className="mt-1 rounded-lg bg-secondary px-3 py-2 font-medium text-ink">FOCIT</dd></div>
            <div><dt className="text-gray">Department</dt><dd className="mt-1 rounded-lg bg-secondary px-3 py-2 font-medium text-ink">Computer Science</dd></div>
            <div>
              <dt className="text-gray" id="level-label">Level</dt>
              <dd className="mt-1"><div className="flex gap-1.5" role="group" aria-labelledby="level-label">
                {all.map((l) => {
                  const on = picked.includes(l);
                  return (
                    <button
                      key={l}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggle(l)}
                      className={cn(chipBase, 'min-w-10 justify-center', on ? 'bg-indigo text-white shadow-[0_8px_14px_-8px_rgba(79,70,229,0.9)]' : 'bg-secondary text-ink-strong hover:bg-[#EAEAEA]')}
                    >
                      {l}
                    </button>
                  );
                })}
              </div></dd>
            </div>
          </dl>
        </div>
        <p role="status" className="mt-3 flex items-center justify-center gap-1.5 text-center text-[12px] font-medium text-indigo-deep">
          <UsersThree weight="fill" className="size-4 shrink-0" />
          <span key={summary} className="animate-in fade-in-0 slide-in-from-bottom-1 duration-300">{summary}</span>
        </p>
      </div>
    </div>
  );
}

export default function StepDemo({ step, label }: { step: 1 | 2; label: string }) {
  return step === 1 ? <Publish label={label} /> : <Target label={label} />;
}
