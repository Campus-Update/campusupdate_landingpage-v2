import { CalendarBlank, MapPin, Megaphone } from '@phosphor-icons/react';
import { Chip, IconButton, ScreenTitle, SearchIcon, StatusBar, OfficialBadge } from './AppChrome';

const events = [
  { kind: 'official', title: 'Matriculation ceremony for the 2025/2026 session', when: 'Fri 25 Sept', where: 'University Sports Complex' },
  { kind: 'promoted', title: 'Campus Tech Career Fair', when: 'Sat 3 Oct', where: 'Innovation Hub' },
  { kind: 'official', title: 'New Library Wing opening', when: 'Mon 21 Sept', where: 'Main Auditorium' },
] as const;

export default function EventsScreen({ photo }: { photo: string }) {
  return (
    <>
      <StatusBar />
      <ScreenTitle title="Events"><IconButton><SearchIcon /></IconButton></ScreenTitle>
      <div className="flex gap-2 overflow-hidden px-5">
        <Chip active>All</Chip><Chip>Official</Chip><Chip>Promoted</Chip>
      </div>
      <ul className="mt-4 grid gap-3.5 px-5">
        {events.map((e) => (
          <li key={e.title} className="flex gap-3.5">
            <img src={photo} alt="" className="size-[96px] shrink-0 rounded-xl object-cover" />
            <div className="min-w-0 py-0.5">
              {e.kind === 'official' ? (
                <OfficialBadge className="bg-lavender text-indigo" />
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#EFEAFE] px-2 py-0.5 text-[11px] font-semibold text-[#5B21B6]">
                  <Megaphone weight="fill" className="size-3.5" />Promoted
                </span>
              )}
              <p className="mt-1 line-clamp-2 text-[15px] leading-snug font-medium text-ink">{e.title}</p>
              <p className="mt-1 flex items-center gap-1 text-[12px] text-gray"><CalendarBlank className="size-3.5 shrink-0" />{e.when}</p>
              <p className="flex items-center gap-1 text-[12px] text-gray"><MapPin className="size-3.5 shrink-0" /><span className="truncate">{e.where}</span></p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
