import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export interface Faq { q: string; a: string }

export default function FaqAccordion({ faqs }: { faqs: readonly Faq[] }) {
  return (
    <Accordion type="single" collapsible className="mx-auto mt-[clamp(36px,5vw,64px)] grid max-w-[1350px] gap-5">
      {faqs.map((f, i) => (
        <AccordionItem
          key={f.q}
          value={`faq-${i}`}
          className="rounded-[40px] bg-lavender transition-[border-radius] duration-200 data-[state=open]:rounded-[32px]"
        >
          <AccordionTrigger className="min-h-20 px-[clamp(24px,5vw,68px)] py-[18px] font-display text-[clamp(17px,1.5vw,21px)] leading-[1.3] font-medium rounded-[inherit]">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="px-[clamp(24px,5vw,68px)] pb-7">
            <p className="max-w-[60em] text-[17px] leading-[1.7] text-gray">{f.a}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
