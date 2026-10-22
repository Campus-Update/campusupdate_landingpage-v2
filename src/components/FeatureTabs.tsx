import * as React from 'react';
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight } from '@phosphor-icons/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PhoneMockup from '@/components/PhoneMockup';
import NewsScreen from '@/components/app-screens/NewsScreen';
import AnnouncementsScreen from '@/components/app-screens/AnnouncementsScreen';
import EventsScreen from '@/components/app-screens/EventsScreen';
import CalendarScreen from '@/components/app-screens/CalendarScreen';
import { AnnouncementsFloating, CalendarFloating, EventsFloating, NewsFloating } from '@/components/app-screens/FloatingCards';

export interface Feature { id: string; tab: string; title: string; text: string }
interface Props {
  features: readonly Feature[];
  /** Optimised photo (from the real app home screen) used inside the mock screens. */
  photo: string;
  /** Where the CTA under the copy points. */
  ctaHref?: string;
}

/** Feature tabs: each tab swaps the phone to its own app screen. */
export default function FeatureTabs({ features, photo, ctaHref = '#early-access' }: Props) {
  const [value, setValue] = React.useState(features[0].id);
  const active = features.find((f) => f.id === value) ?? features[0];

  const screen = {
    news: <NewsScreen photo={photo} />,
    announcements: <AnnouncementsScreen />,
    events: <EventsScreen photo={photo} />,
    calendar: <CalendarScreen />,
  }[value as 'news' | 'announcements' | 'events' | 'calendar'];

  const floating = {
    news: <NewsFloating />,
    announcements: <AnnouncementsFloating />,
    events: <EventsFloating />,
    calendar: <CalendarFloating />,
  }[value as 'news' | 'announcements' | 'events' | 'calendar'];

  return (
    <Tabs
      value={value}
      onValueChange={setValue}
      className="mt-[clamp(40px,5vw,72px)] grid grid-cols-1 items-stretch gap-[clamp(24px,6vw,100px)] md:grid-cols-2"
    >
      <div className="flex min-w-0 flex-col justify-between gap-12">
        <div>
          <TabsList aria-label="Campus Update features" className="grid w-full grid-cols-2 gap-1.5 rounded-[28px] p-1.5 sm:inline-flex sm:w-fit sm:gap-1 sm:rounded-full sm:p-2.5">
            {features.map((f) => (
              <TabsTrigger key={f.id} value={f.id} className="h-11 px-3 text-[15px] sm:h-12 sm:px-6 sm:text-[17px]">{f.tab}</TabsTrigger>
            ))}
          </TabsList>
          {features.map((f, i) => (
            <TabsContent key={f.id} value={f.id} className="mt-12 max-w-[30em]">
              <span className="text-[15px] font-semibold tabular-nums text-gray">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-[clamp(30px,3.1vw,48px)] leading-[1.1]">{f.title}</h3>
              <p className="mt-5 max-w-[27em] text-[18px] leading-[1.6] text-gray">{f.text}</p>
            </TabsContent>
          ))}
        </div>
        <div>
          <a className={buttonVariants({ variant: 'brand', size: 'lg' })} href={ctaHref}>
            Get early access
            <ArrowRight weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>

      <PhoneMockup label={`Campus Update app, ${active.tab} screen`} floating={<div key={value}>{floating}</div>}>
        <div key={value} className="animate-in fade-in-0 slide-in-from-bottom-3 duration-300">{screen}</div>
      </PhoneMockup>
    </Tabs>
  );
}
