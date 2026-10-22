import { ArrowsClockwise, Bell, CellSignalFull, WifiHigh, BatteryFull, MagnifyingGlass, SealCheck } from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Shared building blocks so every mock app screen looks like the real Campus Update app. */

export function StatusBar() {
  return (
    <div className="relative flex h-[54px] items-end justify-between px-8 pb-2 text-[15px] font-semibold text-ink">
      <span>9:41</span>
      <span className="absolute top-[11px] left-1/2 h-[30px] w-[104px] -translate-x-1/2 rounded-full bg-black" />
      <span className="flex items-center gap-1.5">
        <CellSignalFull weight="fill" className="size-4" />
        <WifiHigh weight="bold" className="size-4" />
        <BatteryFull weight="fill" className="size-5" />
      </span>
    </div>
  );
}

export function AppPill({ children = 'Campus Update' }: { children?: ReactNode }) {
  return <span className="inline-block rounded-full bg-lavender px-3 py-1 text-[13px] font-medium text-indigo">{children}</span>;
}

export function BellButton({ dot = true }: { dot?: boolean }) {
  return (
    <span className="relative grid size-10 place-items-center text-ink-strong">
      <Bell className="size-6" />
      {dot && <span className="absolute top-1.5 right-1.5 size-2.5 rounded-full bg-[#E8590C]" />}
    </span>
  );
}

export function IconButton({ children }: { children: ReactNode }) {
  return <span className="grid size-10 place-items-center text-ink-strong">{children}</span>;
}

export const RefreshIcon = () => <ArrowsClockwise className="size-6" />;
export const SearchIcon = () => <MagnifyingGlass className="size-6" />;

/** Plain screen title row, used on Announcements / Events / Calendar. */
export function ScreenTitle({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="flex items-center justify-between px-5 pt-2 pb-3">
      <div>
        <AppPill />
        <h4 className="mt-1.5 font-sans text-[26px] leading-none font-semibold tracking-tight text-ink">{title}</h4>
      </div>
      <div className="flex items-center">{children}</div>
    </div>
  );
}

export function OfficialBadge({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-1 rounded-full bg-[#E4F5EA] px-2 py-0.5 text-[11px] font-semibold text-[#177A3C]', className)}>
      <SealCheck weight="fill" className="size-3.5" />
      Official
    </span>
  );
}

export function Chip({ active, children }: { active?: boolean; children: ReactNode }) {
  return (
    <span
      className={cn(
        'inline-flex h-8 shrink-0 items-center rounded-full px-3.5 text-[13px] font-medium',
        active ? 'bg-indigo text-white' : 'bg-secondary text-ink-strong',
      )}
    >
      {children}
    </span>
  );
}
