// Central place for links + copy that may change. Edit here, not in components.

export const site = {
  name: 'Campus Update',
  tagline: 'Verified campus news, straight from your school to your phone.',
  // TODO(decide-later): wire these to the real destinations.
  // TODO(before launch): replace with the real support inbox.
  contactEmail: 'hello@campusupdate.com',
  links: {
    app: '#',            // "Go to app"
    earlyAccess: '#early-access',    // "Get early access" → scrolls to the sign-up section
    bringToSchool: '#early-access',  // "Bring it to my school" → same sign-up section (choose "School admin")
    privacy: '/privacy',
    terms: '/terms',
    cookies: '/cookies',
    // Store pages. Leave null until the app is live - the buttons then show "Coming soon".
    appStore: null as string | null,
    playStore: null as string | null,
    x: 'https://x.com/_campusupdate',
    instagram: 'https://www.instagram.com/divacacampusupdate/',
    linkedin: 'https://www.linkedin.com/company/campus-update/',
  },
};

export const nav = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Features', href: '/#features' },
  { label: 'FAQ', href: '/#faq' },
];

export const pillars = [
  { label: 'Verified', text: 'Only authorised school admins can publish.' },
  { label: 'Relevant', text: 'Sent to your faculty, department and level.' },
  { label: 'On time', text: 'Push alerts the moment your school sends one.' },
];

// Copy for the four empty problem cards - drawn from the Campus Update PRD ("2. Problem").
export const problems = [
  { n: '01', title: 'It arrives late', text: 'By the time a notice reaches the last WhatsApp group, the deadline has already passed.' },
  { n: '02', title: 'Deadlines get missed', text: 'Registration, exams and resumption dates are buried under hundreds of unread messages.' },
  { n: '03', title: 'Nobody can tell what’s real', text: 'A forwarded screenshot has no source. Fake notices spread as fast as the real ones.' },
  { n: '04', title: 'Everything is everywhere', text: 'Class reps, social feeds and word of mouth. Finding the one notice that matters takes digging.' },
];

export const steps = [
  { n: '01', title: 'School publishes', text: 'An authorised admin posts it.' },
  { n: '02', title: 'Right people', text: 'Targeted by faculty, department or level.' },
  { n: '03', title: 'Phone alerts', text: 'Push, when the school chooses.' },
  { n: '04', title: 'Clear label', text: 'You see exactly who said it.' },
] as const;

export const features = [
  { id: 'news', tab: 'News', title: 'Official news, clearly labelled', text: 'Browse, search and read school news. Every article carries an Official badge.' },
  { id: 'announcements', tab: 'Announcements', title: 'Urgent means urgent', text: 'Normal, Important or Urgent, marked by more than colour. Your school decides which ones send a push alert.' },
  { id: 'events', tab: 'Events', title: 'Events, with the source in plain sight', text: 'Official school events and promoted events sit side by side, each clearly labelled so you know who is behind it.' },
  { id: 'calendar', tab: 'Calendar', title: 'The academic calendar, always current', text: 'Registration, exams, resumption and holidays, kept up to date by your school, not by a group chat.' },
] as const;

export const faqs = [
  { q: 'What is Campus Update?', a: 'Campus Update is one app where students and staff receive verified news, announcements, events and the academic calendar directly from their school. No forwarded screenshots, no guessing.' },
  { q: 'Who can post official news?', a: 'Only authorised administrators at your school. Every official post carries a clear Official label, so you always know where it came from.' },
  { q: 'Is it really free?', a: 'Yes, for students, staff and schools. Official news, announcements, events and the school calendar are free to publish and free to read. Paid content such as ads and promoted events is always clearly labelled.' },
  { q: 'Will my phone buzz all day?', a: 'No. Push alerts are sent only when your school chooses to send one, not automatically for every post. You can also set your own notification preferences, and switch between Personalized and All Campus information.' },
  { q: 'Can I see other schools’ content?', a: 'No. Content is specific to your institution. You only see what your own school has published.' },
  { q: 'How do schools join?', a: 'Schools join through the early access list. Choose “School admin” on the sign-up form and tell us your institution. We’re starting with the Computer Science pilot at FOCIT, then opening up to more schools.' },
  { q: 'Is my data safe?', a: 'Content is specific to your institution, only authorised school admins can publish, and you never see another school’s content. You control your own notification preferences. Our Privacy Policy will set out exactly what we collect and how it is used.' },
  { q: 'Which devices does it work on?', a: 'Campus Update is built for your phone. Join the early access list and we’ll tell you as soon as it’s ready for your device.' },
];

// Closing sign-up banner (after the FAQ). The form's endpoint is set via PUBLIC_FORM_ENDPOINT.
export const earlyAccess = {
  badge: 'Early access',
  title: 'Be first to know.',
  text: 'Join the early access list for the FOCIT pilot.',
  points: [
    'Start with the Computer Science pilot at FOCIT',
    'Verified news, urgent alerts and your academic calendar in one app',
    'Schools publish for free, always clearly labelled',
  ],
};

// Sponsor shown in the strip under the pillars. Set `href` to link the logo (leave null for no link).
export const sponsor = {
  label: 'Sponsored by',
  name: 'Divaca Tech',
  logo: '/divaca-tech.png',
  href: null as string | null,
};
