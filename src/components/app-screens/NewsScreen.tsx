import { AppPill, BellButton, IconButton, OfficialBadge, RefreshIcon, StatusBar } from './AppChrome';
import { cn } from '@/lib/utils';

const tabs = ['All', 'For You', 'General', 'Campus', 'Technology', 'Health'];
const items = [
  { cat: 'Campus', title: 'FOCIT introduces machine learning elective for 400 level' },
  { cat: 'General', title: 'New Library Wing Opens Ahead of Schedule' },
];

export default function NewsScreen({ photo }: { photo: string }) {
  return (
    <>
      <StatusBar />
      <div className="flex items-start justify-between px-5 pt-1">
        <div>
          <AppPill />
          <p className="mt-1.5 text-[21px] leading-tight font-medium text-ink">Welcome, Ade!</p>
        </div>
        <div className="flex items-center">
          <IconButton><RefreshIcon /></IconButton>
          <BellButton />
        </div>
      </div>

      <div className="mt-3 flex gap-5 overflow-hidden border-b border-border/70 px-5 text-[14px] text-gray">
        {tabs.map((t) => (
          <span key={t} className={cn('pb-2 whitespace-nowrap', t === 'For You' && 'border-b-2 border-ink font-medium text-ink')}>{t}</span>
        ))}
      </div>

      <div className="relative mx-5 mt-4 h-[168px] overflow-hidden rounded-2xl">
        <img src={photo} alt="" className="size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="absolute inset-x-4 bottom-3.5 text-white">
          <OfficialBadge className="mb-1.5" />
          <p className="text-[17px] leading-snug font-medium">Registration for the new semester opens Monday</p>
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between px-5">
        <h4 className="font-sans text-[20px] font-medium text-ink">Latest News</h4>
        <span className="text-[14px] font-medium text-indigo">See all</span>
      </div>

      <ul className="mt-2.5 grid gap-3 px-5">
        {items.map((n) => (
          <li key={n.title} className="flex gap-3.5">
            <img src={photo} alt="" className="h-[84px] w-[112px] shrink-0 rounded-xl object-cover" />
            <div className="min-w-0 py-0.5">
              <p className="flex items-center gap-2 text-[12px] text-gray">{n.cat}<OfficialBadge /></p>
              <p className="mt-0.5 line-clamp-2 text-[15px] leading-snug font-medium text-ink">{n.title}</p>
              <p className="mt-1 text-[11px] font-semibold tracking-wide text-ink-strong">READ MORE</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
