import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { IconButton, ScreenTitle, StatusBar } from './AppChrome';
import { cn } from '@/lib/utils';

// October 2026 starts on a Thursday. Weeks start on Monday → 3 leading blanks.
const LEAD = 3;
const DAYS = 31;
const TODAY = 22;
const exams = (d: number) => d >= 26 && d <= 30;      // exam period
const registration = (d: number) => d === 5 || d === 9; // opens / closes
const holiday = (d: number) => d === 1;                 // Independence Day

export default function CalendarScreen() {
  const cells = [...Array(LEAD).fill(null), ...Array.from({ length: DAYS }, (_, i) => i + 1)];
  return (
    <>
      <StatusBar />
      <ScreenTitle title="Calendar" />
      <div className="flex items-center justify-between px-5">
        <p className="text-[17px] font-semibold text-ink">October 2026</p>
        <div className="flex"><IconButton><CaretLeft weight="bold" className="size-5" /></IconButton><IconButton><CaretRight weight="bold" className="size-5" /></IconButton></div>
      </div>
      <div className="mt-1 grid grid-cols-7 px-4 text-center text-[11px] font-medium text-gray">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => <span key={i} className="py-1.5">{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-y-0.5 px-4">
        {cells.map((d, i) => (
          <div key={i} className={cn('relative grid h-9 place-items-center text-[14px] text-ink', d && exams(d) && 'bg-lavender', d === 26 && 'rounded-l-full', d === 30 && 'rounded-r-full')}>
            {d && (
              <>
                <span className={cn('grid size-8 place-items-center rounded-full', d === TODAY && 'bg-indigo font-semibold text-white', d && exams(d) && d !== TODAY && 'font-medium text-indigo')}>{d}</span>
                {(registration(d) || holiday(d)) && (
                  <span className={cn('absolute bottom-0.5 size-1.5 rounded-full', holiday(d) ? 'bg-[#D92D20]' : 'bg-[#16A34A]')} />
                )}
              </>
            )}
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex gap-3.5 px-5 text-[11px] text-ink-strong">
        <span className="flex items-center gap-1.5"><i className="size-2 rounded-full bg-[#16A34A]" />Registration</span>
        <span className="flex items-center gap-1.5"><i className="size-2 rounded-full bg-indigo" />Exams</span>
        <span className="flex items-center gap-1.5"><i className="size-2 rounded-full bg-[#D92D20]" />Holiday</span>
      </div>
      <p className="mt-3.5 px-5 text-[15px] font-semibold text-ink">Coming up</p>
      <ul className="mt-2 grid gap-2 px-5">
        <li className="flex items-center gap-3 rounded-xl bg-secondary p-3"><span className="grid w-11 text-center"><b className="text-[17px] leading-none">26</b><span className="text-[10px] text-gray">OCT</span></span><span className="text-[14px] font-medium">Exams begin · 100 – 400 Level</span></li>
      </ul>
    </>
  );
}
