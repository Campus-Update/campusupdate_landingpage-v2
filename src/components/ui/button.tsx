import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

/**
 * shadcn/ui Button (new-york), extended with the Campus Update brand variants.
 * `buttonVariants` is exported so Astro pages can style plain <a> links the same way
 * (React `asChild` does not compose with Astro's slotted children).
 */
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2.5 whitespace-nowrap font-medium no-underline transition-[filter,background-color,color,opacity] duration-200 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5 cursor-pointer",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: 'border bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        // Brand: indigo → deep indigo gradient with a soft glow (hero / header CTAs)
        brand:
          'bg-gradient-to-b from-indigo to-indigo-deep text-white shadow-[0_18px_30px_-14px_rgba(79,70,229,0.55)] hover:brightness-125',
        // Soft: light grey pill with indigo text (secondary CTA)
        soft:
          'bg-gradient-to-b from-[#F5F5F5] to-[#E0E0E0] text-indigo shadow-[0_14px_28px_-16px_rgba(16,24,40,0.4)] hover:brightness-95',
      },
      size: {
        default: 'h-10 rounded-lg px-4 text-sm',
        sm: 'h-9 rounded-md px-3 text-sm',
        lg: 'h-14 rounded-[20px] px-7 text-[17px]',
        md: 'h-11.5 rounded-[18px] px-[18px] text-[15px] sm:h-14 sm:rounded-[20px] sm:px-6 sm:text-[17px]',
        // Compact, squarer CTA for the top nav
        nav: 'h-11 rounded-[10px] px-5 text-[15px]',
        icon: 'size-10 rounded-lg',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'button';
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
