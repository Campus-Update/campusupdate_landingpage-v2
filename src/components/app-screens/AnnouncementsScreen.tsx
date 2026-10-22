import { Info, SealCheck, WarningOctagon, FlagBanner, BellRinging } from '@phosphor-icons/react';
import { BellButton, Chip, ScreenTitle, StatusBar } from './AppChrome';
import { cn } from '@/lib/utils';

// Priority is shown with an icon + a text label, never colour alone (per the product requirements).
const levels = {
  Urgent: { Icon: WarningOctagon, cls: 'bg-[#FDE8E6] text-[#B42318]' },
  Important: { Icon: FlagBanner, cls: 'bg-[#FEF0C7] text-[#93370D]' },
  Normal: { Icon: Info, cls: 'bg-secondary text-ink-strong' },
} as const;

const items: { level: keyof typeof levels; title: string; text: string; when: string; to: string; push?: boolean }[] = [
  { level: 'Urgent', title: 'CSC 401 exam moved to Thursday', text: '9:00 AM, Main Hall. Bring your student ID.', when: '12 min ago', to: '400 Level · Computer Science', push: true },
  { level: 'Important', title: 'Course registration closes Friday', text: 'Complete registration on the portal before 5 PM.', when: '2 h ago', to: 'All students' },
  { level: 'Normal', title: 'Library now open until 10 PM', text: 'Extended weekday hours start next week.', when: 'Yesterday', to: 'Entire institution' },
];

export default function AnnouncementsScreen() {
  return (
    <>
      <StatusBar />
      <ScreenTitle title="Announcements"><BellButton /></ScreenTitle>
      <div className="flex gap-2 overflow-hidden px-5">
        <Chip active>All</Chip><Chip>Urgent</Chip><Chip>Important</Chip><Chip>Normal</Chip>
      </div>
      <ul className="mt-4 grid gap-3 px-5">
        {items.map(({ level, title, text, when, to, push }) => {
          const { Icon, cls } = levels[level];
          return (
            <li key={title} className="rounded-2xl border border-border bg-white p-3.5 shadow-[0_6px_16px_-12px_rgba(16,24,40,0.35)]">
              <div className="flex items-center justify-between">
                <span className={cn('inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-semibold', cls)}>
                  <Icon weight="fill" className="size-3.5" />
                  {level}
                </span>
                <span className="text-[12px] text-gray">{when}</span>
              </div>
              <p className="mt-2 text-[16px] leading-snug font-semibold text-ink">{title}</p>
              <p className="mt-0.5 text-[13px] leading-snug text-gray">{text}</p>
              <div className="mt-2.5 flex items-center gap-2 text-[12px] text-ink-strong">
                <span className="inline-flex items-center gap-1 text-[#177A3C]"><SealCheck weight="fill" className="size-3.5" />Official</span>
                <span className="text-gray">·</span>
                <span className="truncate">{to}</span>
                {push && <BellRinging weight="fill" className="ml-auto size-4 shrink-0 text-indigo" aria-label="Sent as push alert" />}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
