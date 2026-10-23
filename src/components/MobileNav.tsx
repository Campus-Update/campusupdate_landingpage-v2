import { ArrowRight, ArrowUpRight, Path, Question, SquaresFour, TextAlignRight } from '@phosphor-icons/react';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { buttonVariants } from '@/components/ui/button';

interface Props {
  links: readonly { label: string; href: string }[];
  appHref: string;
  earlyAccessHref?: string;
}

const icons = [Path, SquaresFour, Question];

/** Phone/tablet menu: a rounded sheet that slides in from the right, with numbered links that stagger in. */
export default function MobileNav({ links, appHref, earlyAccessHref = '/#early-access' }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="grid size-11.5 cursor-pointer place-items-center rounded-full bg-white text-ink shadow-[0_1px_2px_rgba(16,24,40,0.06),0_6px_16px_-8px_rgba(16,24,40,0.35)] ring-1 ring-ink/8 transition-colors outline-none hover:bg-lavender focus-visible:ring-[3px] focus-visible:ring-ring/50 md:hidden"
        >
          <TextAlignRight weight="bold" className="size-5.5" aria-hidden="true" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="m-2 h-[calc(100%-1rem)] w-[min(88vw,24rem)] gap-0 overflow-hidden rounded-[28px] border-0 bg-white p-0 shadow-[0_30px_80px_-20px_rgba(32,28,92,0.55)] sm:max-w-sm"
      >
        {/* soft brand glow */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-[radial-gradient(circle,#DAD7FB_0%,rgba(238,237,253,0)_70%)]" />

        <div className="relative flex items-center gap-2.5 px-6 pt-6">
          <img src="/logo-mark.svg" alt="" width="32" height="32" className="size-8" />
          <SheetTitle className="font-display text-[20px] font-medium text-ink">Campus Update</SheetTitle>
          <SheetDescription className="sr-only">Jump to a section of the page</SheetDescription>
        </div>

        <nav aria-label="Mobile" className="relative mt-8 grid px-4">
          <p className="px-3 pb-2 text-[12px] font-semibold tracking-[0.1em] text-gray uppercase">Explore</p>
          {links.map((l, i) => {
            const Icon = icons[i] ?? Path;
            return (
              <SheetClose asChild key={l.href}>
                <a
                  href={l.href}
                  style={{ animationDelay: `${120 + i * 70}ms` }}
                  className="group flex min-h-16 items-center gap-4 rounded-2xl px-3 text-ink no-underline transition-colors animate-in fade-in-0 slide-in-from-right-4 fill-mode-both duration-500 hover:bg-lavender"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-lavender text-indigo transition-colors group-hover:bg-indigo group-hover:text-white">
                    <Icon weight="fill" className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-[24px] leading-none font-medium">{l.label}</span>
                  <ArrowUpRight weight="bold" className="ml-auto size-5 text-gray/60 transition-colors group-hover:text-indigo" aria-hidden="true" />
                </a>
              </SheetClose>
            );
          })}
        </nav>

        <div className="relative mt-auto grid gap-3 p-4">
          <SheetClose asChild>
            <a href={earlyAccessHref} className={buttonVariants({ variant: 'soft', size: 'lg' }) + ' w-full'}>
              Get early access
            </a>
          </SheetClose>
          <a href={appHref} className={buttonVariants({ variant: 'brand', size: 'lg' }) + ' w-full'}>
            Go to app
            <ArrowRight weight="bold" aria-hidden="true" />
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
