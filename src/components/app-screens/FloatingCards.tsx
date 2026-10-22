import { Bell, CalendarCheck, SealCheck, WarningOctagon } from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Small cards that hang off the phone edge (drawn in the 720px mockup canvas).
 * Each slides in shortly after its tab appears.
 */
const base =
  'absolute rounded-2xl bg-white p-3.5 shadow-[0_24px_44px_-18px_rgba(32,28,92,0.55)] ring-1 ring-black/5 animate-in fade-in-0 duration-500 fill-mode-both delay-300';

function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn(base, className)}>{children}</div>;
}

export function NewsFloating() {
  return (
    <Card className="top-[150px] right-[8px] w-[236px] slide-in-from-right-8">
      <div className="flex items-center gap-2">
        <img src="/logo-mark.svg" alt="" className="size-5 rounded-md" />
        <span className="text-[12px] font-medium text-gray">Campus Update</span>
        <span className="ml-auto text-[11px] text-gray">now</span>
      </div>
      <p className="mt-2 flex items-start gap-1.5 text-[14px] leading-snug font-semibold text-ink">
        <SealCheck weight="fill" className="mt-0.5 size-4 shrink-0 text-[#177A3C]" />
        Official: Registration opens Monday
      </p>
    </Card>
  );
}

export function AnnouncementsFloating() {
  return (
    <Card className="top-[330px] left-[6px] w-[190px] slide-in-from-left-8">
      <span className="inline-flex items-center gap-1 rounded-full bg-[#E4F5EA] px-2.5 py-1 text-[13px] font-semibold text-[#177A3C]">
        <SealCheck weight="fill" className="size-4" />Official
      </span>
      <p className="mt-2 text-[13px] leading-snug text-gray">Posted by FOCIT Admin</p>
    </Card>
  );
}

export function EventsFloating() {
  return (
    <Card className="top-[300px] right-[6px] w-[220px] slide-in-from-right-8">
      <p className="flex items-center gap-1.5 text-[13px] font-semibold text-ink">
        <Bell weight="fill" className="size-4 text-indigo" />Reminder set
      </p>
      <p className="mt-1 text-[13px] leading-snug text-gray">Tech Career Fair starts tomorrow, 10:00 AM.</p>
    </Card>
  );
}

export function CalendarFloating() {
  return (
    <Card className="top-[250px] left-[6px] w-[210px] slide-in-from-left-8">
      <p className="flex items-center gap-1.5 text-[13px] font-semibold text-ink">
        <CalendarCheck weight="fill" className="size-4 text-indigo" />Exams begin in 4 days
      </p>
      <p className="mt-1 text-[13px] leading-snug text-gray">100 – 400 Level · Mon 26 Oct</p>
    </Card>
  );
}

export function UrgentFloating() {
  return (
    <Card className="top-[110px] right-[6px] w-[236px] slide-in-from-right-8">
      <div className="flex items-center gap-2">
        <img src="/logo-mark.svg" alt="" className="size-5 rounded-md" />
        <span className="text-[12px] font-medium text-gray">Campus Update</span>
        <span className="ml-auto text-[11px] text-gray">now</span>
      </div>
      <p className="mt-2 flex items-start gap-1.5 text-[14px] leading-snug font-semibold text-ink">
        <WarningOctagon weight="fill" className="mt-0.5 size-4 shrink-0 text-[#B42318]" />
        Urgent: CSC 401 exam moved to Thursday
      </p>
    </Card>
  );
}
