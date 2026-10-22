import * as React from 'react';
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';

/**
 * shadcn/ui RadioGroup (new-york), with the item rendered as a segmented-control button
 * (used for the "I am a Student / Staff / School admin" picker).
 */
function RadioGroup({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return <RadioGroupPrimitive.Root data-slot="radio-group" className={cn('grid gap-2', className)} {...props} />;
}

function RadioGroupItem({ className, children, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        'group/role inline-flex h-14 cursor-pointer items-center justify-start gap-3 rounded-2xl whitespace-nowrap border border-input bg-white px-4 text-[16px] sm:h-12 sm:justify-center sm:rounded-full sm:px-3 sm:text-[15px] font-medium text-ink-strong transition-[color,background-color,border-color,box-shadow] outline-none',
        'hover:border-indigo/50 focus-visible:ring-[3px] focus-visible:ring-ring/30',
        'data-[state=checked]:border-indigo data-[state=checked]:bg-indigo data-[state=checked]:text-white',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <span aria-hidden="true" className="grid size-5 shrink-0 place-items-center rounded-full border-2 border-gray/40 group-data-[state=checked]/role:border-white sm:hidden">
        <span className="size-2 rounded-full bg-white opacity-0 group-data-[state=checked]/role:opacity-100" />
      </span>
      {children}
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
