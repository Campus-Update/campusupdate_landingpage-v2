import * as React from 'react';
import { Tabs as TabsPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';

/** shadcn/ui Tabs (new-york) - Radix handles roles, arrow-key navigation and Home/End. */
function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot="tabs" className={cn('flex flex-col gap-2', className)} {...props} />;
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'inline-flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full bg-secondary p-2.5 text-secondary-foreground [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
        'shadow-[inset_0_-1px_0_rgba(16,24,40,0.08),0_8px_20px_-14px_rgba(16,24,40,0.35)]',
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        'inline-flex h-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent px-5 text-[17px] whitespace-nowrap text-ink-strong transition-[background-color,box-shadow] duration-200 outline-none sm:px-6',
        'focus-visible:ring-[3px] focus-visible:ring-ring/50',
        'data-[state=active]:bg-white data-[state=active]:shadow-[0_2px_8px_rgba(16,24,40,0.1)]',
        'disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content data-slot="tabs-content" className={cn('flex-1 outline-none', className)} {...props} />;
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
