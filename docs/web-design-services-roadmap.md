# Web Design Services Roadmap

## Current Project Structure Summary

This is an existing personal portfolio website for Ahmad Niknam. It should be extended, not replaced, so the site can support both a personal IT portfolio and a freelance service for building professional portfolio websites.

Technology stack:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Static, component-based homepage
- No backend, database, login, payment, or complex interactive functionality

Important current files:

- `app/page.tsx` assembles the homepage sections in order: header, hero, about, skills, projects, experience, certifications, resume, contact, and footer.
- `app/layout.tsx` defines global metadata, SEO text, icons, Open Graph, and the root layout.
- `app/globals.css` contains Tailwind import, global theme variables, page background, typography, animations, and reduced-motion behavior.
- `components/header.tsx` renders the sticky navigation and tracks the active section using `navItems`.
- `components/hero.tsx` renders the main homepage hero.
- `components/about.tsx` renders the personal/about section.
- `components/projects.tsx` renders the current IT portfolio project cards.
- `components/contact.tsx` renders the contact section and contact calls to action.
- `components/section.tsx` provides the shared section wrapper used across most homepage sections.
- `components/footer.tsx` renders the footer.
- `lib/portfolio-data.ts` stores navigation items, profile links, hero badges, skills, projects, experience, certifications, and resume highlights.
- `public/profile.jpg` is used by the hero.
- `public/favicon.svg` is used by metadata and browser icons.

## Recommended Integration Approach

Add the web design services content as a new homepage section first, not as a separate page in the next step.

Reasoning:

- The site is currently a clean single-page portfolio with anchor navigation.
- A homepage section keeps the change simple and avoids creating a separate brand or separate website.
- Visitors can understand both sides of the site in one flow: IT background, technical credibility, portfolio projects, then portfolio website services.
- A separate page can be added later only if the service grows enough to need pricing, a longer process page, FAQs, detailed examples, or intake guidance.

Recommended placement:

- Add a new `Portfolio Websites` or `Website Services` section after `Projects` and before `Experience`.
- Keep `Projects` focused on Ahmad's IT/project portfolio.
- Use the new section to explain the freelance portfolio website service for professionals, students, researchers, job seekers, newcomers in Canada, consultants, and freelancers.
- Keep the service section static and content-driven. Do not add forms, payment, scheduling, login, or backend behavior.

## Proposed New/Updated Sections

### Hero

Update the hero so it still leads with Ahmad's IT background, but also introduces practical portfolio website services.

The hero should make it clear that this is one combined personal portfolio, not a separate web design company.

### Portfolio Website Services

Add a new homepage section with practical customer-focused content:

- Who the service is for
- What Ahmad can build
- What a simple portfolio website can include
- Why the work is practical for the Canadian job and professional market
- A clear call to action to contact by email or LinkedIn

Suggested section title:

`Professional portfolio websites for career and freelance visibility.`

Suggested section description:

`I help professionals, students, researchers, newcomers, job seekers, consultants, and freelancers create clean portfolio websites that present their background, projects, and services clearly.`

Suggested cards:

- `For IT professionals`: technical profile, certifications, projects, GitHub, LinkedIn, and contact details.
- `For students and researchers`: education, research work, publications, projects, and academic profile.
- `For job seekers and newcomers`: Canadian-market profile, skills, work samples, resume request, and professional contact links.
- `For consultants and freelancers`: services, credibility, work samples, process, and inquiry call to action.

### Portfolio Website Samples

Add a small demo/sample area inside the new services section or as a separate nearby section if the content becomes too large.

These should be example concepts, not fake client claims.

Suggested sample cards:

- `IT Support Portfolio`: homepage for an IT support or systems administrator profile.
- `Project Manager Portfolio`: structured portfolio for project outcomes, certifications, tools, and case studies.
- `Student or New Graduate Portfolio`: education, projects, volunteer work, and career goals.
- `Researcher Portfolio`: research interests, publications, talks, projects, and academic contact.
- `Consultant Portfolio`: services, trust signals, sample work, process, and inquiry links.
- `Newcomer Career Portfolio`: Canadian job-market profile, transferable experience, certifications, and contact options.

Avoid wording that suggests these are completed client projects unless real examples are available.

### Contact

Update the contact section so it can support two types of inquiries:

