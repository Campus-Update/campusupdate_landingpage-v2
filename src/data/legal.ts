// Legal page copy. DRAFTS - have a lawyer review before launch (see TODOs in README / chat).
export type Block = { p: string } | { ul: string[] };
export type Section = { id: string; title: string; body: Block[] };
export const legalUpdated = '22 October 2026';

export const privacy: Section[] = [
  { id: 'who-we-are', title: 'Who we are', body: [
    { p: 'Campus Update is an app that lets schools publish verified news, announcements, events and the academic calendar to their students and staff. This policy explains what personal data we collect, why, and the choices you have. It covers this website and the Campus Update app.' },
    { p: 'We are currently piloting with the Computer Science department at FOCIT. Our principal place of operation is Nigeria, and we handle personal data in line with the Nigeria Data Protection Act 2023.' },
  ]},
  { id: 'what-we-collect', title: 'What we collect', body: [
    { p: 'On this website, if you join the early access list, we collect:' },
    { ul: ['Your full name and email address.', 'Whether you are a student, staff member or school admin.', 'Technical data your browser sends automatically, such as your IP address and device type, which our hosting provider keeps in short-lived server logs.'] },
    { p: 'In the app, we collect the information needed to give you your school’s content: your account details, your school, faculty, department and level, and your notification preferences. We do not sell your personal data.' },
  ]},
  { id: 'how-we-use-it', title: 'How we use it', body: [
    { ul: ['To contact you about early access and the launch.', 'To show you only the content your school has published for you, and to send push alerts when your school chooses to send one.', 'To keep the service secure, fix problems and prevent misuse.', 'To meet our legal obligations.'] },
  ]},
  { id: 'legal-basis', title: 'Why we may process it', body: [
    { p: 'We process your data with your consent (for example, when you join the early access list), to provide the service you asked for, to meet legal obligations, and for our legitimate interests in running and securing Campus Update. You can withdraw consent at any time.' },
  ]},
  { id: 'sharing', title: 'Who we share it with', body: [
    { p: 'Your school sees the information needed to publish content to the right people. We also use trusted service providers, such as hosting and email delivery, who may only process data on our instructions. We never share your data with advertisers. We may disclose data where the law requires it.' },
  ]},
  { id: 'retention', title: 'How long we keep it', body: [
    { p: 'We keep early access details until the pilot and launch communications are complete, or until you ask us to remove them. Account data is kept while your account is active and for a reasonable period afterwards, unless the law requires longer.' },
  ]},
  { id: 'security', title: 'Security', body: [
    { p: 'We use reasonable technical and organisational measures to protect your data, including restricting publishing to authorised school admins and separating each school’s content. No system is perfectly secure, so we cannot guarantee absolute security.' },
  ]},
  { id: 'your-rights', title: 'Your rights', body: [
    { p: 'You can ask us to access, correct or delete your personal data, to restrict or object to how we use it, and to give you a copy of it. You can also withdraw consent and unsubscribe from emails at any time. To make a request, email us using the address at the bottom of this page. You also have the right to complain to the Nigeria Data Protection Commission.' },
  ]},
  { id: 'children', title: 'Children', body: [
    { p: 'Campus Update is built for university students and staff. It is not directed at young children, and we do not knowingly collect their personal data.' },
  ]},
  { id: 'changes', title: 'Changes to this policy', body: [
    { p: 'We may update this policy as the product grows. We will change the date at the top and, for significant changes, tell you by email or in the app.' },
  ]},
];

export const terms: Section[] = [
  { id: 'agreement', title: 'Agreement', body: [
    { p: 'These terms govern your use of the Campus Update website and app. By using them, you agree to these terms. If you do not agree, please do not use Campus Update. If you use Campus Update on behalf of a school, you confirm you are authorised to accept these terms for that school.' },
  ]},
  { id: 'the-service', title: 'The service', body: [
    { p: 'Campus Update lets schools publish official content to their own students and staff. We are currently running an early access pilot, so features may change, be removed or be unavailable at times.' },
  ]},
  { id: 'accounts', title: 'Accounts', body: [
    { ul: ['Give accurate information and keep your login details private.', 'You are responsible for activity on your account.', 'Only authorised school admins can publish official content. Admin access is granted and removed by the school.'] },
  ]},
  { id: 'acceptable-use', title: 'Acceptable use', body: [
    { p: 'You agree not to:' },
    { ul: ['Publish false, misleading, unlawful or abusive content, or pass off content as official when it is not.', 'Attempt to access content or accounts that are not yours, including other schools’ content.', 'Interfere with or attempt to break the security or operation of the service.', 'Use the service to send spam or to harvest other people’s data.'] },
  ]},
  { id: 'content', title: 'Content', body: [
    { p: 'Schools and admins own the content they publish and are responsible for its accuracy. They give us permission to host, display and deliver it through Campus Update. Paid content, such as promoted events, is always clearly labelled. We may remove content that breaks these terms or the law.' },
  ]},
  { id: 'ip', title: 'Our intellectual property', body: [
    { p: 'The Campus Update name, logo, design and software belong to us or our licensors. You may not copy, modify or reuse them without our written permission.' },
  ]},
  { id: 'availability', title: 'Availability and changes', body: [
    { p: 'We aim to keep Campus Update running reliably, but we do not promise it will always be available or error-free. We may change, suspend or end the service, or these terms, at any time. We will give notice of material changes.' },
  ]},
  { id: 'liability', title: 'Liability', body: [
    { p: 'The service is provided “as is”. To the fullest extent the law allows, we are not liable for indirect or consequential loss, or for decisions you make based on content published by schools. Nothing in these terms limits liability that cannot be limited by law.' },
  ]},
  { id: 'termination', title: 'Ending your use', body: [
    { p: 'You can stop using Campus Update at any time. We may suspend or end access if you break these terms or put the service or other users at risk.' },
  ]},
  { id: 'law', title: 'Governing law', body: [
    { p: 'These terms are governed by the laws of the Federal Republic of Nigeria. Any dispute will be handled by the courts of Nigeria.' },
  ]},
];

export const cookies: Section[] = [
  { id: 'overview', title: 'Your cookie choices', body: [
    { p: 'Cookies are small files a website stores on your device. This page explains which ones Campus Update uses and how you can control them.' },
  ]},
  { id: 'what-we-use', title: 'What we use today', body: [
    { p: 'At the moment this website does not use advertising or analytics cookies, and we do not track you across other sites. The site stores only a small amount of information in your browser that it needs to work properly, such as your motion preference so animations respect your device settings.' },
    { ul: ['Strictly necessary: needed for the site to load and work. These cannot be switched off.', 'Analytics: not in use. If we add them, we will ask for your consent first.', 'Advertising: not in use, and we have no plans to add them.'] },
  ]},
  { id: 'control', title: 'Controlling cookies', body: [
    { p: 'You can block or delete cookies in your browser settings. Doing so may affect parts of the site. Because we use no optional cookies today, there is nothing further for you to switch off here.' },
  ]},
  { id: 'changes', title: 'If this changes', body: [
    { p: 'If we introduce optional cookies, such as analytics, this page will list each one and you will be able to accept or decline them. We will update the date below when that happens.' },
  ]},
];
