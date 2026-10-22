import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

/** shadcn/ui Badge (new-york) + the pill style used for section tags in the design. */
const badgeVariants = cva(
  'inline-flex w-fit shrink-0 items-center justify-center gap-1.5 whitespace-nowrap overflow-hidden font-medium [&>svg]:pointer-events-none [&>svg]:size-3.5',
  {
    variants: {
      variant: {
        default: 'rounded-md border border-transparent bg-primary px-2 py-0.5 text-xs text-primary-foreground',
        secondary: 'rounded-md border border-transparent bg-secondary px-2 py-0.5 text-xs text-secondary-foreground',
        outline: 'rounded-md border px-2 py-0.5 text-xs text-foreground',
        // Section tag from the design: solid indigo pill with a soft glow
        tag: 'h-[30px] rounded-full bg-indigo px-3 text-sm text-white shadow-[0_8px_16px_-8px_rgba(79,70,229,0.6)]',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'span';
  return <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