- IT infrastructure, cloud support, systems administration, and operations opportunities.
- Portfolio website design inquiries.

Use placeholder email text for service-facing content if needed:

- `your.email@example.com`

Keep the correct LinkedIn URL:

- `https://www.linkedin.com/in/ahmad-niknam/`

Do not add a contact form in the next step.

### Metadata

Update the metadata in a balanced way so the site remains Ahmad's personal IT portfolio while also mentioning professional portfolio website services.

Avoid keyword stuffing. Keep the page title and description professional and clear.

## Proposed Hero Text

Recommended hero eyebrow:

`Ahmad Niknam`

Recommended hero badge:

`IT Portfolio + Professional Portfolio Website Services`

Recommended hero title:

`Practical IT experience and clean portfolio websites for professionals building their next opportunity.`

Recommended hero body:

`I am an IT infrastructure and cloud support professional based in Regina, Saskatchewan. Alongside my technical portfolio, I help professionals, students, researchers, job seekers, newcomers, consultants, and freelancers create clear, modern portfolio websites that present their work with confidence.`

Recommended primary CTA:

`View IT Projects`

Recommended secondary CTA:

`Portfolio Website Services`

Recommended tertiary CTA:

`Connect on LinkedIn`

## Proposed Navigation Changes

Current navigation:

- About
- Skills
- Projects
- Experience
- Certifications
- Contact

Recommended navigation for the next step:

- About
- Skills
- Projects
- Website Services
- Experience
- Contact

Notes:

- Add a `#services` or `#website-services` anchor.
- Consider removing `Certifications` from the main navigation if the nav becomes too crowded, while keeping the section on the page.
- Keep the header horizontally scrollable on small screens, as it already supports mobile overflow.
- Do not add a separate route yet.

## Proposed Demo Portfolio Samples

The next step can add a simple data array for sample website concepts. Suggested fields:

- `title`
- `audience`
- `description`
- `sections`
- `bestFor`

Suggested sample data:

- `IT Professional Portfolio`: for IT support specialists, systems administrators, cloud administrators, and network support analysts.
- `Project Manager Portfolio`: for project coordinators and project managers who need to show project outcomes and tools.
- `Student Portfolio`: for students and recent graduates who need a professional online presence.
- `Researcher Profile`: for researchers who need to present publications, research interests, and academic work.
- `Consultant Portfolio`: for independent consultants or freelancers who need to explain services and credibility.
- `Newcomer Career Portfolio`: for newcomers in Canada who want to present transferable experience, certifications, and work samples.

These should be presented as example website types Ahmad can build, not as completed client case studies.

## Files To Modify In The Next Step

Likely files:

- `app/page.tsx`: import and place the new services section.
- `app/layout.tsx`: update metadata title, description, keywords, Open Graph, and Twitter text.
- `components/hero.tsx`: update hero text and calls to action.
- `components/header.tsx`: no structural change expected, but it will reflect updated `navItems`.
- `components/contact.tsx`: add web design inquiry language and placeholder service email if needed.
- `lib/portfolio-data.ts`: add/update `navItems`, hero badges, profile links if needed, service audiences, service features, and demo portfolio samples.

New file likely needed:

- `components/web-design-services.tsx`: new homepage section for portfolio website services and demo website concepts.

Files that probably do not need changes:

- `app/globals.css`: current Tailwind utility approach and global styling should be enough.
- `components/section.tsx`: existing shared section wrapper is suitable.
- `next.config.ts`: no expected change.
- `package.json`: no dependency changes needed.

## Testing Checklist

After implementation:

- Run `npm run lint`.
- Run `npm run build`.
- Check the homepage at desktop, tablet, and mobile widths.
- Confirm navigation anchors scroll to the correct sections.
- Confirm the new services section does not crowd the existing IT portfolio content.
- Confirm the LinkedIn link is exactly `https://www.linkedin.com/in/ahmad-niknam/`.
- Confirm no resume PDF is added or linked.
- Confirm no backend, database, login, payment, form submission, or unnecessary dependency is introduced.
- Confirm service wording is practical, customer-focused, and not exaggerated.
- Confirm demo website samples are clearly labeled as examples or concepts.
- Confirm contact copy does not expose private information and uses placeholder email text if needed.

## Recommended Git Commit Message

`docs: plan portfolio website services integration`
