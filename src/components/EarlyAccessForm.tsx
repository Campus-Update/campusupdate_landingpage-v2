import * as React from 'react';
import { ArrowRight, CheckCircle, SpinnerGap } from '@phosphor-icons/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { site } from '@/data/site';

const ROLES = ['Student', 'Staff', 'School admin'] as const;
type Status = 'idle' | 'submitting' | 'success' | 'error' | 'not-connected';

// Sign-ups are emailed to site.formEmail through FormSubmit. To use another service (Formspree, your own API),
// set PUBLIC_FORM_ENDPOINT. See .env.example.
const ENDPOINT = (import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined) || `https://formsubmit.co/ajax/${site.formEmail}`;

export default function EarlyAccessForm() {
  const [role, setRole] = React.useState<(typeof ROLES)[number]>('Student');
  const [status, setStatus] = React.useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (data._honey) { setStatus('success'); return; } // bots fill the hidden field
    setStatus('submitting');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Campus Update early access: ${data.name} (${role})`,
          _template: 'table',
          _captcha: 'false',
          _honey: data._honey ?? '',
          role,
          name: data.name,
          email: data.email,
          source: 'landing-early-access',
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="flex min-h-[360px] flex-col items-center justify-center gap-3 px-4 text-center">
        <CheckCircle weight="fill" className="size-14 text-indigo" aria-hidden="true" />
        <h3 className="text-3xl leading-tight">You’re on the list.</h3>
        <p className="max-w-[22em] text-gray">Thanks! We’ll email you as soon as the FOCIT pilot opens.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="grid gap-5" aria-describedby="ea-status">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />
      <fieldset className="grid gap-2.5">
        <legend className="mb-2.5 text-sm font-medium text-ink-strong">I am a</legend>
        <RadioGroup value={role} onValueChange={(v) => setRole(v as typeof role)} className="grid-cols-1 gap-2.5 sm:grid-cols-3" aria-label="I am a">
          {ROLES.map((r, i) => (
            <RadioGroupItem key={r} value={r} id={`role-${r}`}>
              {r}
            </RadioGroupItem>
          ))}
        </RadioGroup>
      </fieldset>

      <div className="grid gap-2.5">
        <Label htmlFor="ea-name">Full name</Label>
        <Input id="ea-name" name="name" autoComplete="name" required placeholder="Ade Okafor" />
      </div>
      <div className="grid gap-2.5">
        <Label htmlFor="ea-email">Email</Label>
        <Input id="ea-email" name="email" type="email" autoComplete="email" required placeholder="you@school.edu.ng" />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group mt-1 inline-flex h-14 w-full cursor-pointer items-center justify-between rounded-full bg-ink pr-2 pl-7 text-[17px] font-medium text-white transition-colors duration-200 outline-none hover:bg-[#2B2B2B] focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-wait disabled:opacity-80"
      >
        <span>{status === 'submitting' ? 'Joining…' : 'Join the list'}</span>
        <span className="grid size-10 place-items-center rounded-full bg-lavender text-indigo transition-colors duration-200 group-hover:bg-white">
          {status === 'submitting' ? <SpinnerGap className="size-5 animate-spin" aria-hidden="true" /> : <ArrowRight weight="bold" className="size-5" aria-hidden="true" />}
        </span>
      </button>

      <p
        id="ea-status"
        role="status"
        aria-live="polite"
        className={cn('min-h-5 text-sm', status === 'error' || status === 'not-connected' ? 'text-destructive' : 'text-gray')}
      >
        {status === 'error' && 'Something went wrong. Please try again in a moment.'}
        {status === 'not-connected' && 'Sign-up isn’t connected yet. This form will go live soon.'}
      </p>
    </form>
  );
}
